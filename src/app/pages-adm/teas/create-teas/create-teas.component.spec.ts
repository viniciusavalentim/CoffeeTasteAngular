import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTeasComponent } from './create-teas.component';

describe('CreateTeasComponent', () => {
  let component: CreateTeasComponent;
  let fixture: ComponentFixture<CreateTeasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTeasComponent]
    });
    fixture = TestBed.createComponent(CreateTeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
