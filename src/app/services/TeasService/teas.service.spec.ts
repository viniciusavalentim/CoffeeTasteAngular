import { TestBed } from '@angular/core/testing';

import { TeasService } from './teas.service';

describe('TeasService', () => {
  let service: TeasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
