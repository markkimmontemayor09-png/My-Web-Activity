/**
 * ColorTokens (Atom)
 * -------------------
 * Single source of truth for the showcase's color palette.
 * Mirrors the values in tailwind.config.ts so non-Tailwind contexts
 * (inline styles, SVGs, charts) can reference the same tokens.
 *
 * Usage: import when a color is needed outside of a Tailwind class,
 * e.g. an inline SVG fill or a dynamically computed style.
 */
export const colorTokens = {
  oceanDeep: '#0C3B44',
  ocean: '#146B79',
  oceanLight: '#4A97A6',
  seafoam: '#EAF3F1',
  sand: '#C9AE82',
  sandLight: '#E8DCC2',
  beacon: '#F2872E',
  ink: '#12242B',
} as const;

export type ColorToken = keyof typeof colorTokens;
