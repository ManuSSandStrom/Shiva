# Shiva

Static web project for a business card style landing page, served locally with a lightweight Node.js server.

## Project Structure

- `index.html` - main page markup and inline styling.
- `server.js` - minimal local HTTP server for development.
- `start-server.bat` - Windows helper script to start the server.

## Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

### Run Locally

1. Double-click `start-server.bat`, or run:

   ```bat
   start-server.bat
   ```

2. Open one of the following in your browser:

   - `http://127.0.0.1:8000/`
   - `http://127.0.0.1:8000/Shiva`

## Notes

- The local server falls back to `index.html` for unknown routes, which helps when opening custom paths during development.
