import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIngredientsComponent } from './create-ingredients.component';

describe('CreateIngredientsComponent', () => {
  let component: CreateIngredientsComponent;
  let fixture: ComponentFixture<CreateIngredientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateIngredientsComponent]
    });
    fixture = TestBed.createComponent(CreateIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
