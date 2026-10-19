import './About.css'

function About() {
  return (
    <section className="about-section section-shell" id="about">
      <div className="section-kicker"><span>06 / ABOUT KAIZERBRIX</span><i /></div>
      <div className="about-layout">
        <h2>Built on trust.<br /><span>Driven by detail.</span></h2>
        <div className="about-copy">
          <p className="about-lead">Every lasting structure begins with a clear vision and the people committed to bringing it to life.</p>
          <p>Kaizerbrix Consults approaches the built environment with a focus on thoughtful planning, dependable execution, and work that serves its purpose well.</p>
          <div className="about-signoff"><span className="about-sign">K<span>.</span></span><span>KAIZERBRIX CONSULTS<br /><small>BUILDING WITH PURPOSE</small></span></div>
        </div>
      </div>
    </section>
  )
}

export default About
