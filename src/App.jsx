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
  return <div className="kb-route-loading" aria-label="Loading KaizerBrix"><span>KAIZERBRIX</span><i /></div>;
}

function RoutedPages() {
  const location = useLocation();
  const reduce = useReducedMotion();
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
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12, clipPath: 'inset(0 0 5% 0)' }}
      animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0 0)', transition: { duration: reduce ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] } }}
      exit={reduce ? { opacity: 1 } : { opacity: 0, y: -6, transition: { duration: 0.16 } }}
    >
      <Suspense fallback={<LoadingFilm />}>{route}</Suspense>
    </motion.div>
  </AnimatePresence>;
}

export default function App() {
  return <BrowserRouter><RouteCurtain /><RoutedPages /></BrowserRouter>;
}
