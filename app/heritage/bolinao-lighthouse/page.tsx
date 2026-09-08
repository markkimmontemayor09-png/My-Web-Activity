import type { Metadata } from 'next';
import SiteDetail from '@/components/organisms/SiteDetail';
import { getSiteBySlug } from '@/lib/sites-data';

const site = getSiteBySlug('bolinao-lighthouse')!;

export const metadata: Metadata = {
  title: site.name,
  description: site.tagline,
};

export default function BolinaoLighthousePage() {
  return <SiteDetail site={site} />;
}
