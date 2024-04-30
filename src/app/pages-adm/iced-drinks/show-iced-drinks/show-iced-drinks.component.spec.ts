import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowIcedDrinksComponent } from './show-iced-drinks.component';

describe('ShowIcedDrinksComponent', () => {
  let component: ShowIcedDrinksComponent;
  let fixture: ComponentFixture<ShowIcedDrinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowIcedDrinksComponent]
    });
    fixture = TestBed.createComponent(ShowIcedDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
