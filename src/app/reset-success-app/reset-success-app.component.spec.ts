import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetSuccessAppComponent } from './reset-success-app.component';

describe('ResetSuccessAppComponent', () => {
  let component: ResetSuccessAppComponent;
  let fixture: ComponentFixture<ResetSuccessAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetSuccessAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetSuccessAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
