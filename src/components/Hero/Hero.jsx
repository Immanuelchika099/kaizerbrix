import { useRef } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import './Hero.css'

function Hero() {
  const sectionRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const backdropY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 110])
  const backdropScale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 1.12])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 90])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.82], [1, 0.18])
  const detailY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -55])
  const orbitRotate = useTransform(scrollYProgress, [0, 1], [-24, reduceMotion ? -24 : 4])

  return (
    <section className="hero-section" id="home" ref={sectionRef}>
      <motion.div className="hero-backdrop" aria-hidden="true" style={{ y: backdropY, scale: backdropScale }}>
        <div className="hero-grid" />
        <motion.div className="hero-orbit hero-orbit-one" style={{ rotate: orbitRotate }} />
        <div className="hero-orbit hero-orbit-two" />
        <motion.div className="hero-slab" style={{ y: detailY }} />
      </motion.div>
      <motion.div className="hero-content" style={{ y: contentY, opacity: contentOpacity }}>
        <motion.p className="eyebrow hero-eyebrow" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          BUILT ON VISION. GROUNDED IN PRECISION.
        </motion.p>
        <motion.h1 initial={reduceMotion ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
          Building<br /><span>enduring</span><br />legacies<span className="hero-period">.</span>
        </motion.h1>
        <motion.div className="hero-bottom" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}>
          <p>From the first line on a drawing to the final detail on site, we shape spaces with purpose.</p>
          <a href="#projects" className="round-link" aria-label="Explore selected projects"><ArrowDown size={20} /></a>
          <a href="#contact" className="hero-text-link">Discuss your project <ArrowUpRight size={16} /></a>
        </motion.div>
      </motion.div>
      <motion.div className="hero-index" style={{ y: detailY, opacity: contentOpacity }}><span>01</span><i /> BUILT FOR WHAT'S NEXT</motion.div>
    </section>
  )
}

export default Hero
