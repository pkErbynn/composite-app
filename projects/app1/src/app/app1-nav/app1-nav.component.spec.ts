import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App1NavComponent } from './app1-nav.component';

describe('App1NavComponent', () => {
  let component: App1NavComponent;
  let fixture: ComponentFixture<App1NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App1NavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App1NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
