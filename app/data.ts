import { about, brand, designPlates, hsePolicy, projects, qualityPolicy, services, values } from '../src/film/content';

export { about, brand, designPlates, hsePolicy, projects, qualityPolicy, services, values };

export const navItems = [
  { label: 'Home', href: '/', image: '/images/golden-tower.webp' },
  { label: 'About', href: '/about', image: '/images/tower-hardhat-bw.webp' },
  { label: 'Services', href: '/services', image: '/images/rebar-crew.webp' },
  { label: 'Projects', href: '/projects', image: '/images/project-yenagoa.webp' },
  { label: '3D Designs', href: '/designs', image: '/images/design-5-bedroom-01.webp' },
  { label: 'Standards', href: '/standards', image: '/images/hse-worker-rebar.webp' },
  { label: 'Contact', href: '/contact', image: '/images/engineer-blueprints.webp' },
] as const;

export const projectSlugs = [
  { slug: '5-bedroom-duplex-yenagoa', location: 'Yenagoa, Bayelsa State' },
  { slug: '5-bedroom-duplex-port-harcourt', location: 'Port Harcourt, Rivers State' },
  { slug: '5-bedroom-duplex-bonny-island', location: 'Bonny Island, Rivers State' },
] as const;
