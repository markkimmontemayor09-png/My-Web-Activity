import NextImage from 'next/image';

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
};

/**
 * Image (Atom)
 * ------------
 * Thin wrapper around next/image that enforces a required, descriptive
 * `alt` (WCAG 2.1 AA) and sensible responsive `sizes` by default.
 * Usage (fill mode, inside a relatively-positioned parent):
 *   <div className="relative aspect-[4/3]">
 *     <Image src={site.cardImage} alt={site.name} fill sizes="(min-width: 768px) 33vw, 100vw" />
 *   </div>
 */
export default function Image({
  src,
  alt,
  className = '',
  priority = false,
  sizes = '100vw',
  fill = false,
  width,
  height,
}: ImageProps) {
  if (fill) {
    return (
      <NextImage
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <NextImage
      src={src}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
