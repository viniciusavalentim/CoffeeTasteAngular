import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHotDrinksComponent } from './show-hot-drinks.component';

describe('ShowHotDrinksComponent', () => {
  let component: ShowHotDrinksComponent;
  let fixture: ComponentFixture<ShowHotDrinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowHotDrinksComponent]
    });
    fixture = TestBed.createComponent(ShowHotDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
