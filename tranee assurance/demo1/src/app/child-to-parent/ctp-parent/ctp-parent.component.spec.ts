import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtpParentComponent } from './ctp-parent.component';

describe('CtpParentComponent', () => {
  let component: CtpParentComponent;
  let fixture: ComponentFixture<CtpParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CtpParentComponent]
    });
    fixture = TestBed.createComponent(CtpParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
