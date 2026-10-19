import { ArrowDownRight } from 'lucide-react'
import './Intro.css'

function Intro() {
  return (
    <section className="intro-section section-shell" id="intro">
      <div className="section-kicker"><span>01 / OUR APPROACH</span><i /></div>
      <div className="intro-main">
        <h2>We don't just build structures. <span>We bring vision into form.</span></h2>
        <div className="intro-aside">
          <p>Kaizerbrix Consults brings technical thinking and considered execution together to help transform ideas into lasting spaces.</p>
          <a href="#about" className="underlined-link">Get to know us <ArrowDownRight size={17} /></a>
        </div>
      </div>
    </section>
  )
}

export default Intro
