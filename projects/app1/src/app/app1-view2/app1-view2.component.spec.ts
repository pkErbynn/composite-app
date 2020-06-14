import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App1View2Component } from './app1-view2.component';

describe('App1View2Component', () => {
  let component: App1View2Component;
  let fixture: ComponentFixture<App1View2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App1View2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App1View2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
