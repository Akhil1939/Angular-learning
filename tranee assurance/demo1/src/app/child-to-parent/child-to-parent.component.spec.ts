import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildToParentComponent } from './child-to-parent.component';

describe('ChildToParentComponent', () => {
  let component: ChildToParentComponent;
  let fixture: ComponentFixture<ChildToParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildToParentComponent]
    });
    fixture = TestBed.createComponent(ChildToParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
