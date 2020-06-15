import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App2NavComponent } from './app2-nav.component';

describe('App2NavComponent', () => {
  let component: App2NavComponent;
  let fixture: ComponentFixture<App2NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App2NavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App2NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
