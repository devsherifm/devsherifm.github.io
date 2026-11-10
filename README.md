# Saniya & Sherif — Interactive Nikah Invitation

A mobile-first static invitation inspired by the supplied visual references. Includes:
- Full-screen botanical curtain opening on tap
- Falling autumn leaves after the invitation opens
- Elegant typography and soft sage/ivory/gold palette
- Two supplied wedding illustrations, with tap-to-expand lightbox
- A realistic gold wedding-rings detail above the names
- Event venue and 4:00 PM start time, with a Google Maps search link
- Scroll reveal transitions and live countdown
- RSVP link via WhatsApp
- Responsive mobile and desktop layout

## Test in Termux
```sh
pkg update
pkg install python unzip
termux-setup-storage
cd ~
unzip ~/storage/downloads/saniya_sherif_nikah_invitation.zip
cd saniya_sherif_nikah_invitation
python -m http.server 8080
```
Open `http://127.0.0.1:8080` on the same phone. Leave Termux running while testing; Ctrl+C stops the server.

## Customize before publishing
- `index.html`: edit names, invitation copy, event details and WhatsApp RSVP link.
- `script.js`: countdown targets `2026-11-15T16:00:00+05:30` (4:00 PM India Standard Time). Update this if the event time changes.
- `style.css`: colors, fonts and transitions.
- The countdown uses India Standard Time (UTC+05:30), so visitors in other time zones see the same instant correctly.
- The RSVP button has no specific recipient yet. Change `https://wa.me/?text=...` to `https://wa.me/COUNTRYCODEPHONENUMBER?text=...`, using digits only for the number.

## Free hosting
### GitHub Pages
1. Create a public repository at https://github.com/new
2. Upload `index.html`, `style.css`, `script.js`, the `images/` folder, and optionally this README.
3. Repository Settings → Pages → deploy from branch → `main` → `/(root)`.
4. Wait for deployment and share the URL shown in Settings → Pages.
Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

### Cloudflare Pages
Connect a Git repository containing these files. Set the root directory to `/`; no build command is needed for plain HTML/CSS/JS.
Docs: https://developers.cloudflare.com/pages/

The page is static; it needs no Node.js, Django, database, or paid backend. Keep guest data private; do not publish guest lists or personal phone numbers. Fonts load from Google Fonts when internet access is available. The uploaded illustration files are included in `images/`.
