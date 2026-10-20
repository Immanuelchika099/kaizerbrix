import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '../../data';
import { Credits, MediaFrame, SceneReveal, TransitionLink } from '@/components/Experience';
import { projectSlugs } from '../../data';

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projectSlugs.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const index = projectSlugs.findIndex((project) => project.slug === slug);
  const project = projects[index];
  if (!project) return { title: 'Project not found' };
  return { title: `${project.name} — ${project.location}`, description: `Project record for ${project.name} in ${project.location}.`, openGraph: { images: [{ url: project.image }] } };
}
export default async function ProjectCasePage({ params }: Props) {
  const { slug } = await params;
  const index = projectSlugs.findIndex((project) => project.slug === slug);
  if (index < 0) notFound();
  const project = projects[index];
  const nextIndex = (index + 1) % projects.length;
  const nextProject = projects[nextIndex];
  const nextSlug = projectSlugs[nextIndex].slug;
  return <main>
    <SceneReveal className="case-hero" theme="ink" label={`SC 0${index+1} / PROJECT RECORD`}><div className="case-hero-heading"><p className="scene-label" data-reveal>PROJECT RECORD / {project.status}</p><h1 className="display" data-reveal>{project.name}<span className="orange-period">.</span></h1><p data-reveal>{project.location} / {project.year}</p></div><div data-photo><MediaFrame src={project.image} alt={`${project.name} at ${project.location}`} caption={`${project.location} / ${project.status}`} priority className="case-hero-media"/></div></SceneReveal>
    <SceneReveal className="case-slate section-pad" theme="ink" label="PROJECT SLATE"><div className="case-slate-grid">{[['STATUS',project.status],['LOCATION',project.location],['YEAR',project.year],['SERVICES',project.scope.join(' / ')]].map(([label,value])=><div key={label}><span className="micro">{label}</span><p>{value}</p></div>)}</div></SceneReveal>
    <SceneReveal className="case-plates section-pad" theme="ink" label="PROJECT PLATES"><div className="editorial-grid"><p className="scene-label" data-reveal>VISUAL RECORD</p><div><h2 data-reveal>Project plates<span className="orange-period">.</span></h2><p className="case-note" data-reveal>The supplied profile identifies this project by location, year, status and scope. Additional site photographs and project details have not been supplied, so no further narrative is inferred.</p><div data-photo><MediaFrame src={project.image} alt={`${project.name}, ${project.location} — project plate`} caption="PROJECT PLATE / SOURCE IMAGE"/></div></div></div></SceneReveal>
    <TransitionLink href={`/projects/${nextSlug}`} className="next-project" aria-label={`Next project: ${nextProject.location}`}><div><p className="scene-label">NEXT PROJECT / {String(nextIndex+1).padStart(2,'0')}</p><h2 className="display">{nextProject.location}</h2><span>OPEN NEXT PROJECT ↗</span></div><MediaFrame src={nextProject.image} alt={`${nextProject.name} in ${nextProject.location}`} caption="NEXT PROJECT"/></TransitionLink>
    <Credits/>
  </main>;
}
