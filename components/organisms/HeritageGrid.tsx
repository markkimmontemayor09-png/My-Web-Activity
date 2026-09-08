'use client';

import { useMemo, useState } from 'react';
import HeritageCard from '@/components/molecules/HeritageCard';
import SearchForm from '@/components/molecules/SearchForm';
import Typography from '@/components/atoms/Typography';
import type { HeritageSite } from '@/lib/sites-data';

type HeritageGridProps = {
  sites: HeritageSite[];
};

/**
 * HeritageGrid (Organism)
 * -----------------------
 * The home page's primary content block: a search field over a
 * responsive grid of HeritageCard molecules.
 *
 * Responsive / breakpoint logic:
 * - Mobile (<640px): 1 column, cards stack vertically.
 * - Tablet (>=640px): 2 columns.
 * - Desktop (>=1024px): 3 columns (one per current heritage site).
 * Grid uses CSS Grid with `grid-cols-*` utilities rather than fixed
 * widths, so it automatically accommodates additional sites added to
 * lib/sites-data.ts in the future without any component changes.
 */
export default function HeritageGrid({ sites }: HeritageGridProps) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return sites;
    return sites.filter(
      (site) => site.name.toLowerCase().includes(q) || site.town.toLowerCase().includes(q)
    );
  }, [sites, query]);

  return (
    <section aria-labelledby="heritage-grid-heading" className="mx-auto max-w-content px-4 py-12 md:px-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <Typography variant="eyebrow">Explore Pangasinan</Typography>
          <Typography variant="h2" as="h2" className="mt-1">
            <span id="heritage-grid-heading">Heritage sites worth the trip</span>
          </Typography>
        </div>
        <SearchForm onSearch={setQuery} />
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl bg-white p-6 text-center text-ink/70" role="status">
          No heritage sites match &ldquo;{query}&rdquo;. Try a different name or town.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((site, index) => (
            <HeritageCard key={site.slug} site={site} priority={index === 0} />
          ))}
        </div>
      )}
    </section>
  );
}
