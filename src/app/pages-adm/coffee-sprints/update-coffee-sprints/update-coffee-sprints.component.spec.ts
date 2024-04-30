import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCoffeeSprintsComponent } from './update-coffee-sprints.component';

describe('UpdateCoffeeSprintsComponent', () => {
  let component: UpdateCoffeeSprintsComponent;
  let fixture: ComponentFixture<UpdateCoffeeSprintsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCoffeeSprintsComponent]
    });
    fixture = TestBed.createComponent(UpdateCoffeeSprintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
