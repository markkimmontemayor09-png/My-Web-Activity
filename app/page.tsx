import Typography from '@/components/atoms/Typography';
import Button from '@/components/atoms/Button';
import Image from '@/components/atoms/Image';
import HeritageGrid from '@/components/organisms/HeritageGrid';
import { heritageSites } from '@/lib/sites-data';

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ocean-deep">
        <div className="absolute inset-0">
          <Image
            src={heritageSites[0].heroImage}
            alt="Limestone islands of Hundred Islands National Park at sunrise"
            fill
            priority
            sizes="100vw"
            className="opacity-40"
          />
        </div>
        <div className="relative mx-auto flex max-w-content flex-col items-start gap-4 px-4 py-20 md:px-8 md:py-32">
          <Typography variant="eyebrow" className="text-sand-light">
            Pangasinan Provincial Tourism Office
          </Typography>
          <Typography variant="display" className="!text-white">
            Coast, light, and springs&mdash;Pangasinan&rsquo;s heritage, close up.
          </Typography>
          <Typography variant="body" className="max-w-xl !text-white/85">
            From the limestone islands of Alaminos to the century-old beacon at Bolinao and the
            mineral springs of Balungao, explore the province&rsquo;s most iconic sites&mdash;built
            fast and light for visitors on mobile data.
          </Typography>
          <Button href="#heritage-grid-heading" variant="primary" className="mt-2">
            Explore heritage sites
          </Button>
        </div>
      </section>

      <HeritageGrid sites={heritageSites} />
    </>
  );
}
