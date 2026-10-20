import type { Metadata, Viewport } from 'next';
import './globals.css';
import { MotionShell } from '@/components/Experience';

export const metadata: Metadata = {
  title: { default: 'KaizerBrix Consults | Building Enduring Legacies', template: '%s | KaizerBrix Consults' },
  description: 'Architecture, civil engineering, surveying, town planning and procurement consultancy from Port Harcourt, Nigeria.',
  applicationName: 'KaizerBrix Consults',
  openGraph: { type: 'website', siteName: 'KaizerBrix Consults', title: 'KaizerBrix Consults | Building Enduring Legacies', description: 'Architecture, civil engineering, surveying, town planning and procurement consultancy.', images: [{ url: '/kaizerbrix-logo.svg', width: 853, height: 220, alt: 'KaizerBrix Consults logo' }] },
  twitter: { card: 'summary_large_image', title: 'KaizerBrix Consults | Building Enduring Legacies', description: 'Architecture, civil engineering, surveying, town planning and procurement consultancy.', images: ['/kaizerbrix-logo.svg'] },
  icons: { icon: '/favicon.svg', apple: '/apple-touch-icon.svg' },
};
export const viewport: Viewport = { themeColor: '#FFFFFF', colorScheme: 'light', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = { '@context': 'https://schema.org', '@type': 'ProfessionalService', name: 'KaizerBrix Consults', address: { '@type': 'PostalAddress', streetAddress: '67 Mgbuoshimini Road, Rumueme', addressLocality: 'Port Harcourt', addressRegion: 'Rivers State', addressCountry: 'NG' }, telephone: '+2347073847960', email: 'kaizerbrixconsults@gmail.com' };
  return <html lang="en-NG"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><MotionShell>{children}</MotionShell></body></html>;
}
