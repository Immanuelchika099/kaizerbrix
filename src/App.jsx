import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Film from './film/Film.jsx';
import { AboutPage, ExpertisePage, ProjectsPage, ContactPage } from './pages/Pages.jsx';

function RoutedPages() {
  const location = useLocation();
  const reduce = useReducedMotion();
  if (location.pathname === '/') return <Film />;
  return <AnimatePresence mode="wait" initial={false}>
    <motion.div key={location.pathname} initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14, clipPath: 'inset(0 0 7% 0)' }} animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0 0)', transition: { duration: reduce ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] } }} exit={reduce ? { opacity: 1 } : { opacity: 0, y: -8, transition: { duration: 0.2 } }}>
      <Routes location={location}>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/expertise" element={<ExpertisePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Film />} />
      </Routes>
    </motion.div>
  </AnimatePresence>;
}

export default function App() {
  return <BrowserRouter><RoutedPages /></BrowserRouter>;
}
