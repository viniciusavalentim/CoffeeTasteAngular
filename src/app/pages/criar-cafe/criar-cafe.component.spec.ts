import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCafeComponent } from './criar-cafe.component';

describe('CriarCafeComponent', () => {
  let component: CriarCafeComponent;
  let fixture: ComponentFixture<CriarCafeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarCafeComponent]
    });
    fixture = TestBed.createComponent(CriarCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
