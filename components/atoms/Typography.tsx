import type { ElementType, ReactNode } from 'react';

type TypographyVariant = 'display' | 'h1' | 'h2' | 'h3' | 'body' | 'eyebrow' | 'caption';

const VARIANT_CONFIG: Record<TypographyVariant, { tag: ElementType; className: string }> = {
  display: { tag: 'h1', className: 'font-display text-4xl md:text-6xl leading-tight text-ocean-deep' },
  h1: { tag: 'h1', className: 'font-display text-3xl md:text-4xl text-ocean-deep' },
  h2: { tag: 'h2', className: 'font-display text-2xl md:text-3xl text-ocean-deep' },
  h3: { tag: 'h3', className: 'font-display text-xl md:text-2xl text-ocean-deep' },
  body: { tag: 'p', className: 'font-body text-base leading-relaxed text-ink' },
  eyebrow: {
    tag: 'p',
    className: 'font-body text-xs font-semibold tracking-[0.18em] uppercase text-ocean',
  },
  caption: { tag: 'p', className: 'font-body text-sm text-ink/70' },
};

type TypographyProps = {
  variant: TypographyVariant;
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

/**
 * Typography (Atom)
 * -----------------
 * Centralizes the type scale so headings/body text stay consistent
 * without repeating Tailwind class strings across pages.
 * Usage: <Typography variant="h2">Section title</Typography>
 */
export default function Typography({ variant, children, className = '', as }: TypographyProps) {
  const { tag, className: variantClass } = VARIANT_CONFIG[variant];
  const Tag = as ?? tag;
  return <Tag className={`${variantClass} ${className}`}>{children}</Tag>;
}
