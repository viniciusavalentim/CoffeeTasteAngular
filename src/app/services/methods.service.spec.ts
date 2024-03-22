import { TestBed } from '@angular/core/testing';

import { MethodsService } from './methods.service';

describe('MetodosService', () => {
  let service: MethodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MethodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
