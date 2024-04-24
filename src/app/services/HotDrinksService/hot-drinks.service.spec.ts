import { TestBed } from '@angular/core/testing';

import { HotDrinksService } from './hot-drinks.service';

describe('HotDrinksService', () => {
  let service: HotDrinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotDrinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
