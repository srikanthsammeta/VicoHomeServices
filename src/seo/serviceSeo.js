const location = '[Location]'
const siteUrl = 'https://www.your-domain.com'

/**
 * Replace the location and siteUrl constants before publishing. Each object can
 * be passed straight into <Seo {...serviceSeo.pestControl} /> on its route.
 */
export const serviceSeo = {
  pestControl: {
    title: `Pest Control for Termites & Bed Bugs | Vico Pest Care | ${location}`,
    description: `Expert pest control in ${location} for termites, bed bugs, cockroaches and more. Vico Pest Care provides reliable residential and commercial treatments—book an inspection today.`,
    canonicalUrl: `${siteUrl}/pest-control`,
    image: `${siteUrl}/og/pest-control.jpg`,
    imageAlt: `Vico Pest Care termite and bed bug control in ${location}`,
  },
  painting: {
    title: `Professional Interior & Exterior Painting | Vico Pest Care | ${location}`,
    description: `Refresh your property with professional interior and exterior painting in ${location}. Vico Pest Care delivers careful residential and commercial painting—request a quote today.`,
    canonicalUrl: `${siteUrl}/painting`,
    image: `${siteUrl}/og/painting.jpg`,
    imageAlt: `Vico Pest Care professional painting in ${location}`,
  },
  carpeting: {
    title: `Carpet Installation & Cleaning Services | Vico Pest Care | ${location}`,
    description: `Need carpet installation or deep carpet cleaning in ${location}? Vico Pest Care serves homes and businesses with dependable flooring care—get a tailored quote today.`,
    canonicalUrl: `${siteUrl}/carpeting`,
    image: `${siteUrl}/og/carpeting.jpg`,
    imageAlt: `Vico Pest Care carpet installation and cleaning in ${location}`,
  },
  electrician: {
    title: `Expert Electrician Repairs & Wiring | Vico Pest Care | ${location}`,
    description: `Choose expert electrician services in ${location} for repairs, fittings, wiring and upgrades. Vico Pest Care helps residential and commercial properties—book service today.`,
    canonicalUrl: `${siteUrl}/electrician`,
    image: `${siteUrl}/og/electrician.jpg`,
    imageAlt: `Vico Pest Care electrician repairs and wiring in ${location}`,
  },
  plumbing: {
    title: `Expert Plumbing Services for Leaks & Installations | Vico Pest Care | ${location}`,
    description: `Get professional plumbing services in ${location} for leaks, repairs, fittings and installations. Vico Pest Care supports homes and businesses—request prompt service today.`,
    canonicalUrl: `${siteUrl}/plumbing`,
    image: `${siteUrl}/og/plumbing.jpg`,
    imageAlt: `Vico Pest Care plumbing repairs and installations in ${location}`,
  },
}

export const homeSeo = {
  title: `Pest Control & Home Services | Vico Pest Care | ${location}`,
  description: `Vico Pest Care is your local choice for pest control, painting, carpeting, electrician and plumbing services for residential and commercial properties in ${location}.`,
  canonicalUrl: `${siteUrl}/`,
}
