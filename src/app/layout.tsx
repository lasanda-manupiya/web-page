import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'One Model. Complete Project Intelligence. | iCost + SustainZone',
    template: '%s | iCost + SustainZone',
  },
  description:
    'Transform BIM and IFC models into cost, carbon, asset and risk intelligence through one connected platform.',
  applicationName: 'iCost + SustainZone',
  openGraph: {
    title: 'One Model. Complete Project Intelligence.',
    description:
      'Integrated BIM Cost, Carbon and Risk Intelligence Platform. Turn one model into connected cost, carbon, information-gap and risk intelligence.',
    type: 'website',
    locale: 'en_GB',
  },
  robots: { index: false, follow: false }, // prototype — not for indexing yet
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js');" }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
