import { useEffect } from 'react'

const SITE_NAME = 'Vico Pest Care'

function setMeta(attribute, key, content) {
  if (!content) return

  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

/**
 * Updates page-level metadata for a Vite/React route without an SEO package.
 * Pass the service preset from `serviceSeo` (or override individual values).
 */
export default function Seo({
  title,
  description,
  canonicalUrl,
  image,
  imageAlt,
  type = 'website',
  noIndex = false,
}) {
  useEffect(() => {
    document.title = title
    setMeta('name', 'description', description)
    setMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow')

    setMeta('property', 'og:type', type)
    setMeta('property', 'og:site_name', SITE_NAME)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', canonicalUrl)
    setMeta('property', 'og:image', image)
    setMeta('property', 'og:image:alt', imageAlt || title)
    setMeta('name', 'twitter:card', image ? 'summary_large_image' : 'summary')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', image)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical && canonicalUrl) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    if (canonical && canonicalUrl) canonical.href = canonicalUrl
  }, [title, description, canonicalUrl, image, imageAlt, type, noIndex])

  return null
}
