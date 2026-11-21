# Modern Angular Store

A modern shopping application built with Angular 22, featuring product cards, a cart, and Angular Material components.

## Features

- Product grid with product details and pricing
- Add-to-cart functionality
- Quantity updates for existing cart items
- Reactive cart item total using Angular signals
- Responsive Angular Material toolbar and icons

## Tech Stack

- Angular 22
- TypeScript
- Angular Material
- Angular CDK
- RxJS
- Vitest

## Getting Started

### Prerequisites

- Node.js
- npm
- Angular CLI

### Installation

```bash
git clone https://github.com/tohfatul/modern-angular.git
cd modern-angular
npm install
```

### Development Server

```bash
npm start
```

Open `http://localhost:4200/` in your browser. The application reloads automatically when source files change.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the development server |
| `npm run build` | Build the application |
| `npm test` | Run unit tests |
| `npm run watch` | Build continuously in development mode |

## Project Structure

```text
src/app/
├── cart/           # Cart service and cart item model
├── header/         # Application header and cart badge
├── hello/          # Example component
├── products/       # Product model, cards, and product grid
├── app.ts          # Root component
└── app.routes.ts   # Application routes
```

## Author

Created by [Tohfatul](https://github.com/tohfatul).

## License

This project is available for personal and educational use.
