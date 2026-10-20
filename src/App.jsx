import { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AboutPage, ExpertisePage, ProjectsPage, ContactPage } from './pages/Pages.jsx';
import './pages/Pages.css';

const Film = lazy(() => import('./film/Film.jsx'));

function RouteEffects() {
  const location = useLocation();

  useEffect(() => {
    const seo = {
      '/': ['KaizerBrix Consults | Building Enduring Legacies', 'A cinematic introduction to KaizerBrix Consults, a multidisciplinary built-environment consultancy in Port Harcourt, Nigeria.'],
      '/about': ['About KaizerBrix Consults | Purpose & Principles', 'Learn about KaizerBrix Consults, its vision, mission and principles for considered design and construction.'],
      '/expertise': ['Our Expertise | KaizerBrix Consults', 'Explore architecture, civil engineering, surveying, town planning and procurement services from KaizerBrix Consults.'],
      '/projects': ['Selected Projects | KaizerBrix Consults', 'Explore residential projects recorded in the KaizerBrix Consults company profile.'],
      '/contact': ['Contact KaizerBrix Consults | Start a Project', 'Contact KaizerBrix Consults in Port Harcourt to discuss a construction, design or consultancy project.']
    };
    const path = location.pathname.replace(/\/+$/, '') || '/';
    const [title, description] = seo[path] || seo['/'];
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);

    // Keep navigation independent from the homepage's smooth-scroll instance.
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
    window.__kbLenis?.stop();
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    const frame = window.requestAnimationFrame(() => {
      window.__kbLenis?.scrollTo(0, { immediate: true, force: true });
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
    const settle = window.setTimeout(() => {
      window.__kbLenis?.stop();
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, 80);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(settle);
      window.__kbLenis?.start();
    };
  }, [location.pathname]);

  return null;
}

function BrandIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Run on every fresh website load, including direct visits to inner routes.
    // Ordinary client-side navigation does not replay the intro.
    const timer = window.setTimeout(() => setVisible(false), 2400);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;
  return (
    <div className="kb-brand-intro" role="status" aria-label="Loading KaizerBrix Consults">
      <img src="/kaizerbrix-logo.png" alt="KaizerBrix Consults" />
      <span className="kb-brand-intro-line" aria-hidden="true" />
    </div>
  );
}

function AppRoutes() {
  return <>
    <RouteEffects />
    <Routes>
      <Route path="/" element={<Suspense fallback={null}><Film /></Suspense>} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/expertise" element={<ExpertisePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<Suspense fallback={null}><Film /></Suspense>} />
    </Routes>
    <BrandIntro />
  </>;
}

export default function App() {
  return <BrowserRouter><AppRoutes /></BrowserRouter>;
}
