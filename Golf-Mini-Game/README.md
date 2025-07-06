# Golf Mini Game

A modern interactive mini golf game web application built with HTML, CSS, and HTMX.

## Overview

Golf Mini Game is an engaging web-based mini golf experience that leverages HTMX for enhanced interactivity without heavy JavaScript. The application features multiple golf courses, realistic physics, and a user-friendly interface.

## Features

- Interactive mini golf gameplay with realistic physics
- 18 challenging courses with varying difficulty levels
- Score tracking and par system
- Related games section with recommendations
- Responsive design for all devices
- Minimal JavaScript using HTMX for dynamic content

## Technology Stack

- HTML5 for structure
- CSS3 for styling
- HTMX for interactive elements
- Minimal vanilla JavaScript for game mechanics

## HTMX Implementation

This project demonstrates modern web development using HTMX to enhance user experience:

- Game switching functionality using `hx-get` and `hx-target` for seamless content updates
- Form submissions with `hx-post` for search functionality
- Dynamic content loading with `hx-trigger` for related games
- Server-side rendering of game components for improved performance

## Project Structure

```
Golf-Mini-Game/
  ├── index.html          # Main entry point with game interface
  ├── src/
  │   ├── main.ts         # TypeScript entry point
  │   ├── mini-golf-game.js # Game mechanics
  │   └── styles.css      # Styling for the application
  ├── cave-golf.webp      # Game asset
  └── README.md           # Project documentation
```

## Getting Started

1. Clone the repository
2. Open `index.html` in your browser or set up a local server
3. Enjoy playing mini golf!

## Development

To modify or enhance the application:

1. Edit HTML templates to adjust structure
2. Update HTMX attributes for interactive behavior
3. Modify CSS for styling changes
4. Use the TypeScript/JavaScript files for complex game mechanics

## Best Practices

This project follows these HTMX best practices:

- Declarative attributes instead of JavaScript event handlers
- Server-side validation for data integrity
- Minimal response sizes by returning only essential HTML
- Consistent naming conventions for HTMX attributes
- Modular structure for templates and components

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License
