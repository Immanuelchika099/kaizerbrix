import type { Metadata } from 'next';
import { services } from '../data';
import { Credits, MediaFrame, PageTitle, SceneReveal, TransitionLink } from '@/components/Experience';
import { ServiceRail } from '@/components/ServiceRail';

export const metadata: Metadata = { title: 'Services', description: 'Architecture, civil engineering, surveying, town planning and procurement.' };

export default function ServicesPage() {
  return <main>
    <ServiceRail/>
    <PageTitle number="03" eyebrow="OUR COMPETENCE / FIVE DISCIPLINES" title="SERVICES" description="Five disciplines across the built environment. Explore each area of work and the sub-services listed in the company profile."/>
    <SceneReveal className="services-intro section-pad" theme="ink" label="SC 02 / INDEX"><div className="editorial-grid"><p className="scene-label" data-reveal>DISCIPLINE INDEX / 01—05</p><div><h2 data-reveal>Expertise with a clear <em>purpose.</em></h2><div className="services-index">{services.map((service,i)=><a key={service.name} href={`#${service.name.toLowerCase().replaceAll(' ','-')}`}><span>{String(i+1).padStart(2,'0')}</span><strong>{service.name}</strong><span>↘</span></a>)}</div></div></div></SceneReveal>
    {services.map((service,i)=><SceneReveal key={service.name} id={service.name.toLowerCase().replaceAll(' ','-')} className={`service-chapter section-pad ${i===2?'service-surveying':''}`} theme={i===2?'orange':'ink'} label={`SC ${String(i+3).padStart(2,'0')} / ${service.name.toUpperCase()}`}><div className="service-chapter-grid"><div><p className="scene-label" data-reveal>DISCIPLINE / {String(i+1).padStart(2,'0')}</p><span className="counter">{String(i+1).padStart(2,'0')}</span><h2 className="display" data-reveal>{service.name}</h2><ul className="service-lines">{service.lines.map((line)=><li key={line} data-reveal><i/>{line}</li>)}</ul></div><div data-photo><MediaFrame src={service.image} alt={service.name+' imagery referenced by the company profile'} caption={service.name.toUpperCase()}/></div></div></SceneReveal>)}
    <SceneReveal className="services-close section-pad" theme="ink" label="SC 08 / CONTACT"><p className="scene-label" data-reveal>CONTINUE THE CONVERSATION</p><h2 className="display" data-reveal>Have a project in mind?</h2><TransitionLink href="/contact" className="text-link">CONTACT KAIZERBRIX <span>↗</span></TransitionLink></SceneReveal>
    <Credits/>
  </main>;
}
