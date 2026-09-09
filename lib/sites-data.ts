export type HeritageSite = {
  slug: string;
  name: string;
  town: string;
  tagline: string;
  heroImage: string;
  cardImage: string;
  description: string[];
  highlights: string[];
  visitInfo: { label: string; value: string }[];
};

export const heritageSites: HeritageSite[] = [
  {
    slug: 'hundred-islands',
    name: 'Hundred Islands National Park',
    town: 'Alaminos',
    tagline: 'Over a hundred limestone islands scattered across Lingayen Gulf.',
    heroImage:
      '/My-Web-Activity/images/hndrd-islnd.jpg',
    cardImage:
      '/My-Web-Activity/images/hndrd-islnd.jpg',
    description: [
      'Hundred Islands National Park is the Philippines\u2019 first national park, made up of 124 islands and islets at low tide off the coast of Alaminos City. The park is best explored by island-hopping boat, stopping at Governor\u2019s, Quezon, and Children\u2019s Islands for swimming, snorkeling, and short forest trails.',
      'The park anchors Pangasinan\u2019s marine tourism economy and is a protected area, with local guides and boat operators managing visitor access to reduce reef damage.',
    ],
    highlights: [
      'Island-hopping tours departing from Lucap Wharp',
      'Snorkeling and kayaking around coral reefs',
      'Zipline and cliff-jumping at Quezon Island',
      'Cave exploration on Children\u2019s Island',
    ],
    visitInfo: [
      { label: 'Best time to visit', value: 'November to May (dry season)' },
      { label: 'How to get there', value: 'Boat from Lucap Wharf, Alaminos City' },
      { label: 'Typical visit length', value: 'Half-day to full-day tour' },
    ],
  },
  {
    slug: 'bolinao-lighthouse',
    name: 'Cape Bolinao Lighthouse',
    town: 'Bolinao',
    tagline: 'The second-tallest lighthouse in the Philippines, standing since 1905.',
    heroImage:
      '/My-Web-Activity/images/bolinao.jpg',
    cardImage:
      '/My-Web-Activity/images/bolinao.jpg',
    description: [
      'Perched atop Punta Piedra Point, the Cape Bolinao Lighthouse has guided ships along the South China Sea since the early American colonial period. At roughly 22 meters tall, it remains one of the tallest lighthouses in the country and offers sweeping views of Bolinao\u2019s coastline.',
      'The site is a favorite sunset viewpoint and a short side trip from Bolinao\u2019s beaches, reefs, and the nearby Patar White Beach.',
    ],
    highlights: [
      'Panoramic sunset views over the West Philippine Sea',
      'Historic Spanish-American era lighthouse structure',
      'Short, family-friendly walk to the viewing deck',
      'Nearby access to Patar White Beach',
    ],
    visitInfo: [
      { label: 'Best time to visit', value: 'Late afternoon, for sunset' },
      { label: 'How to get there', value: '15-20 min tricycle ride from Bolinao town proper' },
      { label: 'Typical visit length', value: '1-2 hours' },
    ],
  },
  {
    slug: 'balungao-hot-spring',
    name: 'Balungao Hot Spring',
    town: 'Balungao',
    tagline: 'Mineral-rich pools tucked at the base of Mt. Balungao.',
    heroImage:
      '/My-Web-Activity/images/balungao.jpg',
    cardImage:
      '/My-Web-Activity/images/balungao.jpg',
    description: [
      'Balungao Hot Spring Resort sits at the foothills of Mt. Balungao in the eastern part of Pangasinan, drawing on natural mineral springs believed to have therapeutic properties. The resort area combines warm spring pools with cool swimming pools and picnic groves shaded by mature trees.',
      'It is a popular inland getaway for families and groups, offering a quieter, forested alternative to Pangasinan\u2019s coastal attractions.',
    ],
    highlights: [
      'Natural warm mineral spring pools',
      'Adjacent cold-water swimming pools',
      'Shaded picnic groves and cottages',
      'Trailhead access toward Mt. Balungao',
    ],
    visitInfo: [
      { label: 'Best time to visit', value: 'Year-round; cooler months for hiking' },
      { label: 'How to get there', value: 'Jeepney or van from Rosales or Urdaneta City' },
      { label: 'Typical visit length', value: 'Half-day' },
    ],
  },
];

export function getSiteBySlug(slug: string): HeritageSite | undefined {
  return heritageSites.find((site) => site.slug === slug);
}
