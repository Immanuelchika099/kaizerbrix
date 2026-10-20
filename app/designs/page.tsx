import type { Metadata } from 'next';
import { Credits, KMark, PageTitle, SceneReveal } from '@/components/Experience';
import { DesignArchive } from '@/components/DesignArchive';

export const metadata: Metadata = { title: '3D Designs', description: 'Eight architectural design plates from the KaizerBrix company profile.' };

export default function DesignsPage() {
  return <main>
    <PageTitle number="05" eyebrow="DESIGN ARCHIVE / VISUAL STUDIES" title="3D DESIGNS" description="Eight architectural plates, presented as a visual archive. The original render files are still required before the gallery can show the full source imagery."/>
    <SceneReveal className="design-archive-title orange-scene section-pad" theme="orange" label="SC 02 / ARCHIVE"><KMark/><p className="scene-label" data-reveal>PLATES / 01—08</p><h2 className="display" data-reveal>Form, light<br/>and proportion.</h2></SceneReveal>
    <section className="scene design-archive-section" data-nav-theme="ink" data-scene-label="SC 03 / PLATE ARCHIVE"><DesignArchive/></section>
    <Credits/>
  </main>;
}
