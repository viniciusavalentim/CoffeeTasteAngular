import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHotDrinkComponent } from './create-hot-drink.component';

describe('CreateHotDrinkComponent', () => {
  let component: CreateHotDrinkComponent;
  let fixture: ComponentFixture<CreateHotDrinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateHotDrinkComponent]
    });
    fixture = TestBed.createComponent(CreateHotDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
