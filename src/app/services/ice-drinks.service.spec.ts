import { TestBed } from '@angular/core/testing';

import { IceDrinksService } from './Ice-drinks.service';

describe('BebidasGeladasService', () => {
  let service: IceDrinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IceDrinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
