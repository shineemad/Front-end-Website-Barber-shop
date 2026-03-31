// PostCSS config in CommonJS (.cjs) format.
// This MUST be .cjs — PostCSS has a well-known bug where it fails to load
// ES Module config files on Linux build servers (Vercel, Netlify, Railway)
// when the project has "type":"module" in package.json.
// Renaming to .cjs forces Node.js to treat it as CommonJS regardless of "type".
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
