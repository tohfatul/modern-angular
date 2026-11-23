import { Component, computed, inject, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../product';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CartService } from '../../cart/cart-service';
// import { ProductsApiService } from '../products-api.service';

@Component({
  imports: [ProductCard, MatIconModule, MatInputModule, FormsModule, MatFormFieldModule],
  selector: 'app-products-grid',
  styleUrl: './products-grid.scss',
  templateUrl: './products-grid.html',
})
export class ProductsGrid {
  private cartService = inject(CartService);

  protected readonly searchTerm = signal('');
  protected readonly products = signal<Product[]>([
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      description:
        'High-quality wireless headphones with noise cancellation and premium sound quality.',
      price: 199.99,
      originalPrice: 249.99,
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      description:
        'Track your fitness goals with this advanced smartwatch featuring heart rate monitoring.',
      price: 299.99,
    },
    {
      id: 3,
      name: 'Portable Bluetooth Speaker',
      description: 'Compact speaker with powerful bass and 12-hour battery life.',
      price: 79.99,
      originalPrice: 99.99,
    },
  ]);

  // To load products from the backend, uncomment the service import above,
  // then uncomment this injection and constructor. The hardcoded list above
  // remains visible until the request succeeds.
  // private readonly productsApi = inject(ProductsApiService);
  //
  // constructor() {
  //   this.productsApi.getProducts().subscribe({
  //     next: (products) => this.products.set(products),
  //     error: (error: unknown) => console.error('Failed to load products', error),
  //   });
  // }

  protected readonly filteredProducts = computed(() => {
    const term = this.searchTerm().toLocaleLowerCase().trim();
    if (!term) return this.products();

    return this.products().filter(
      (product) =>
        product.name.toLocaleLowerCase().includes(term) ||
        product.description.toLocaleLowerCase().includes(term),
    );
  });

  protected clearSearch() {
    this.searchTerm.set('');
  }

  protected onAddToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
