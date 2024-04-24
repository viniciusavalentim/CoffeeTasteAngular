import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDrinksComponent } from './update-drinks.component';

describe('UpdateDrinksComponent', () => {
  let component: UpdateDrinksComponent;
  let fixture: ComponentFixture<UpdateDrinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDrinksComponent]
    });
    fixture = TestBed.createComponent(UpdateDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
