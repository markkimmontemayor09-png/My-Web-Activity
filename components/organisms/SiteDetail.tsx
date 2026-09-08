import Typography from '@/components/atoms/Typography';
import Icon from '@/components/atoms/Icon';
import Image from '@/components/atoms/Image';
import Button from '@/components/atoms/Button';
import type { HeritageSite } from '@/lib/sites-data';

type SiteDetailProps = {
  site: HeritageSite;
};

/**
 * SiteDetail (Organism)
 * ---------------------
 * Full detail layout for a single heritage site. Reused by each of the
 * three static detail routes (app/heritage/*.tsx) so the visual template
 * stays consistent and only the data changes.
 *
 * Responsive / breakpoint logic:
 * - Mobile (<768px): hero image full-bleed, single-column content,
 *   highlights and visit-info stack vertically below the description.
 * - Desktop (>=768px): two-column layout&mdash;description in a wider
 *   left column, a sticky "Visit Info" card in the right column.
 */
export default function SiteDetail({ site }: SiteDetailProps) {
  return (
    <article>
      <div className="relative h-[45vh] min-h-[320px] w-full overflow-hidden">
        <Image src={site.heroImage} alt={`${site.name}, ${site.town}, Pangasinan`} fill priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 via-ocean-deep/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-content px-4 pb-8 md:px-8">
          <div className="flex items-center gap-1.5 text-sand-light">
            <Icon name="pin" className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-wide">{site.town}, Pangasinan</span>
          </div>
          <Typography variant="display" className="mt-1 !text-3xl !text-white md:!text-5xl">
            {site.name}
          </Typography>
        </div>
      </div>

      <div className="mx-auto grid max-w-content gap-10 px-4 py-12 md:grid-cols-3 md:px-8">
        <div className="space-y-4 md:col-span-2">
          <Typography variant="h2">About this site</Typography>
          {site.description.map((paragraph, index) => (
            <Typography variant="body" key={index}>
              {paragraph}
            </Typography>
          ))}

          <Typography variant="h2" className="!mt-8">
            Highlights
          </Typography>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {site.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2 rounded-lg bg-white p-3 text-sm text-ink shadow-sm">
                <Icon name="boat" className="mt-0.5 h-4 w-4 shrink-0 text-ocean" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="h-fit rounded-2xl bg-white p-6 shadow-sm md:sticky md:top-24">
          <Typography variant="h3" className="!text-lg">
            Visit info
          </Typography>
          <dl className="mt-4 space-y-4">
            {site.visitInfo.map((item) => (
              <div key={item.label}>
                <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ocean">
                  <Icon name="clock" className="h-3.5 w-3.5" />
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm text-ink">{item.value}</dd>
              </div>
            ))}
          </dl>
          <Button href="/" variant="ghost" className="mt-6 w-full">
            Back to all sites
          </Button>
        </aside>
      </div>
    </article>
  );
}
