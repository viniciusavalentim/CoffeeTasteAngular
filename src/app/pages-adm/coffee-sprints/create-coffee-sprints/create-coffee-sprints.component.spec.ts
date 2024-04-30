import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCoffeeSprintsComponent } from './create-coffee-sprints.component';

describe('CreateCoffeeSprintsComponent', () => {
  let component: CreateCoffeeSprintsComponent;
  let fixture: ComponentFixture<CreateCoffeeSprintsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCoffeeSprintsComponent]
    });
    fixture = TestBed.createComponent(CreateCoffeeSprintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
