import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import './Hero.css'

function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="hero-section" id="home">
      <div className="hero-backdrop" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="hero-slab" />
      </div>
      <div className="hero-content">
        <motion.p
          className="eyebrow hero-eyebrow"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          BUILT ON VISION. GROUNDED IN PRECISION.
        </motion.p>
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Building<br /><span>enduring</span><br />legacies<span className="hero-period">.</span>
        </motion.h1>
        <motion.div
          className="hero-bottom"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <p>From the first line on a drawing to the final detail on site, we shape spaces with purpose.</p>
          <a href="#projects" className="round-link" aria-label="Explore selected projects"><ArrowDown size={20} /></a>
          <a href="#contact" className="hero-text-link">Discuss your project <ArrowUpRight size={16} /></a>
        </motion.div>
      </div>
      <div className="hero-index"><span>01</span><i /> BUILT FOR WHAT'S NEXT</div>
    </section>
  )
}

export default Hero
