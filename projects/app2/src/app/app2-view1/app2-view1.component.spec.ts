import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App2View1Component } from './app2-view1.component';

describe('App2View1Component', () => {
  let component: App2View1Component;
  let fixture: ComponentFixture<App2View1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App2View1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App2View1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
