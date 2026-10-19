import { ArrowUpRight } from 'lucide-react'
import './Projects.css'

const projects = [
  { number: '01', name: 'Selected project', type: 'Project portfolio', note: 'A closer look at our work', tone: 'project-visual-one' },
  { number: '02', name: 'Selected project', type: 'Design & delivery', note: 'Ideas shaped into spaces', tone: 'project-visual-two' },
  { number: '03', name: 'Selected project', type: 'Built environment', note: 'Made for the long term', tone: 'project-visual-three' },
]

function Projects() {
  return (
    <section className="projects-section section-shell" id="projects">
      <div className="section-kicker"><span>02 / SELECTED WORK</span><i /></div>
      <div className="projects-heading">
        <h2>Work that<br /><span>speaks for itself.</span></h2>
        <p>A selection of projects that reflect our approach to thoughtful planning and considered execution.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className={`project-visual ${project.tone}`} aria-label="Project image to be added">
              <span className="project-number">{project.number}</span>
              <span className="project-visual-label">KAIZERBRIX / PORTFOLIO</span>
              <div className="project-geometry" aria-hidden="true" />
            </div>
            <div className="project-meta">
              <div><span>{project.type}</span><h3>{project.name}</h3><p>{project.note}</p></div>
              <span className="project-arrow"><ArrowUpRight size={19} /></span>
            </div>
          </article>
        ))}
      </div>
      <p className="projects-note">Project imagery and verified project details will be added from the company portfolio.</p>
    </section>
  )
}

export default Projects
