import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App1View1Component } from './app1-view1.component';

describe('App1View1Component', () => {
  let component: App1View1Component;
  let fixture: ComponentFixture<App1View1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App1View1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App1View1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
