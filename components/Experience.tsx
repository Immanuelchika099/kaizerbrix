'use client';

import Image from 'next/image';
import Link from 'next/link';
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, useId, type ComponentProps, type MutableRefObject, type ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';
import { brand, navItems, projects, projectSlugs } from '@/app/data';

gsap.registerPlugin(ScrollTrigger, Flip, useGSAP);

type MotionContextValue = { navigate: (href: string, source?: HTMLElement | null) => void; lenis: MutableRefObject<Lenis | null> };
const MotionContext = createContext<MotionContextValue | null>(null);
export function useMotion() {
  const value = useContext(MotionContext);
  if (!value) throw new Error('useMotion must be used inside MotionShell');
  return value;
}

function BrandMark({ className = '' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 130 110" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="square" strokeLinejoin="round"><path d="M24 100V43L57 10Q72 -1 83 12Q94 25 80 39L57 62V100"/><path d="M51 100V57L84 24Q97 11 109 24Q121 37 107 51L84 74V100"/></g></svg>;
}


export function KPortal({ label = 'K portal transition' }: { label?: string }) {
  const root = useRef<HTMLElement | null>(null);
  const group = useRef<SVGGElement | null>(null);
  const rawId = useId();
  const maskId = 'kb-portal-' + rawId.replace(/:/g, '');
  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !root.current || !group.current) return;
    gsap.set(group.current, { scale: 1, transformOrigin: '50% 50%', transformBox: 'fill-box' });
    gsap.to(group.current, { scale: 8.5, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: '+=90%', scrub: 1, pin: true, anticipatePin: 1, invalidateOnRefresh: true } });
  }, { scope: root, revertOnUpdate: true });
  return <section ref={root} className="k-portal" aria-label={label} data-nav-theme="ink" data-scene-label="K / PORTAL"><svg viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true"><defs><mask id={maskId}><rect width="1000" height="1000" fill="white"/><g ref={group} fill="black"><path d="M275 170H410V435L615 210H790L550 470L815 830H640L445 575L410 615V830H275Z"/></g></mask></defs><rect width="1000" height="1000" fill="#DF481D" mask={"url(#" + maskId + ")"}/></svg></section>;
}

function SessionPreloader() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    try {
      if (sessionStorage.getItem('kaizerbrix-film-intro-seen')) return;
      sessionStorage.setItem('kaizerbrix-film-intro-seen', '1');
      setVisible(true);
    } catch { setVisible(false); }
  }, []);
  useGSAP(() => {
    if (!visible || !ref.current) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const paths = ref.current.querySelectorAll<SVGPathElement>('path');
    if (reduced) {
      gsap.to(ref.current, { opacity: 0, duration: 0.2, delay: 0.2, onComplete: () => setVisible(false) });
      return;
    }
    gsap.set(paths, { strokeDasharray: 620, strokeDashoffset: 620 });
    const timeline = gsap.timeline({ onComplete: () => setVisible(false) });
    timeline.to(paths, { strokeDashoffset: 0, duration: 0.7, stagger: 0.08, ease: 'power2.inOut' });
    const plane = ref.current.querySelector('.preloader-plane');
    if (plane) timeline.to(plane, { clipPath: 'polygon(0 0,100% 0,100% 100%,0 100%)', duration: 0.45, ease: 'power3.inOut' }, '-=0.12');
    timeline.to(ref.current, { yPercent: -105, duration: 0.52, ease: 'power3.inOut' }, '-=0.05');
  }, { scope: ref, dependencies: [visible], revertOnUpdate: true });
  if (!visible) return null;
  return <div className="session-preloader" ref={ref} aria-hidden="true"><svg className="preloader-mark" viewBox="0 0 130 110"><g fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="square" strokeLinejoin="round"><path d="M24 100V43L57 10Q72 -1 83 12Q94 25 80 39L57 62V100"/><path d="M51 100V57L84 24Q97 11 109 24Q121 37 107 51L84 74V100"/></g></svg><div className="preloader-plane"/></div>;
}

