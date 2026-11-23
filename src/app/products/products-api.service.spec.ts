import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Product } from './product';
import { ProductsApiService } from './products-api.service';

describe('ProductsApiService', () => {
  let service: ProductsApiService;
  let httpTestingController: HttpTestingController;
  const apiUrl = 'https://api.example.com/products';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ProductsApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('gets products', () => {
    const products: Product[] = [
      { id: 1, name: 'Desk', description: 'Wood desk', price: 99 },
    ];

    service.getProducts().subscribe((result) => expect(result).toEqual(products));

    const request = httpTestingController.expectOne(apiUrl);
    expect(request.request.method).toBe('GET');
    request.flush(products);
  });

  it('creates a product', () => {
    const newProduct = { name: 'Desk', description: 'Wood desk', price: 99 };

    service.createProduct(newProduct).subscribe((result) => {
      expect(result).toEqual({ id: 1, ...newProduct });
    });

    const request = httpTestingController.expectOne(apiUrl);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(newProduct);
    request.flush({ id: 1, ...newProduct });
  });

  it('updates a product', () => {
    const product: Product = { id: 1, name: 'Desk', description: 'Wood desk', price: 99 };

    service.updateProduct(product).subscribe((result) => expect(result).toEqual(product));

    const request = httpTestingController.expectOne(`${apiUrl}/1`);
    expect(request.request.method).toBe('PUT');
    expect(request.request.body).toEqual(product);
    request.flush(product);
  });

  it('deletes a product', () => {
    service.deleteProduct(1).subscribe();

    const request = httpTestingController.expectOne(`${apiUrl}/1`);
    expect(request.request.method).toBe('DELETE');
    request.flush(null);
  });
});
