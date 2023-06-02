import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtpChildComponent } from './ctp-child.component';

describe('CtpChildComponent', () => {
  let component: CtpChildComponent;
  let fixture: ComponentFixture<CtpChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CtpChildComponent]
    });
    fixture = TestBed.createComponent(CtpChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
