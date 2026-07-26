# Where to put your files

Drop your own files directly into this `public/` folder (same folder this file is in).
Vite serves everything here from the site root, so the paths below match what the
components already expect — no code changes needed once the files are in place.

| File you add                     | Goes here                          | Used by                          |
|-----------------------------------|-------------------------------------|-----------------------------------|
| Your circular profile photo       | `public/fredcrop3.jpeg`             | `src/components/Hero.jsx`         |
| Your resume (PDF recommended)     | `public/fredrickresume.pdf`         | `src/components/Hero.jsx` (Check Resume dropdown) |
| Certificate images                | `public/certificates/hackerrank.jpeg`, `tcsion.jpeg`, `infosys.jpeg`, `ibm.jpeg` | `Certifications.jsx` fallback + backend seed data |

Notes:
- If `fredcrop3.jpeg` is missing, the "FS" initials placeholder shows automatically instead —
  the photo `<img>` silently hides itself on load error.
- The resume dropdown's "Download Resume" button forces a save-to-device using the
  `download` attribute; "View Resume" opens it in a new tab. Both point at the same
  `RESUME_SRC` constant at the top of `Hero.jsx` — change that constant if you'd rather
  use a `.jpg` image of your resume instead of a PDF.
