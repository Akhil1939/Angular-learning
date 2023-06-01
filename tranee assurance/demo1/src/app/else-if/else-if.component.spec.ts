import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElseIfComponent } from './else-if.component';

describe('ElseIfComponent', () => {
  let component: ElseIfComponent;
  let fixture: ComponentFixture<ElseIfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElseIfComponent]
    });
    fixture = TestBed.createComponent(ElseIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
