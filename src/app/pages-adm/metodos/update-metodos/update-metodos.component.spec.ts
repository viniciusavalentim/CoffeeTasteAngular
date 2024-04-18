import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMetodosComponent } from './update-metodos.component';

describe('UpdateMetodosComponent', () => {
  let component: UpdateMetodosComponent;
  let fixture: ComponentFixture<UpdateMetodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateMetodosComponent]
    });
    fixture = TestBed.createComponent(UpdateMetodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
