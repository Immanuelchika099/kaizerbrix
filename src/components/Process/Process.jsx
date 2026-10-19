import { MoveUpRight } from 'lucide-react'
import './Process.css'

const steps = [
  { number: '01', title: 'Listen', description: 'Understand the brief, the ambition, and what success needs to look like.' },
  { number: '02', title: 'Plan', description: 'Bring the right thinking, details, and people together before work begins.' },
  { number: '03', title: 'Build', description: 'Move from plan to site with focus, coordination, and care.' },
  { number: '04', title: 'Deliver', description: 'Bring the details together and hand over a result built for the long term.' },
]

function Process() {
  return (
    <section className="process-section section-shell" id="process">
      <div className="section-kicker"><span>04 / THE PROCESS</span><i /></div>
      <div className="process-heading"><h2>Good work is<br /><span>never accidental.</span></h2><p>From the first conversation to the final handover, each stage has a purpose.</p></div>
      <div className="process-steps">
        {steps.map((step) => (
          <article className="process-step" key={step.number}>
            <span>{step.number}</span><div className="process-step-line" /><h3>{step.title}</h3><p>{step.description}</p>
          </article>
        ))}
      </div>
      <a className="process-link" href="#contact">Talk through your vision <MoveUpRight size={17} /></a>
    </section>
  )
}

export default Process
