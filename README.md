# Modern Angular Store

A modern shopping application built with Angular 22, featuring product cards, a cart, and Angular Material components.

## Features

- Product grid with product details and pricing
- Add-to-cart functionality
- Quantity updates for existing cart items
- Reactive cart item total using Angular signals
- Responsive Angular Material toolbar and icons
- Example typed service for GET, POST, PUT, and DELETE product API requests

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
├── products/       # Product model, cards, grid, and API service
├── app.ts          # Root component
└── app.routes.ts   # Application routes
```

## Connecting to a Backend API

`ProductsApiService` demonstrates typed HTTP requests for listing and reading products, creating one, updating one, and deleting one. `provideHttpClient()` is registered in `src/app/app.config.ts`.

Replace the placeholder URL in `src/app/products/products-api.service.ts` with your backend endpoint. The service methods return RxJS `Observable`s; HTTP requests are sent when a caller subscribes (or uses the observable in the template with `async`).

For example, inject the service into a component and load the products:

```ts
private readonly productsApi = inject(ProductsApiService);
readonly products$ = this.productsApi.getProducts();
```

```html
@for (product of products$ | async; track product.id) {
  <p>{{ product.name }}</p>
}
```

The backend should return product data matching the `Product` interface. Adapt the interface and endpoint paths to match your API's contract. Subscribe to mutation observables such as `createProduct()` and handle their `next` and `error` notifications in the component.

## Deployment

The repository includes a GitHub Actions workflow that automatically builds and deploys the app to GitHub Pages whenever changes are pushed to `main`.

In the GitHub repository:

1. Open **Settings**.
2. Select **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push a commit to `main` or run the **Deploy Angular app to GitHub Pages** workflow manually.

After deployment, the app is available at:

`https://tohfatul.github.io/modern-angular/`

## Author

Created by [Tohfatul](https://github.com/tohfatul).

## License

This project is available for personal and educational use.
