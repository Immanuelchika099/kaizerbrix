import { useRef } from 'react'
import { ArrowDown, ArrowUpRight, MoveUpRight } from 'lucide-react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import './Hero.css'

function Hero() {
  const sectionRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const introY = useTransform(scrollYProgress, [0, 0.42], [0, reduceMotion ? 0 : -100])
  const introOpacity = useTransform(scrollYProgress, [0, 0.27, 0.43], [1, 1, 0])
  const introScale = useTransform(scrollYProgress, [0, 0.42], [1, reduceMotion ? 1 : 0.96])
  const projectY = useTransform(scrollYProgress, [0.2, 0.56], [reduceMotion ? 0 : 110, 0])
  const projectX = useTransform(scrollYProgress, [0.2, 0.56], [reduceMotion ? 0 : 70, 0])
  const projectOpacity = useTransform(scrollYProgress, [0.2, 0.43, 0.6], [0, 0.8, 1])
  const projectScale = useTransform(scrollYProgress, [0.2, 0.58], [0.96, 1])
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section className="hero-scroll-section" id="home" ref={sectionRef}>
      <div className="hero-sticky-stage">
        <div className="hero-paper-grid" aria-hidden="true" />
        <div className="hero-orange-disc" aria-hidden="true" />
        <div className="hero-stage-inner">
          <motion.div
            className="hero-intro-scene"
            style={{ y: introY, opacity: introOpacity, scale: introScale }}
          >
            <p className="hero-eyebrow"><span /> KAIZERBRIX CONSULTS <span className="hero-eyebrow-divider">/</span> BUILDING ENDURING LEGACIES</p>
            <h1>Building<br /><span>enduring</span><br />legacies<span className="hero-period">.</span></h1>
            <div className="hero-intro-bottom">
              <p>Architecture, civil engineering, surveying and construction solutions — shaped around the places people live and work.</p>
              <div className="hero-scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={17} /></div>
              <a href="#projects" className="hero-primary-link">Explore our work <ArrowUpRight size={17} /></a>
            </div>
            <div className="hero-side-note"><span>01</span><i /> BUILT WITH PURPOSE</div>
          </motion.div>

          <motion.div
            className="hero-project-scene"
            style={{ y: projectY, x: projectX, opacity: projectOpacity, scale: projectScale }}
            aria-label="Featured executed project"
          >
            <div className="hero-project-visual" aria-hidden="true">
              <div className="hero-blueprint-grid" />
              <div className="hero-blueprint-frame hero-blueprint-frame-one" />
              <div className="hero-blueprint-frame hero-blueprint-frame-two" />
              <div className="hero-blueprint-axis hero-blueprint-axis-one" />
              <div className="hero-blueprint-axis hero-blueprint-axis-two" />
              <span className="hero-visual-caption">KAIZERBRIX <b>—</b> PROJECT RECORD</span>
              <span className="hero-visual-number">01</span>
              <div className="hero-visual-stamp">EXECUTED<br />2023</div>
            </div>
            <div className="hero-project-copy">
              <p className="hero-project-kicker"><span /> SELECTED PROJECT <span className="hero-project-count">01 / 02</span></p>
              <h2>5 Bedroom<br /><em>Duplex.</em></h2>
              <p className="hero-project-description">Surveying, architectural design, site clearing, construction and finishing.</p>
              <div className="hero-project-meta">
                <div><span>LOCATION</span><strong>Yenagoa, Bayelsa State</strong></div>
                <div><span>YEAR</span><strong>2023</strong></div>
              </div>
              <a href="#projects" className="hero-project-link">Discover our projects <MoveUpRight size={17} /></a>
            </div>
          </motion.div>
        </div>
        <div className="hero-scroll-progress" aria-hidden="true"><motion.span style={{ width: progressWidth }} /></div>
      </div>
    </section>
  )
}

export default Hero
