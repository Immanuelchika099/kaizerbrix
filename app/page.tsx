import type { Metadata } from 'next';
import { about, designPlates, projects, services, values } from './data';
import { Credits, KMark, KPortal, MediaFrame, SceneReveal, TransitionLink } from '@/components/Experience';

export const metadata: Metadata = { title: 'Building Enduring Legacies', description: 'KaizerBrix Consults brings together architecture, civil engineering, surveying, town planning and procurement.' };

export default function HomePage() {
  return <main>
    <SceneReveal className="home-hero" theme="ink" label="SC 01 / 08 — HOME">
      <div className="home-hero-copy"><p className="scene-label" data-reveal>ARCHITECTURE / CIVIL ENGINEERING / SURVEYING / TOWN PLANNING / PROCUREMENT</p><h1 className="display" data-reveal>BUILDING<br/><span>ENDURING</span><br/>LEGACIES<span className="orange-period">.</span></h1><p className="home-hero-line" data-reveal><i/>We lay foundations that endure through generations.</p><span className="home-location">PORT HARCOURT, NIGERIA <b>SC 01 — OPENING FRAME</b></span></div>
      <div className="home-hero-media" data-photo><MediaFrame src="/images/golden-tower.webp" alt="Golden tower architectural render from the KaizerBrix company profile" caption="FIG. 01 / ARCHITECTURE" priority/></div>
      <div className="hero-crop hero-crop-a"/><div className="hero-crop hero-crop-b"/>
    </SceneReveal>

    <KPortal label="Hero into the About scene"/>
    <SceneReveal className="home-about section-pad" id="about-home" theme="ink" label="SC 02 / ABOUT">
      <div className="editorial-grid"><div><p className="scene-label" data-reveal>01 / ABOUT KAIZERBRIX</p><p className="micro" data-reveal>MULTIDISCIPLINARY CONSULTANCY</p></div><div><h2 data-reveal>Designing with purpose. Building for <em>time.</em></h2><div className="editorial-copy" data-reveal><p>{about.paragraphs[0]}</p><p>{about.paragraphs[1]}</p><TransitionLink className="text-link" href="/about">ABOUT THE PRACTICE <span>↗</span></TransitionLink></div></div></div>
      <div className="home-about-media" data-photo><MediaFrame src="/images/tower-hardhat-bw.webp" alt="Black and white tower and red hard hat from the company profile" caption="FIG. 02 / BUILT ENVIRONMENT"/></div>
    </SceneReveal>

    <SceneReveal className="home-vision orange-scene section-pad" theme="orange" label="SC 03 / VISION & MISSION">
      <KMark/><div className="vision-grid"><div><p className="scene-label" data-reveal>02 / OUR VISION</p><h2 className="display" data-reveal>{about.vision}</h2></div><div className="vision-mission" data-reveal><p className="scene-label">OUR MISSION</p><p>{about.mission}</p></div></div><span className="scene-index">SC 03 — ORANGE TAKEOVER</span>
    </SceneReveal>

    <SceneReveal className="home-competence section-pad" theme="ink" label="SC 04 / COMPETENCE">
      <div className="competence-intro"><p className="scene-label" data-reveal>03 / OUR COMPETENCE</p><h2 className="display" data-reveal>Five disciplines.<br/><span>One built</span><br/>environment.</h2><p data-reveal>Explore the disciplines that bring our built-environment work together.</p><TransitionLink href="/services" className="text-link">ALL SERVICES <span>↗</span></TransitionLink></div>
      <div className="competence-list">{services.map((service,i)=><a key={service.name} href={`/services#${service.name.toLowerCase().replaceAll(' ','-')}`} className="competence-row" data-reveal><span className="counter">{String(i+1).padStart(2,'0')}</span><h3>{service.name}</h3><span className="orange-square"/><span className="competence-arrow">↗</span></a>)}</div>
    </SceneReveal>

    <SceneReveal className="home-statement section-pad" theme="ink" label="SC 05 / STATEMENT">
      <span className="statement-rule"/><p className="scene-label" data-reveal>SC 05 / STATEMENT</p><h2 data-reveal>We build structures that <em data-weight-scrub>echo</em> through the ages.</h2><p data-reveal>From design to completion, we work toward enduring value and quality in every detail.</p>
    </SceneReveal>

    <SceneReveal className="home-projects section-pad" theme="ink" label="SC 06 / PROJECTS">
      <div className="section-heading"><div><p className="scene-label" data-reveal>06 / PROJECT RECORD</p><h2 className="display" data-reveal>Selected<br/>projects<span className="orange-period">.</span></h2></div><TransitionLink className="text-link" href="/projects">VIEW ALL PROJECTS <span>↗</span></TransitionLink></div>
      <div className="home-project-grid">{projects.map((project,i)=><article className={`home-project home-project-${i+1}`} key={project.location}><MediaFrame src={project.image} alt={project.imageAlt ?? `${project.name}, ${project.location}`} caption={`0${i+1} / ${project.status}`}/><div className="home-project-caption"><span className="micro">{project.location} / {project.year}</span><h3>{project.name}</h3><TransitionLink href={`/projects/${i===0?'5-bedroom-duplex-yenagoa':i===1?'5-bedroom-duplex-port-harcourt':'5-bedroom-duplex-bonny-island'}`}>PROJECT RECORD ↗</TransitionLink></div></article>)}</div>
    </SceneReveal>

    <SceneReveal className="home-designs section-pad" theme="ink" label="SC 07 / 3D DESIGNS">
      <div className="designs-teaser-head"><div><p className="scene-label" data-reveal>07 / DESIGN ARCHIVE</p><h2 className="display" data-reveal>Imagined<br/>in detail<span className="orange-period">.</span></h2></div><p data-reveal>Architectural visualisations from the company profile, presented as a collection of plates.</p></div>
      <div className="teaser-plates">{designPlates.slice(0,4).map((plate,i)=><article className="teaser-plate" key={plate.name+i}><MediaFrame src={plate.images[0]} alt={plate.name+' architectural visualisation'} caption={`PLATE 0${i+1}`}/><h3>{plate.name}</h3></article>)}</div>
      <TransitionLink className="text-link" href="/designs">VIEW ALL EIGHT PLATES <span>↗</span></TransitionLink>
    </SceneReveal>
    <Credits/>
  </main>;
}
