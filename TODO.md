# Hamr Digital site — outstanding work

- [x] **Wire up the contact form to actually send.** Now POSTs to Formspree
  (`https://formspree.io/f/xaqrbank`) with loading/success/error states.
  Verified delivering to hamr.digital@gmail.com.
- [x] **Gitignore `.server.js`.** Added `.gitignore`; the local dev preview
  server is no longer tracked (still exists locally for previewing).
- [x] **Verify mobile on a real device.** Checked on an actual phone — fine.
- [x] **Mobile nav.** Kept as-is (secondary links hidden below 600px, CTA +
  footer nav remain) — no hamburger menu needed, page reads clean and simple.
- [x] **Link footer social icons.** Instagram and TikTok now point at the
  real profiles instead of `#` placeholders.
- [x] **Custom domain.** Live at hamrdigital.co.uk (apex) and
  www.hamrdigital.co.uk, both with valid certs. No secondary GitHub Pages
  target needed.
- [x] **Favicon.** Inline SVG data URI matching the header's diamond mark.
- [x] **Open Graph / Twitter card meta tags.** Added og:*/twitter:* tags plus
  a generated 1200x630 `og-image.png` so shared links get a proper preview.

## Possible next improvements (not started)

- Basic analytics (e.g. Vercel Analytics) — no visibility into traffic or
  which contact-form submissions convert.
- `robots.txt` / sitemap.xml — minor SEO polish.
- Contrast pass on muted grey text (`#8f96a3`) against the dark navy
  background — fine for decorative labels, worth checking anywhere it
  carries real content.
