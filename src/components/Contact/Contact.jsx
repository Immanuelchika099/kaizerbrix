import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import './Contact.css'

function Contact() {
  return (
    <section className="contact-section section-shell" id="contact">
      <div className="section-kicker"><span>07 / START A PROJECT</span><i /></div>
      <div className="contact-layout">
        <h2>Have a vision?<br /><span>Let's build it.</span></h2>
        <div className="contact-copy">
          <p>Tell us what you're planning. Let's start with a conversation about the space, the scope, and what matters most to you.</p>
          <a className="contact-cta" href="mailto:hello@kaizerbrix.com">Start a conversation <ArrowUpRight size={19} /></a>
          <div className="contact-details">
            <span><Mail size={15} /> Contact details to be confirmed</span>
            <span><Phone size={15} /> Direct contact to be added</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
