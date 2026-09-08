import Link from 'next/link';

type NavigationItemProps = {
  href: string;
  label: string;
  isActive?: boolean;
};

/**
 * NavigationItem (Molecule)
 * -------------------------
 * A single link used inside HeaderNavigation. Kept as its own molecule
 * (rather than inline in the organism) so the active/hover states are
 * defined once and reused for both the desktop nav bar and the mobile
 * menu drawer.
 *
 * Responsive behavior: visually identical across breakpoints; the parent
 * HeaderNavigation organism decides whether items render in a horizontal
 * row (desktop) or a stacked list (mobile menu).
 */
export default function NavigationItem({ href, label, isActive = false }: NavigationItemProps) {
  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={`text-sm font-semibold transition-colors ${
        isActive ? 'text-beacon' : 'text-white/90 hover:text-beacon'
      }`}
    >
      {label}
    </Link>
  );
}
