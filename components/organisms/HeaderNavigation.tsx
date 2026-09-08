'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavigationItem from '@/components/molecules/NavigationItem';
import Icon from '@/components/atoms/Icon';
import { heritageSites } from '@/lib/sites-data';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  ...heritageSites.map((site) => ({ href: `/heritage/${site.slug}`, label: site.name })),
];

/**
 * HeaderNavigation (Organism)
 * ---------------------------
 * Sticky top navigation used on every page. Composes NavigationItem
 * molecules and an Icon atom for the mobile menu toggle.
 *
 * Responsive / breakpoint logic:
 * - Mobile (<768px): logo + hamburger button; links collapse into a
 *   full-width stacked drawer that opens below the header.
 * - Desktop (>=768px): logo + all links shown inline in a single row;
 *   the mobile drawer and its toggle are hidden entirely.
 */
export default function HeaderNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-ocean-deep">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="mx-auto flex max-w-content items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="font-display text-lg font-bold text-white">
          Pangasinan Heritage
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <NavigationItem key={link.href} href={link.href} label={link.label} isActive={pathname === link.href} />
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="text-white md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Icon name={isOpen ? 'close' : 'menu'} className="h-6 w-6" decorative={false} title="Menu" />
        </button>
      </div>

      {/* Mobile menu drawer */}
      {isOpen && (
        <nav id="mobile-menu" aria-label="Primary" className="flex flex-col gap-4 border-t border-white/10 px-4 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <NavigationItem key={link.href} href={link.href} label={link.label} isActive={pathname === link.href} />
          ))}
        </nav>
      )}
    </header>
  );
}
