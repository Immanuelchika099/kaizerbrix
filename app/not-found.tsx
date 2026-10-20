import Link from 'next/link';
import { Credits } from '@/components/Experience';
export default function NotFound() { return <main><section className="not-found scene" data-nav-theme="ink"><p className="scene-label">ERROR / 404</p><h1 className="display">THIS PAGE<br/>ISN'T HERE<span>.</span></h1><p>The requested page could not be found.</p><Link className="text-link" href="/">RETURN HOME ↗</Link></section><Credits/></main>; }
