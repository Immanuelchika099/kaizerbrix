import type { Metadata } from 'next';
import { hsePolicy, qualityPolicy } from '../data';
import { Credits, KMark, MediaFrame, PageTitle, SceneReveal } from '@/components/Experience';

export const metadata: Metadata = { title: 'Standards', description: 'Quality policy and Health, Safety and Environmental policy from the company profile.' };

export default function StandardsPage() {
  return <main>
    <PageTitle number="06" eyebrow="QUALITY / HEALTH / SAFETY / ENVIRONMENT" title="STANDARDS" description="The quality and HSE commitments presented here follow the policy text in the company profile."/>
    <SceneReveal className="quality-section section-pad" theme="ink" label="SC 02 / QUALITY POLICY"><div className="editorial-grid"><div><p className="scene-label" data-reveal>POLICY / 01</p><span className="counter">01</span></div><div><h2 data-reveal>Quality is integral to our <em>philosophy.</em></h2><p className="policy-intro" data-reveal>{qualityPolicy.intro}</p><div className="policy-list">{qualityPolicy.commitments.map((commitment,i)=><article className="policy-row" key={commitment.name}><span className="micro">{String(i+1).padStart(2,'0')}</span><h3>{commitment.name}</h3><p>{commitment.text}</p></article>)}</div><p className="policy-close" data-reveal>{qualityPolicy.close}</p></div></div></SceneReveal>
    <SceneReveal className="hse-section orange-scene section-pad" theme="orange" label="SC 03 / HSE POLICY"><KMark/><div className="hse-grid"><div><p className="scene-label" data-reveal>POLICY / 02</p><h2 className="display" data-reveal>Health.<br/>Safety.<br/>Environment.</h2></div><div><div data-photo><MediaFrame src="/images/hse-worker-rebar.webp" alt="Construction workers on a site deck from the company profile" caption="HSE / SOURCE PHOTOGRAPH"/></div><p className="hse-opening" data-reveal>{hsePolicy.opening}</p><p className="hse-body" data-reveal>{hsePolicy.body}</p></div></div></SceneReveal>
    <Credits/>
  </main>;
}
