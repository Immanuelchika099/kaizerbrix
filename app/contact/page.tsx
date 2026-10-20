import type { Metadata } from 'next';
import { brand } from '../data';
import { Credits, KMark, SceneReveal } from '@/components/Experience';

export const metadata: Metadata = { title: 'Contact', description: 'Contact KaizerBrix Consults in Port Harcourt, Rivers State, Nigeria.' };

export default function ContactPage() {
  return <main>
    <SceneReveal className="contact-page" theme="ink" label="SC 07 / CONTACT">
      <div className="contact-orange"><KMark/><p className="scene-label" data-reveal>KAIZERBRIX CONSULTS / PORT HARCOURT</p><h1 className="display" data-reveal>LET'S<br/>BUILD<br/>WHAT<br/>LASTS<span>.</span></h1><p data-reveal>Partner with us today to shape a legacy that outlasts the ages.</p><span className="contact-corner">CONTACT / 07</span></div>
      <div className="contact-white"><p className="scene-label" data-reveal>CONTACT DETAILS / 01</p><h2 data-reveal>Start a conversation.</h2><a className="contact-link" href="https://www.google.com/maps/search/?api=1&query=67+Mgbuoshimini+Road%2C+Rumueme%2C+Port+Harcourt%2C+Rivers+State" target="_blank" rel="noreferrer"><span>VISIT / GOOGLE MAPS ↗</span>{brand.address}</a><a className="contact-link" href="tel:+2347073847960"><span>CALL / TELEPHONE ↗</span>+234 (0) 707 384 7960</a><a className="contact-link" href="mailto:kaizerbrixconsults@gmail.com"><span>EMAIL / MAILTO ↗</span>kaizerbrixconsults@gmail.com</a><p className="contact-note">The current contact experience uses direct address, telephone and email links. A server-submitted form can be added once a mail service and credentials are configured.</p></div>
    </SceneReveal>
    <Credits/>
  </main>;
}
