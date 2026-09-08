'use client';

import { useState, type FormEvent } from 'react';
import Icon from '@/components/atoms/Icon';

type SearchFormProps = {
  onSearch: (query: string) => void;
  placeholder?: string;
};

/**
 * SearchForm (Molecule)
 * ---------------------
 * Used at the top of the Heritage Grid on the home page to filter sites
 * by name or town. Client component (needs interactivity/state), kept as
 * small and isolated as possible so the rest of the page can stay a
 * server component.
 *
 * Responsive behavior:
 * - Mobile: full-width input with the search icon as a submit button.
 * - Tablet/Desktop: same layout, just constrained by the parent's max-width.
 */
export default function SearchForm({ onSearch, placeholder = 'Search heritage sites…' }: SearchFormProps) {
  const [query, setQuery] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch(query.trim());
  }

  function handleChange(value: string) {
    setQuery(value);
    onSearch(value.trim());
  }

  return (
    <form onSubmit={handleSubmit} role="search" className="w-full max-w-md">
      <label htmlFor="site-search" className="sr-only">
        Search heritage sites
      </label>
      <div className="flex items-center gap-2 rounded-full border border-ocean/30 bg-white px-4 py-2.5 shadow-sm focus-within:border-ocean">
        <Icon name="search" className="h-4 w-4 shrink-0 text-ocean" />
        <input
          id="site-search"
          type="search"
          value={query}
          onChange={(event) => handleChange(event.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink/50"
        />
      </div>
    </form>
  );
}
