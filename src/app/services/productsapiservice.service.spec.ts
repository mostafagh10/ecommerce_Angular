import { TestBed } from '@angular/core/testing';

import { ProductsapiserviceService } from './productsapiservice.service';

describe('ProductsapiserviceService', () => {
  let service: ProductsapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
