import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App2View2Component } from './app2-view2.component';

describe('App2View2Component', () => {
  let component: App2View2Component;
  let fixture: ComponentFixture<App2View2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App2View2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App2View2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
