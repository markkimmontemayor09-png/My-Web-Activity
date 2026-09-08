import type { Metadata } from 'next';
import './globals.css';
import HeaderNavigation from '@/components/organisms/HeaderNavigation';

export const metadata: Metadata = {
  title: {
    default: 'Pangasinan Heritage Digital Showcase',
    template: '%s | Pangasinan Heritage Digital Showcase',
  },
  description:
    'Discover Pangasinan\u2019s most iconic heritage sites: the Hundred Islands, Cape Bolinao Lighthouse, and Balungao Hot Spring.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <HeaderNavigation />
        <main id="main-content">{children}</main>
        <footer className="bg-ocean-deep px-4 py-8 text-center text-sm text-white/70">
          <p>
            Pangasinan Heritage Digital Showcase &mdash; a Pangasinan Provincial Tourism Office initiative.
          </p>
          <p className="mt-1">Built for Activity 1, CITE, Urdaneta City University.</p>
        </footer>
      </body>
    </html>
  );
}
