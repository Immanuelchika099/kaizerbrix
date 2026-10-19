import { ArrowUpRight } from 'lucide-react'
import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <a className="footer-brand" href="#home"><span>K<span>.</span></span><strong>KAIZERBRIX CONSULTS</strong></a>
      <p>Building with precision. Creating with purpose.</p>
      <a className="back-to-top" href="#home">Back to top <ArrowUpRight size={15} /></a>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Kaizerbrix Consults</span><span>Built for what comes next.</span></div>
    </footer>
  )
}
export default Footer
