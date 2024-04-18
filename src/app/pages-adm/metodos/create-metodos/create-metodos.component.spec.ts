import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMetodosComponent } from './create-metodos.component';

describe('CreateMetodosComponent', () => {
  let component: CreateMetodosComponent;
  let fixture: ComponentFixture<CreateMetodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateMetodosComponent]
    });
    fixture = TestBed.createComponent(CreateMetodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
