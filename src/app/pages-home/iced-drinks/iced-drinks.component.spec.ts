import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcedDrinksComponent } from './iced-drinks.component';

describe('IcedDrinksComponent', () => {
  let component: IcedDrinksComponent;
  let fixture: ComponentFixture<IcedDrinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IcedDrinksComponent]
    });
    fixture = TestBed.createComponent(IcedDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
