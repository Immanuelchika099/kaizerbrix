import type { Metadata } from 'next';
import { about, values } from '../data';
import { Credits, KMark, KPortal, MediaFrame, PageTitle, SceneReveal } from '@/components/Experience';
import { PinnedValues } from '@/components/PinnedValues';

export const metadata: Metadata = { title: 'About Us', description: 'Learn about KaizerBrix Consults, its vision, mission and core values.' };

export default function AboutPage() {
  return <main>
    <PageTitle number="02" eyebrow="KAIZERBRIX CONSULTS / ABOUT US" title="ABOUT US" description="A multidisciplinary consultancy bringing architecture, civil engineering, surveying, town planning and procurement together." image="/images/tower-hardhat-bw.webp" imageAlt="Tower and hard hat from the company profile"/>
    <KPortal label="About title into the About copy"/>
    <SceneReveal className="about-copy-section section-pad" theme="ink" label="SC 02 / THE PRACTICE"><div className="editorial-grid"><p className="scene-label" data-reveal>THE PRACTICE / 01</p><div><h2 data-reveal>Built around the work. Guided by <em>purpose.</em></h2><div className="editorial-copy" data-reveal>{about.paragraphs.map((p)=><p key={p}>{p}</p>)}</div></div></div></SceneReveal>
    <SceneReveal className="about-vision orange-scene section-pad" theme="orange" label="SC 03 / VISION & MISSION"><KMark/><div className="editorial-grid"><p className="scene-label" data-reveal>OUR VISION</p><h2 className="display" data-reveal>{about.vision}</h2><p className="scene-label" data-reveal>OUR MISSION</p><p className="about-mission" data-reveal>{about.mission}</p></div></SceneReveal>
    <PinnedValues values={values}/>
    <SceneReveal className="about-closing orange-scene section-pad" theme="orange" label="SC 05 / CLOSING"><KMark/><p className="scene-label" data-reveal>KAIZERBRIX CONSULTS</p><h2 className="display" data-reveal>We build structures that echo through the ages.</h2></SceneReveal>
    <Credits/>
  </main>;
}
