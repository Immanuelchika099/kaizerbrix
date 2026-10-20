import type { Metadata } from 'next';
import { projects } from '../data';
import { Credits, MediaFrame, PageTitle, SceneReveal, TransitionLink } from '@/components/Experience';
import { projectSlugs } from '../data';

export const metadata: Metadata = { title: 'Projects', description: 'Project records for duplex developments in Yenagoa, Port Harcourt and Bonny Island.' };

export default function ProjectsPage() {
  return <main>
    <PageTitle number="04" eyebrow="PROJECT RECORD / 03 PROJECTS" title="PROJECTS" description="A concise record of the three projects identified in the supplied company profile. No budgets, dimensions or additional project claims are inferred."/>
    <SceneReveal className="projects-note section-pad" theme="ink" label="SC 02 / PROJECT INDEX"><div className="editorial-grid"><p className="scene-label" data-reveal>SELECTED PROJECTS</p><h2 data-reveal>Work recorded<br/>in place<span className="orange-period">.</span></h2></div></SceneReveal>
    {projects.map((project,i)=><article className="project-row scene" data-nav-theme="ink" data-scene-label={`SC ${String(i+3).padStart(2,'0')} / PROJECT ${String(i+1).padStart(2,'0')}`} key={project.location}><TransitionLink className="project-row-media" href={`/projects/${projectSlugs[i].slug}`} aria-label={`Open project: ${project.name}, ${project.location}`}><MediaFrame src={project.image} alt={`${project.name} in ${project.location}`} caption={`PROJECT 0${i+1} / ${project.status}`}/></TransitionLink><div className="project-row-copy"><div className="project-slate"><span>0{i+1} / {project.status}</span><span>{project.year}</span><span>{project.location}</span></div><h2>{project.name}</h2>{project.detail ? <p>{project.detail}</p> : null}<div className="scope"><span className="micro">SCOPE OF WORK</span><p>{project.scope.join(' / ')}</p></div><TransitionLink className="text-link" href={`/projects/${projectSlugs[i].slug}`}>OPEN PROJECT RECORD <span>↗</span></TransitionLink></div></article>)}
    <Credits/>
  </main>;
}