export function MotionShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const rootRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<SVGSVGElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const previousPath = useRef(pathname);
  const pendingPath = useRef<string | null>(null);
  const pendingKind = useRef<'standard' | 'project'>('standard');
  const sharedCloneRef = useRef<HTMLElement | null>(null);
  const [transitionActive, setTransitionActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [preview, setPreview] = useState<string>('/images/golden-tower.webp');
  const [navTheme, setNavTheme] = useState<'ink' | 'white' | 'orange'>('ink');
  const [navHidden, setNavHidden] = useState(false);
  const [navPinned, setNavPinned] = useState(false);
  const [slate, setSlate] = useState('SC 01 / 08 — HOME');
  const [progress, setProgress] = useState(0);

  useGSAP(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced) {
      const lenis = new Lenis({ lerp: 0.09, smoothWheel: true, syncTouch: false });
      lenisRef.current = lenis;
      const raf = (time: number) => lenis.raf(time * 1000);
      const update = () => ScrollTrigger.update();
      lenis.on('scroll', update);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
      return () => { gsap.ticker.remove(raf); lenis.destroy(); lenisRef.current = null; };
    }
  }, { scope: rootRef });

  const navigate = useCallback((href: string, source?: HTMLElement | null) => {
    if (href === pathname || transitionActive) { setMenuOpen(false); return; }
    setMenuOpen(false);
    pendingPath.current = href;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    pendingKind.current = source && !reduced ? 'project' : 'standard';
    if (reduced || !planeRef.current) {
      setTransitionActive(true);
      gsap.to(rootRef.current, { opacity: 0, duration: 0.1, onComplete: () => router.push(href) });
      return;
    }
    setTransitionActive(true);
    lenisRef.current?.stop();
    if (source) {
      const rect = source.getBoundingClientRect();
      const clone = source.cloneNode(true) as HTMLElement;
      clone.classList.add('shared-transition-clone');
      Object.assign(clone.style, { position: 'fixed', top: rect.top + 'px', left: rect.left + 'px', width: rect.width + 'px', height: rect.height + 'px', margin: '0', zIndex: '250', pointerEvents: 'none', transformOrigin: 'top left' });
      document.body.appendChild(clone);
      sharedCloneRef.current = clone;
      const state = Flip.getState(clone);
      gsap.set(clone, { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight });
      Flip.from(state, { duration: 0.72, ease: 'power3.inOut', absolute: true, scale: true, onComplete: () => router.push(href) });
      return;
    }
    const plane = planeRef.current;
    const mark = markRef.current;
    gsap.set(plane, { clipPath: 'polygon(0 0,0 0,0 100%,0 100%)', visibility: 'visible' });
    const timeline = gsap.timeline({ onComplete: () => router.push(href) });
    timeline.to(plane, { clipPath: 'polygon(0 0,100% 0,100% 100%,0 100%)', duration: 0.7, ease: 'power3.inOut' });
    if (mark) {
      const paths = mark.querySelectorAll('path');
      gsap.set(paths, { strokeDasharray: 520, strokeDashoffset: 520 });
      timeline.fromTo(mark, { opacity: 0, scale: 0.78, rotation: -7 }, { opacity: 1, scale: 1, rotation: 0, duration: 0.3, ease: 'power3.out' }, 0.2);
      timeline.to(paths, { strokeDashoffset: 0, duration: 0.48, stagger: 0.06, ease: 'power2.out' }, 0.2);
    }
  }, [pathname, router, transitionActive]);

  useEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;
    setMenuOpen(false);
    lenisRef.current?.scrollTo(0, { immediate: true, force: true });
    window.scrollTo({ top: 0, behavior: 'auto' });
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      const hash = window.location.hash;
      if (hash) requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'auto', block: 'start' }));
    });
    if (!transitionActive || !planeRef.current) {
      const route = rootRef.current?.querySelector('.route-content');
      if (route) gsap.fromTo(route, { opacity: 0 }, { opacity: 1, duration: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0.2 : 0.3, ease: 'power2.out' });
      return;
    }
    const finish = () => { setTransitionActive(false); pendingPath.current = null; lenisRef.current?.start(); };
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (pendingKind.current === 'project' && sharedCloneRef.current) {
      const clone = sharedCloneRef.current;
      const revealProject = () => gsap.to(clone, { opacity: 0, duration: 0.2, delay: 0.05, onComplete: () => { clone.remove(); sharedCloneRef.current = null; finish(); } });
      const hero = rootRef.current?.querySelector<HTMLImageElement>('.route-content .case-hero img');
      if (hero) void hero.decode().catch(() => undefined).then(revealProject); else revealProject();
      return;
    }
    if (reduced) {
      gsap.fromTo(rootRef.current, { opacity: 0 }, { opacity: 1, duration: 0.2, onComplete: finish });
      return;
    }
    const revealRoute = () => {
      gsap.to(markRef.current, { opacity: 0, scale: 1.08, duration: 0.18, ease: 'power2.in' });
      gsap.to(planeRef.current, { clipPath: 'polygon(100% 0,100% 0,100% 100%,100% 100%)', duration: 0.62, delay: 0.08, ease: 'power3.inOut', onComplete: finish });
    };
    const hero = rootRef.current?.querySelector<HTMLImageElement>('.route-content .page-hero img, .route-content .case-hero img');
    if (hero) void hero.decode().catch(() => undefined).then(revealRoute); else revealRoute();
  }, [pathname, transitionActive]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    let cancelled = false;
    const refresh = () => { if (!cancelled) ScrollTrigger.refresh(); };
    void document.fonts.ready.then(refresh);
    const images = Array.from(root.querySelectorAll<HTMLImageElement>('img'));
    void Promise.all(images.map((image) => image.decode().catch(() => undefined))).then(refresh);
    return () => { cancelled = true; };
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) { lenisRef.current?.start(); return; }
    lenisRef.current?.stop();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
      if (event.key === 'Tab') {
        const nodes = Array.from(document.querySelectorAll<HTMLElement>('.menu-overlay a, .menu-overlay button'));
        if (!nodes.length) return;
        const first = nodes[0]; const last = nodes[nodes.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKeyDown);
    requestAnimationFrame(() => document.querySelector<HTMLElement>('.menu-link')?.focus());
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const pinned = Boolean(document.querySelector('.pin-spacer > [data-nav-theme]')) && Array.from(document.querySelectorAll<HTMLElement>('.pin-spacer > [data-nav-theme]')).some((scene) => { const rect = scene.getBoundingClientRect(); return rect.top <= 90 && rect.bottom > 90; });
      setNavPinned(pinned);
      if (!menuOpen && !pinned) setNavHidden(y > 130 && y > lastY + 3);
      else setNavHidden(false);
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      setProgress(Math.min(1, Math.max(0, y / max)));
      const scenes = Array.from(document.querySelectorAll<HTMLElement>('[data-nav-theme]'));
      const active = scenes.find((scene) => { const rect = scene.getBoundingClientRect(); return rect.top <= 90 && rect.bottom > 90; });
      if (active) {
        const theme = active.dataset.navTheme;
        setNavTheme(theme === 'white' || theme === 'orange' ? theme : 'ink');
        const label = active.dataset.sceneLabel;
        if (label) setSlate(label);
      } else setNavTheme('ink');
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname, menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const overlay = document.querySelector<HTMLElement>('.menu-overlay');
    const links = gsap.utils.toArray<HTMLElement>('.menu-link');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!overlay) return;
    if (reduced) { gsap.set(overlay, { clipPath: 'polygon(0 0,100% 0,100% 100%,0 100%)' }); gsap.set(links, { clipPath: 'inset(0 0 0% 0)' }); return; }
    gsap.set(overlay, { visibility: 'visible', clipPath: 'polygon(0 0,0 0,0 100%,0 100%)' });
    gsap.timeline().to(overlay, { clipPath: 'polygon(0 0,100% 0,86% 100%,0 100%)', duration: 0.8, ease: 'power3.inOut' }).to(links, { clipPath: 'inset(0 0 0% 0)', y: 0, stagger: 0.055, duration: 0.42, ease: 'power3.out' }, '-=0.35');
    return () => { gsap.killTweensOf([overlay, ...links]); };
  }, [menuOpen]);

  useEffect(() => {
    if (!transitionActive && planeRef.current) gsap.set(planeRef.current, { visibility: 'hidden' });
  }, [transitionActive]);

  const contextValue = useMemo(() => ({ navigate, lenis: lenisRef }), [navigate]);
  return <MotionContext.Provider value={contextValue}>
    <div className="site-root" ref={rootRef}><SessionPreloader/>
      <div className="site-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <header className="site-nav" data-theme={navTheme} data-hidden={navHidden && !menuOpen} data-pinned={navPinned}>
        <div className="nav-left"><Link href="/" aria-label="KaizerBrix Consults home" onClick={(e) => { e.preventDefault(); navigate('/'); }}><BrandMark className="k-mark" /></Link></div>
        <div className="nav-right"><span className="nav-slate">{slate}</span><Link className="nav-contact" href="/contact" onClick={(e) => { e.preventDefault(); navigate('/contact'); }}>CONTACT</Link><button className="nav-menu" type="button" aria-expanded={menuOpen} aria-controls="site-menu" onClick={() => setMenuOpen((value) => !value)}><span>{menuOpen ? 'CLOSE' : 'MENU'}</span><span className="menu-lines" aria-hidden="true"><i/><i/></span></button></div>
      </header>
      <nav id="site-menu" className={`menu-overlay ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation" aria-hidden={!menuOpen} inert={!menuOpen}>
        <div className="menu-links">{navItems.map((item, i) => <Link key={item.href} href={item.href} tabIndex={menuOpen ? 0 : -1} aria-current={pathname === item.href ? 'page' : undefined} className="menu-link" onMouseEnter={() => item.image && setPreview(item.image)} onFocus={() => item.image && setPreview(item.image)} onClick={(e) => { e.preventDefault(); navigate(item.href); }}><small>{String(i + 1).padStart(2, '0')}</small><span>{item.label}</span></Link>)}</div>
        <div className="menu-preview" aria-hidden="true"><MediaFrame src={preview} alt="Architectural preview" priority={false} /></div>
        <div className="menu-bottom"><span>{brand.address}</span><a href="tel:+2347073847960">+234 (0) 707 384 7960</a><a href="mailto:kaizerbrixconsults@gmail.com">kaizerbrixconsults@gmail.com</a></div>
      </nav>
      <div className="page-transition" aria-hidden="true" style={{ visibility: transitionActive ? 'visible' : 'hidden' }}><div className="transition-plane" ref={planeRef}/><svg ref={markRef} className="transition-mark" viewBox="0 0 130 110" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="square" strokeLinejoin="round"><path d="M24 100V43L57 10Q72 -1 83 12Q94 25 80 39L57 62V100"/><path d="M51 100V57L84 24Q97 11 109 24Q121 37 107 51L84 74V100"/></g></svg></div>
      <div key={pathname} className="route-content">{children}</div>
    </div>
  </MotionContext.Provider>;
}

export function TransitionLink({ href, children, className, ...props }: ComponentProps<typeof Link>) {
  const { navigate } = useMotion();
  const preload = () => {
    const path = String(href).split('#')[0];
    let src: string | undefined = navItems.find((item) => item.href === path)?.image;
    if (path.startsWith('/projects/')) {
      const index = projectSlugs.findIndex((item) => item.slug === path.split('/')[2]);
      if (index >= 0) src = projects[index]?.image;
    }
    if (src) { const image = new window.Image(); image.decoding = 'async'; image.src = src; }
  };
  return <Link href={href} className={className} {...props} onMouseEnter={(event) => { props.onMouseEnter?.(event); preload(); }} onFocus={(event) => { props.onFocus?.(event); preload(); }} onClick={(event) => { props.onClick?.(event); if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return; event.preventDefault(); navigate(String(href), className?.includes('project-transition') ? (event.currentTarget.querySelector('.media-frame') as HTMLElement | null) : null); }}>{children}</Link>;
}

export function MediaFrame({ src, alt, caption, priority = false, className = '' }: { src?: string; alt: string; caption?: string; priority?: boolean; className?: string }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => { setFailed(false); }, [src]);
  return <figure className={`media-frame ${className}`}>
    <div className="media-blueprint" aria-hidden="true"/>
    {src && !failed ? <Image src={src} alt={alt} fill sizes="(max-width: 760px) 100vw, 70vw" priority={priority} onError={() => setFailed(true)} /> : null}
    <span className="media-caption"><span>{caption ?? (failed || !src ? 'SOURCE IMAGE REQUIRED' : 'KAIZERBRIX / PROJECT RECORD')}</span><span>KB—01</span></span>
  </figure>;
}

export function SceneReveal({ children, className = '', id, theme = 'ink', label }: { children: ReactNode; className?: string; id?: string; theme?: 'ink' | 'white' | 'orange'; label?: string }) {
  const ref = useRef<HTMLElement | null>(null);
  useGSAP(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !ref.current) return;
    ref.current.querySelectorAll<HTMLElement>('[data-weight-scrub]').forEach((target) => {
      gsap.fromTo(target, { fontWeight: 200 }, { fontWeight: 800, ease: 'none', scrollTrigger: { trigger: target, start: 'top 70%', end: 'center 42%', scrub: 0.8 } });
    });
    const targets = ref.current.querySelectorAll<HTMLElement>('[data-reveal]');
    targets.forEach((target) => {
      gsap.fromTo(target, { y: 42, opacity: 0, clipPath: 'inset(0 0 12% 0)' }, { y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)', duration: 0.85, ease: 'power3.out', scrollTrigger: { trigger: target, start: 'top 84%', once: true } });
    });
    if (ref.current.nextElementSibling?.classList.contains('orange-scene')) {
      gsap.to(ref.current, { backgroundColor: '#FFF6F1', ease: 'none', scrollTrigger: { trigger: ref.current, start: 'bottom 100%', end: 'bottom 35%', scrub: 0.8 } });
    }
    ref.current.querySelectorAll<HTMLElement>('figure.media-frame').forEach((photo) => {
      gsap.fromTo(photo, { clipPath: 'inset(12% 7% 12% 7%)' }, { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none', scrollTrigger: { trigger: photo, start: 'top 85%', end: 'center 48%', scrub: 0.8 } });
      const image = photo.querySelector('img');
      if (image) gsap.fromTo(image, { scale: 1.08, filter: 'grayscale(1) sepia(.45) saturate(.7)' }, { scale: 1, filter: 'grayscale(0) sepia(0) saturate(1.04)', ease: 'none', scrollTrigger: { trigger: photo, start: 'top 90%', end: 'center 48%', scrub: 0.8 } });
    });
    if (ref.current.classList.contains('home-projects') && window.matchMedia('(min-width: 761px)').matches) {
      const track = ref.current.querySelector<HTMLElement>('.home-project-grid');
      if (track) {
        const distance = () => Math.max(0, track.scrollWidth - window.innerWidth + 2 * parseFloat(getComputedStyle(ref.current as HTMLElement).paddingLeft));
        gsap.to(track, { x: () => -distance(), ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top top', end: () => '+=' + Math.max(window.innerHeight * 1.2, distance()), pin: true, scrub: 1, anticipatePin: 1, invalidateOnRefresh: true, onUpdate: (self) => gsap.to(track, { skewX: gsap.utils.clamp(-1.5, 1.5, self.getVelocity() / 1800), duration: 0.18, overwrite: true }), onScrubComplete: () => gsap.to(track, { skewX: 0, duration: 0.25, ease: 'power2.out' }) } });
      }
    }
  }, { scope: ref, dependencies: [id, className], revertOnUpdate: true });
  return <section ref={ref} id={id} className={`scene ${className}`} data-nav-theme={theme} data-scene-label={label}>{children}</section>;
}

export function PageTitle({ number, title, eyebrow, description, image, imageAlt }: { number: string; title: string; eyebrow: string; description: string; image?: string; imageAlt?: string }) {
  return <SceneReveal className="page-hero" theme="ink" label={`SC ${number} / TITLE`}>
    <div><p className="scene-label" data-reveal>{eyebrow}</p><h1 className="display" data-reveal>{title}</h1></div>
    <div className="hero-side" data-reveal><p>{description}</p><span className="micro">{number} / KAIZERBRIX CONSULTS</span></div>
    {image ? <MediaFrame className="hero-media" src={image} alt={imageAlt ?? title} caption={title} priority /> : null}
  </SceneReveal>;
}

export function Credits() {
  return <footer className="credits" data-nav-theme="orange" data-scene-label="SC 08 / CREDITS">
    <div className="credits-top"><div><p className="scene-label">KAIZERBRIX CONSULTS / PORT HARCOURT</p><h2>BUILDING<br/>LEGACIES<span>.</span></h2></div><BrandMark className="credits-mark"/></div>
    <div className="credits-links">{navItems.map((item) => <TransitionLink key={item.href} href={item.href}>{item.label} ↗</TransitionLink>)}</div>
    <div className="credits-bottom"><span>{brand.address}</span><span><a href="tel:+2347073847960">+234 (0) 707 384 7960</a> · <a href="mailto:kaizerbrixconsults@gmail.com">kaizerbrixconsults@gmail.com</a></span><span>© {new Date().getFullYear()} KAIZERBRIX CONSULTS</span></div>
  </footer>;
}

export function KMark() { return <BrandMark className="orange-k" />; }
