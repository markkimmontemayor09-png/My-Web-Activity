import type { Metadata } from 'next';
import SiteDetail from '@/components/organisms/SiteDetail';
import { getSiteBySlug } from '@/lib/sites-data';

const site = getSiteBySlug('balungao-hot-spring')!;

export const metadata: Metadata = {
  title: site.name,
  description: site.tagline,
};

export default function BalungaoHotSpringPage() {
  return <SiteDetail site={site} />;
}
