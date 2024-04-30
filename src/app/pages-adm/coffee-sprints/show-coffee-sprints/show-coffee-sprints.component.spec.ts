import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCoffeeSprintsComponent } from './show-coffee-sprints.component';

describe('ShowCoffeeSprintsComponent', () => {
  let component: ShowCoffeeSprintsComponent;
  let fixture: ComponentFixture<ShowCoffeeSprintsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowCoffeeSprintsComponent]
    });
    fixture = TestBed.createComponent(ShowCoffeeSprintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
