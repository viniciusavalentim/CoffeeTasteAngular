import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIcedDrinksComponent } from './update-iced-drinks.component';

describe('UpdateIcedDrinksComponent', () => {
  let component: UpdateIcedDrinksComponent;
  let fixture: ComponentFixture<UpdateIcedDrinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateIcedDrinksComponent]
    });
    fixture = TestBed.createComponent(UpdateIcedDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
