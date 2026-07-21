# Hamr Digital site — outstanding work

1. **Wire up the contact form to actually send.** Right now submitting just
   flips a local "message sent" state (`script.js`) — nothing is emailed or
   stored anywhere. Needs a real backend: Formspree, a mailto fallback, or a
   proper API route.
2. **Gitignore `.server.js`.** It's the local static file server used only
   for previewing the site during development and shouldn't ship in the repo
   history. Add a `.gitignore` (or delete it if a local server is no longer
   needed).
3. **Verify mobile on a real device.** Layout was checked at emulated
   375/768/1280px viewports only. Confirm on an actual phone, especially
   Safari's address-bar / `100vh` behavior on the hero section.
4. **Consider a real mobile nav (hamburger menu).** Currently the
   Services/Pricing/Work links are just hidden below 600px; the "Start a
   project" CTA and full footer nav remain. Revisit if a slide-out menu is
   wanted instead.
5. **GitHub Pages 404 at `tremah97.github.io/hamr-digital-site`.** Not an
   issue if only the Vercel URL (`hamr-digital-site.vercel.app`) is meant to
   be live, but flagging in case Pages was also intended as a target.
