import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeSprintsComponent } from './coffee-sprints.component';

describe('CoffeeSprintsComponent', () => {
  let component: CoffeeSprintsComponent;
  let fixture: ComponentFixture<CoffeeSprintsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoffeeSprintsComponent]
    });
    fixture = TestBed.createComponent(CoffeeSprintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
