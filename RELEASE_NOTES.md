# Release notes

## v1.0.0

First release of the Hike Associate website, built with Next.js (App Router), TypeScript and Tailwind CSS.

### What's included

- **Pages:** Home, About, Services, For Businesses, For Individuals and Contact, plus a 404 page
- **SEO:** unique page metadata, canonical URLs, social tags and image, structured data, `robots.txt`, a sitemap and a web app manifest
- **Accessibility:** tested in light and dark themes on desktop and mobile widths, including reduced-motion support and a pause control on the testimonial carousel
- **Tests:** automated accessibility and SEO checks, run with `npm test`

### Test results

| Lighthouse (mobile) | Performance |
| ------------------- | ----------- |
| `/`                 | 91          |
| `/about`            | 92          |
| `/services`         | 96          |
| `/for-businesses`   | 97          |
| `/for-individuals`  | 97          |
| `/contact`          | 94          |

- Mobile accessibility, best practices and SEO score 100 on all six pages
- Desktop scores 100 in all four Lighthouse categories
- `npm test` passes 46/46
- axe reports 0 violations in both themes at 1440px and 390px

### Known limitations

- No screen reader or real-device testing has been done
- Decorative looping animations stop only through `prefers-reduced-motion`, with no on-page pause control
- No Content Security Policy header is set
- `hikeassociate.com` is not yet confirmed as the live domain. Set `NEXT_PUBLIC_SITE_URL` if the site is served elsewhere
- Structured data has no postal code, because the site doesn't list one
