import { ArrowUpRight } from 'lucide-react'
import './Contact.css'

function Contact() {
  return (
    <section className="contact-section section-shell" id="contact">
      <div className="section-kicker"><span>07 / START A PROJECT</span><i /></div>
      <div className="contact-layout">
        <h2>Have a vision?<br /><span>Let's build it.</span></h2>
        <div className="contact-copy">
          <p>Tell us what you're planning. Let's start with a conversation about the space, the scope, and what matters most to you.</p>
          <div className="contact-cta">Start a conversation <ArrowUpRight size={19} /></div>
          <div className="contact-details">
            <span>Company contact details will be connected here.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
