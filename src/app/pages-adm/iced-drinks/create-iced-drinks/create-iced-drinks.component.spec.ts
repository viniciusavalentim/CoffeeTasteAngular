import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIcedDrinksComponent } from './create-iced-drinks.component';

describe('CreateIcedDrinksComponent', () => {
  let component: CreateIcedDrinksComponent;
  let fixture: ComponentFixture<CreateIcedDrinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateIcedDrinksComponent]
    });
    fixture = TestBed.createComponent(CreateIcedDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
