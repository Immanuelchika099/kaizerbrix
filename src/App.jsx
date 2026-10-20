import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import './pages/Pages.css';

const Film = lazy(() => import('./film/Film.jsx'));
const AboutPage = lazy(() => import('./pages/Pages.jsx').then(module => ({ default: module.AboutPage })));
const ExpertisePage = lazy(() => import('./pages/Pages.jsx').then(module => ({ default: module.ExpertisePage })));
const ProjectsPage = lazy(() => import('./pages/Pages.jsx').then(module => ({ default: module.ProjectsPage })));
const ContactPage = lazy(() => import('./pages/Pages.jsx').then(module => ({ default: module.ContactPage })));

function RouteCurtain() {
  const location = useLocation();
  const reduce = useReducedMotion();
  const previousPath = useRef(location.pathname);
  const [cover, setCover] = useState(false);

  useEffect(() => {
    if (previousPath.current === location.pathname) return;
    previousPath.current = location.pathname;
    if (window.__kbLenis) window.__kbLenis.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);
    if (reduce) return;
    setCover(true);
    const reveal = window.setTimeout(() => setCover(false), 630);
    return () => window.clearTimeout(reveal);
  }, [location.pathname, reduce]);

  return <motion.div
    aria-hidden="true"
    className="kb-route-curtain"
    initial={false}
    animate={{ clipPath: cover ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)' }}
    transition={{ duration: reduce ? 0 : 0.62, ease: [0.76, 0, 0.24, 1] }}
  />;
}

function LoadingFilm() {
  // The homepage's animated logo preloader is the single loading experience.
  // Keep lazy-route fallback empty so a second text loader never flashes first.
  return null;
}

function RoutedPages() {
  const location = useLocation();
  const reduce = useReducedMotion();
  useEffect(() => {
    const seo = {
      '/': ['KaizerBrix Consults | Building Enduring Legacies', 'A cinematic introduction to KaizerBrix Consults, a multidisciplinary built-environment consultancy in Port Harcourt, Nigeria.'],
      '/about': ['About KaizerBrix Consults | Purpose & Principles', 'Learn about KaizerBrix Consults, its vision, mission and principles for considered design and construction.'],
      '/expertise': ['Our Expertise | KaizerBrix Consults', 'Explore architecture, civil engineering, surveying, town planning and procurement services from KaizerBrix Consults.'],
      '/projects': ['Selected Projects | KaizerBrix Consults', 'Explore residential projects recorded in the KaizerBrix Consults company profile.'],
      '/contact': ['Contact KaizerBrix Consults | Start a Project', 'Contact KaizerBrix Consults in Port Harcourt to discuss a construction, design or consultancy project.']
    };
    const routePath = location.pathname.replace(/\/+$/, '') || '/';
    const [title, description] = seo[routePath] || seo['/'];
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', description);
  }, [location.pathname]);
  if (location.pathname === '/') return <Suspense fallback={<LoadingFilm />}><Film /></Suspense>;

  const route = <Routes location={location}>
    <Route path="/" element={<Film />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/expertise" element={<ExpertisePage />} />
    <Route path="/projects" element={<ProjectsPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="*" element={<Film />} />
  </Routes>;

  return <AnimatePresence mode="wait" initial={false}>
    <motion.div
      key={location.pathname}
      className="kb-route-layer"
      initial={reduce ? { opacity: 1 } : { opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: reduce ? 0 : 0.38, ease: [0.22, 1, 0.36, 1] } }}
      exit={reduce ? { opacity: 1 } : { opacity: 0, transition: { duration: 0.14 } }}
    >
      <Suspense fallback={<LoadingFilm />}>{route}</Suspense>
    </motion.div>
  </AnimatePresence>;
}

export default function App() {
  return <BrowserRouter><RouteCurtain /><RoutedPages /></BrowserRouter>;
}
