'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger, useGSAP);

type Value = { name: string; text: string };
export function PinnedValues({ values }: { values: Value[] }) {
  const root = useRef<HTMLElement | null>(null);
  useGSAP(() => {
    if (!root.current || values.length < 2) return;
    const mm = gsap.matchMedia();
    mm.add('(min-width: 761px) and (prefers-reduced-motion: no-preference)', () => {
      const rows = gsap.utils.toArray<HTMLElement>('.value-step');
      const indices = gsap.utils.toArray<HTMLElement>('.value-index');
      if (!rows.length) return;
      gsap.set(rows, { autoAlpha: 0, clipPath: 'inset(0 0 12% 0)', y: 24 });
      gsap.set(rows[0], { autoAlpha: 1, clipPath: 'inset(0 0 0% 0)', y: 0 });
      const timeline = gsap.timeline({ onUpdate: () => {
        const active = Math.min(rows.length - 1, Math.round(timeline.progress() * (rows.length - 1)));
        indices.forEach((node, i) => node.classList.toggle('is-active', i === active));
      } });
      for (let i = 1; i < rows.length; i += 1) {
        timeline.to(rows[i - 1], { autoAlpha: 0, clipPath: 'inset(0 0 100% 0)', y: -20, duration: 0.42, ease: 'power3.inOut' }, i - 1);
        timeline.fromTo(rows[i], { autoAlpha: 0, clipPath: 'inset(0 0 12% 0)', y: 24 }, { autoAlpha: 1, clipPath: 'inset(0 0 0% 0)', y: 0, duration: 0.58, ease: 'power3.out' }, i - 1 + 0.22);
      }
      ScrollTrigger.create({ trigger: root.current, animation: timeline, start: 'top top', end: () => '+=' + Math.round(window.innerHeight * (rows.length - 1) * 0.82), pin: true, scrub: 0.8, anticipatePin: 1, invalidateOnRefresh: true, snap: { snapTo: 1 / (rows.length - 1), duration: { min: 0.35, max: 0.7 }, ease: 'power2.inOut', directional: true } });
      return () => { timeline.kill(); };
    });
    return () => mm.revert();
  }, { scope: root, dependencies: [values.length], revertOnUpdate: true });

  return <section ref={root} className="scene pinned-values" data-nav-theme="ink" data-scene-label="SC 04 / CORE VALUES"><div className="values-pin-layout"><div className="values-pin-left"><p className="scene-label">CORE VALUES / 01—06</p><h2 className="display">Principles<br/>in practice<span className="orange-period">.</span></h2><ol>{values.map((value, i) => <li key={value.name} className={`value-index ${i === 0 ? 'is-active' : ''}`}><span className="counter">{String(i + 1).padStart(2, '0')}</span><span>{value.name}</span></li>)}</ol></div><div className="values-pin-stage">{values.map((value, i) => <article className="value-step" key={value.name}><span className="micro">CORE VALUE / {String(i + 1).padStart(2, '0')}</span><h3>{value.name}</h3><p>{value.text}</p></article>)}</div></div><div className="values-mobile">{values.map((value, i) => <article className="value-row" key={value.name}><span className="counter">{String(i + 1).padStart(2, '0')}</span><div><h3>{value.name}</h3><p>{value.text}</p></div></article>)}</div></section>;
}
