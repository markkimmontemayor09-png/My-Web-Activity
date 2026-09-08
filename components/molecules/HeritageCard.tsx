import Typography from '@/components/atoms/Typography';
import Image from '@/components/atoms/Image';
import Icon from '@/components/atoms/Icon';
import type { HeritageSite } from '@/lib/sites-data';

type HeritageCardProps = {
  site: HeritageSite;
  priority?: boolean;
};

/**
 * HeritageCard (Molecule)
 * -----------------------
 * Used exclusively for displaying tourist site previews in a responsive
 * heritage-site grid (see HeritageGrid organism). Composes the Image,
 * Typography, and Icon atoms; the whole card is a single link so it is
 * reachable and activatable with one Tab stop and one Enter/click.
 *
 * Responsive behavior:
 * - Mobile: full-width card, image aspect-ratio 4:3.
 * - Tablet/Desktop: card sits in a 2 or 3-column CSS grid (set by the
 *   parent HeritageGrid); the card itself doesn't need breakpoint logic,
 *   it simply fills its grid cell.
 */
export default function HeritageCard({ site, priority = false }: HeritageCardProps) {
  return (
    <a
      href={`/heritage/${site.slug}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink/5 transition-shadow hover:shadow-lg focus-visible:outline-none"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={site.cardImage}
          alt={`${site.name} in ${site.town}, Pangasinan`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="space-y-2 p-5">
        <div className="flex items-center gap-1.5 text-ocean">
          <Icon name="pin" className="h-4 w-4" />
          <span className="text-xs font-semibold uppercase tracking-wide">{site.town}</span>
        </div>
        <Typography variant="h3" className="!text-xl">
          {site.name}
        </Typography>
        <Typography variant="caption">{site.tagline}</Typography>
      </div>
    </a>
  );
}
