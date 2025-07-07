# Golf Mini Game

A web-based mini golf game with a modern UI built using Vite, TypeScript, and CSS.

## Features

- Interactive mini golf game with realistic physics
- Responsive design for various screen sizes
- Beautiful UI with golf-themed styling
- Game controls and instructions
- Related games section

## Development Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd Golf-Mini-Game
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To build the project for production:

```bash
npm run build
```

This will generate a `dist` directory with optimized files ready for deployment.

## Deployment

This project is configured for deployment on Netlify. The `netlify.toml` file includes the necessary configuration.

### Deploying to Netlify

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)
2. Log in to Netlify and click "New site from Git"
3. Connect to your Git provider and select the repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

## Troubleshooting CSS Issues

If CSS styles are not showing on the deployed site:

1. Make sure all CSS paths are relative (starting with `./`) not absolute (starting with `/`)
2. Verify that the Vite configuration has `base: './'` set
3. Check that all assets are properly imported in the main entry file
4. Clear browser cache and refresh the page

## Project Structure

- `index.html` - Main HTML file
- `src/` - Source code directory
  - `main.ts` - TypeScript entry point
  - `styles.css` - Main CSS file
  - `mini-golf-game.js` - Game logic
- `dist/` - Build output directory (generated after build)

## License

[MIT](LICENSE)
