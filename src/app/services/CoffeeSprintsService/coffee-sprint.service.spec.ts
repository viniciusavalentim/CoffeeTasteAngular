import { TestBed } from '@angular/core/testing';

import { CoffeeSprintService } from './coffee-sprint.service';

describe('CoffeeSprintService', () => {
  let service: CoffeeSprintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoffeeSprintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
