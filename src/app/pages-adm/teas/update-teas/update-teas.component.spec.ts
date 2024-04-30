import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTeasComponent } from './update-teas.component';

describe('UpdateTeasComponent', () => {
  let component: UpdateTeasComponent;
  let fixture: ComponentFixture<UpdateTeasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTeasComponent]
    });
    fixture = TestBed.createComponent(UpdateTeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
