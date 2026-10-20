'use client';

import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { services } from '@/app/data';

export function ServiceRail() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const triggers = services.map((service, index) => ScrollTrigger.create({
      trigger: '#' + service.name.toLowerCase().replaceAll(' ', '-'),
      start: 'top 55%',
      end: 'bottom 45%',
      onEnter: () => setActive(index),
      onEnterBack: () => setActive(index),
    }));
    ScrollTrigger.refresh();
    return () => triggers.forEach((trigger) => trigger.kill());
  }, []);
  return <nav className="service-rail" aria-label="Service chapters">{services.map((service, index) => <a key={service.name} href={'#' + service.name.toLowerCase().replaceAll(' ', '-')} aria-current={active === index ? 'location' : undefined}><span>{String(index + 1).padStart(2, '0')}</span><strong>{service.name}</strong></a>)}</nav>;
}
