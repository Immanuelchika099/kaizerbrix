import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import './Header.css'

const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'About', href: '#about' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <a className="brand-mark" href="#home" aria-label="Kaizerbrix Consults home" onClick={closeMenu}>
        <img className="brand-logo" src="/kaizerbrix-logo.svg" alt="Kaizerbrix Consults" />
      </a>
      <nav className={`header-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
        ))}
        <a className="header-cta" href="#contact" onClick={closeMenu}>Start a project <ArrowUpRight size={15} /></a>
      </nav>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  )
}

export default Header
