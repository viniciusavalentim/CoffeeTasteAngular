import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHotDrinkComponent } from './update-hot-drink.component';

describe('UpdateHotDrinkComponent', () => {
  let component: UpdateHotDrinkComponent;
  let fixture: ComponentFixture<UpdateHotDrinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateHotDrinkComponent]
    });
    fixture = TestBed.createComponent(UpdateHotDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
