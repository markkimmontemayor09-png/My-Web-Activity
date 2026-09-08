type IconName = 'pin' | 'clock' | 'boat' | 'search' | 'menu' | 'close';

type IconProps = {
  name: IconName;
  className?: string;
  /** Decorative icons should stay hidden from screen readers by default. */
  decorative?: boolean;
  title?: string;
};

const PATHS: Record<IconName, JSX.Element> = {
  pin: (
    <path
      d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21Zm0-9a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
      strokeWidth="1.5"
    />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" strokeWidth="1.5" />
      <path d="M12 7.5V12l3 2" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  boat: (
    <path
      d="M3 15h18l-2 4H5l-2-4Zm4-1V9l5-3 5 3v5M12 6V3"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" strokeWidth="1.5" />
      <path d="M20 20l-4.35-4.35" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="1.5" strokeLinecap="round" />,
  close: <path d="M6 6l12 12M18 6L6 18" strokeWidth="1.5" strokeLinecap="round" />,
};

/**
 * Icon (Atom)
 * -----------
 * Usage: <Icon name="pin" className="h-4 w-4 text-ocean" />
 * Pass `title` + `decorative={false}` when the icon conveys meaning on its own.
 */
export default function Icon({ name, className = 'h-5 w-5', decorative = true, title }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      aria-hidden={decorative ? 'true' : undefined}
      role={decorative ? undefined : 'img'}
    >
      {title && !decorative && <title>{title}</title>}
      {PATHS[name]}
    </svg>
  );
}
