import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodosFormComponent } from './metodos-form.component';

describe('MetodosFormComponent', () => {
  let component: MetodosFormComponent;
  let fixture: ComponentFixture<MetodosFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetodosFormComponent]
    });
    fixture = TestBed.createComponent(MetodosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
