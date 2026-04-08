# Shiva

Static web project for a business card style landing page, ready for static hosting on Netlify.

## Project Structure

- `index.html` - main page markup and inline styling.
- `_redirects` - Netlify rewrite rules for clean card routes.
- `.gitignore` - local ignore rules for the repository.

## Deployment

Deploy the repository to Netlify as a static site with these settings:

- Base directory: leave empty
- Build command: leave empty
- Publish directory: `.`

## Notes

- Netlify clean routes are handled through `_redirects`.
- Opening `index.html` directly with `file://` works for local preview without extra query parameters in the final URL.
