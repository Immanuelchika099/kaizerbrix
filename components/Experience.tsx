'use client';

import Image from 'next/image';
import Link from 'next/link';
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ComponentProps, type MutableRefObject, type ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';
import { brand, navItems } from '@/app/data';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type MotionContextValue = { navigate: (href: string) => void; lenis: MutableRefObject<Lenis | null> };
const MotionContext = createContext<MotionContextValue | null>(null);
export function useMotion() {
  const value = useContext(MotionContext);
  if (!value) throw new Error('useMotion must be used inside MotionShell');
  return value;
}

function BrandMark({ className = '' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 130 110" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="square" strokeLinejoin="round"><path d="M24 100V43L57 10Q72 -1 83 12Q94 25 80 39L57 62V100"/><path d="M51 100V57L84 24Q97 11 109 24Q121 37 107 51L84 74V100"/></g></svg>;
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
  const [transitionActive, setTransitionActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [preview, setPreview] = useState<string>('/images/golden-tower.webp');
  const [navTheme, setNavTheme] = useState<'ink' | 'white' | 'orange'>('ink');
  const [navHidden, setNavHidden] = useState(false);
  const [slate, setSlate] = useState('SC 01 / 08 — HOME');
  const [progress, setProgress] = useState(0);
  const current = useMemo(() => navItems.find((item) => item.href === pathname)?.label ?? (pathname.startsWith('/projects/') ? 'Projects' : 'Home'), [pathname]);

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

  const navigate = useCallback((href: string) => {
    if (href === pathname || transitionActive) { setMenuOpen(false); return; }
    setMenuOpen(false);
    pendingPath.current = href;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !planeRef.current) { setTransitionActive(true); router.push(href); return; }
    setTransitionActive(true);
    lenisRef.current?.stop();
    const plane = planeRef.current;
    const mark = markRef.current;
    gsap.set(plane, { clipPath: 'polygon(0 0,0 0,0 100%,0 100%)', visibility: 'visible' });
    const timeline = gsap.timeline({ onComplete: () => router.push(href) });
    timeline.to(plane, { clipPath: 'polygon(0 0,100% 0,100% 100%,0 100%)', duration: 0.7, ease: 'power3.inOut' });
    if (mark) timeline.fromTo(mark, { opacity: 0, scale: 0.78, rotation: -7 }, { opacity: 1, scale: 1, rotation: 0, duration: 0.3, ease: 'power3.out' }, 0.2);
  }, [pathname, router, transitionActive]);

  useEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;
    setMenuOpen(false);
    lenisRef.current?.scrollTo(0, { immediate: true, force: true });
    window.scrollTo({ top: 0, behavior: 'auto' });
    requestAnimationFrame(() => ScrollTrigger.refresh());
    if (!transitionActive || !planeRef.current) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      gsap.to(rootRef.current, { opacity: 1, duration: 0.2, onComplete: () => { setTransitionActive(false); pendingPath.current = null; lenisRef.current?.start(); } });
      return;
    }
    gsap.to(markRef.current, { opacity: 0, scale: 1.08, duration: 0.18, ease: 'power2.in' });
    gsap.to(planeRef.current, { clipPath: 'polygon(100% 0,100% 0,100% 100%,100% 100%)', duration: 0.62, delay: 0.08, ease: 'power3.inOut', onComplete: () => { setTransitionActive(false); pendingPath.current = null; lenisRef.current?.start(); } });
  }, [pathname, transitionActive]);

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
      if (!menuOpen) setNavHidden(y > 130 && y > lastY + 3);
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
    <div className="site-root" ref={rootRef}>
      <div className="site-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <header className="site-nav" data-theme={navTheme} data-hidden={navHidden && !menuOpen}>
        <div className="nav-left"><Link href="/" aria-label="KaizerBrix Consults home" onClick={(e) => { e.preventDefault(); navigate('/'); }}><BrandMark className="k-mark" /></Link></div>
        <div className="nav-right"><span className="nav-slate">{slate}</span><Link className="nav-contact" href="/contact" onClick={(e) => { e.preventDefault(); navigate('/contact'); }}>CONTACT</Link><button className="nav-menu" type="button" aria-expanded={menuOpen} aria-controls="site-menu" onClick={() => setMenuOpen((value) => !value)}><span>{menuOpen ? 'CLOSE' : 'MENU'}</span><span className="menu-lines" aria-hidden="true"><i/><i/></span></button></div>
      </header>
      <nav id="site-menu" className={`menu-overlay ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation" aria-hidden={!menuOpen}>
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
  return <Link href={href} className={className} {...props} onClick={(event) => { props.onClick?.(event); if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return; event.preventDefault(); navigate(String(href)); }}>{children}</Link>;
}

export function MediaFrame({ src, alt, caption, priority = false, className = '' }: { src?: string; alt: string; caption?: string; priority?: boolean; className?: string }) {
  const [failed, setFailed] = useState(false);
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
    const targets = ref.current.querySelectorAll<HTMLElement>('[data-reveal]');
    targets.forEach((target) => {
      gsap.fromTo(target, { y: 42, opacity: 0, clipPath: 'inset(0 0 12% 0)' }, { y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)', duration: 0.85, ease: 'power3.out', scrollTrigger: { trigger: target, start: 'top 84%', once: true } });
    });
    ref.current.querySelectorAll<HTMLElement>('[data-photo]').forEach((photo) => {
      gsap.fromTo(photo, { clipPath: 'inset(12% 7% 12% 7%)' }, { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none', scrollTrigger: { trigger: photo, start: 'top 85%', end: 'center 48%', scrub: 0.8 } });
      const image = photo.querySelector('img');
      if (image) gsap.fromTo(image, { scale: 1.08, filter: 'grayscale(1) sepia(.45) saturate(.7)' }, { scale: 1, filter: 'grayscale(0) sepia(0) saturate(1.04)', ease: 'none', scrollTrigger: { trigger: photo, start: 'top 90%', end: 'center 48%', scrub: 0.8 } });
    });
  }, { scope: ref, dependencies: [id], revertOnUpdate: true });
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
