'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import { useGSAP } from '@gsap/react';
import { designPlates } from '@/app/data';
import { MediaFrame } from '@/components/Experience';

gsap.registerPlugin(Flip, useGSAP);

export function DesignArchive() {
  const root = useRef<HTMLDivElement>(null);
  const [contactSheet, setContactSheet] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  useGSAP(() => {
    if (!root.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const cards = gsap.utils.toArray<HTMLElement>('.archive-card');
    gsap.fromTo(cards, { clipPath: 'inset(10% 5% 10% 5%)', y: 24, opacity: 0.45 }, { clipPath: 'inset(0% 0% 0% 0%)', y: 0, opacity: 1, stagger: 0.045, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: root.current, start: 'top 78%' } });
  }, { scope: root, dependencies: [contactSheet], revertOnUpdate: true });

  function toggleSheet() {
    const elements = root.current?.querySelectorAll<HTMLElement>('.archive-card');
    if (!elements?.length) { setContactSheet((value) => !value); return; }
    const state = Flip.getState(elements);
    setContactSheet((value) => !value);
    requestAnimationFrame(() => Flip.from(state, { duration: 0.65, ease: 'power3.inOut', absolute: true, stagger: 0.025, prune: true }));
  }
  return <div className="design-archive" ref={root}>
    <div className="archive-controls"><span className="micro">08 PLATES / 16 RENDERS</span><button type="button" aria-pressed={contactSheet} onClick={toggleSheet}>{contactSheet ? 'RETURN TO PLATES −' : 'CONTACT SHEET +'}</button></div>
    <div className={`archive-grid ${contactSheet ? 'is-contact-sheet' : ''}`}>{designPlates.map((plate,i)=><article className="archive-card" key={plate.name+i}><button type="button" className="archive-open" onClick={() => setActive(i)} aria-label={`Expand ${plate.name} plate`}><MediaFrame src={plate.images[0]} alt={plate.name+' architectural visualisation'} caption={`PLATE ${String(i+1).padStart(2,'0')} / VIEW`}/></button><div className="plate-heading"><span className="micro">PLATE {String(i+1).padStart(2,'0')}</span><h2>{plate.name}</h2></div>{!contactSheet ? <div className="plate-pair"><MediaFrame src={plate.images[1]} alt={plate.name+' second architectural visualisation'} caption="DETAIL VIEW"/></div> : null}</article>)}</div>
    {active !== null ? <div className="archive-lightbox" role="dialog" aria-modal="true" aria-label={designPlates[active].name} onClick={() => setActive(null)}><button type="button" className="archive-close" onClick={() => setActive(null)}>CLOSE ×</button><div className="archive-large" onClick={(e) => e.stopPropagation()}><div className="media-blueprint"/><Image src={designPlates[active].images[0]} alt={designPlates[active].name+' enlarged'} fill sizes="100vw" priority/><p>{designPlates[active].name} / PLATE {String(active+1).padStart(2,'0')}</p></div></div> : null}
  </div>;
}
