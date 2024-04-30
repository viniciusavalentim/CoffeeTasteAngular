import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTeasComponent } from './show-teas.component';

describe('ShowTeasComponent', () => {
  let component: ShowTeasComponent;
  let fixture: ComponentFixture<ShowTeasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowTeasComponent]
    });
    fixture = TestBed.createComponent(ShowTeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
