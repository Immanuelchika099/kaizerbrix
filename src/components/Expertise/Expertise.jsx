import { ArrowUpRight } from 'lucide-react'
import './Expertise.css'

const services = [
  { number: '01', title: 'Surveying', detail: 'Grounded decisions begin with accurate site knowledge.' },
  { number: '02', title: 'Architectural design', detail: 'Clear thinking translated into purposeful spaces.' },
  { number: '03', title: 'Site clearing', detail: 'Preparing the ground for what comes next.' },
  { number: '04', title: 'Construction', detail: 'Coordinated execution with care at every stage.' },
  { number: '05', title: 'Finishing', detail: 'The final details that bring a project together.' },
]

function Expertise() {
  return (
    <section className="expertise-section section-shell" id="expertise">
      <div className="section-kicker"><span>03 / OUR EXPERTISE</span><i /></div>
      <div className="expertise-layout">
        <div className="expertise-intro"><h2>From ground<br />to <span>greatness.</span></h2><p>Connected expertise for every stage of the built environment.</p></div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.number}>
              <span className="service-number">{service.number}</span>
              <div className="service-copy"><h3>{service.title}</h3><p>{service.detail}</p></div>
              <ArrowUpRight className="service-icon" size={19} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise
