import { MapPin, ArrowUpRight } from 'lucide-react'
import './Locations.css'

function Locations() {
  return (
    <section className="locations-section">
      <div className="locations-copy">
        <div className="section-kicker"><span>05 / WHERE WE WORK</span><i /></div>
        <h2>Local understanding.<br /><span>Lasting impact.</span></h2>
        <p>We bring a practical understanding of place, people, and the details that make each project its own.</p>
        <div className="location-line"><MapPin size={18} /><span>Project locations</span></div>
        <p className="location-note">Specific operating locations will be listed here once confirmed by the company.</p>
      </div>
      <div className="locations-visual" aria-hidden="true"><div className="map-grid" /><div className="map-ring map-ring-one" /><div className="map-ring map-ring-two" /><div className="map-pin"><MapPin size={24} /></div><span className="map-label">BUILT AROUND PEOPLE</span><ArrowUpRight className="map-arrow" size={24} /></div>
    </section>
  )
}

export default Locations
