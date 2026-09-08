import Link from 'next/link';
import type { ReactNode } from 'react';

type BaseProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
};

type ButtonAsLink = BaseProps & {
  href: string;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = BaseProps & {
  href?: never;
  onClick?: () => void;
  type?: 'button' | 'submit';
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const VARIANT_CLASSES: Record<NonNullable<BaseProps['variant']>, string> = {
  primary: 'bg-beacon text-white hover:bg-orange-600',
  secondary: 'bg-ocean text-white hover:bg-ocean-deep',
  ghost: 'bg-transparent text-ocean-deep border border-ocean-deep hover:bg-ocean-deep hover:text-white',
};

const BASE_CLASSES =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold ' +
  'transition-colors duration-150 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none';

/**
 * Button (Atom)
 * -------------
 * Renders as a <Link> when `href` is provided, otherwise as a <button>.
 * Usage: <Button href="/heritage/hundred-islands" variant="primary">Explore</Button>
 */
export default function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const classes = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`;

  if ('href' in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { onClick, type = 'button' } = props as ButtonAsButton;
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
