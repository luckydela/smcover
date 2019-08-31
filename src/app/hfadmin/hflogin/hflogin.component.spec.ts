import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HfloginComponent } from './hflogin.component';

describe('HfloginComponent', () => {
  let component: HfloginComponent;
  let fixture: ComponentFixture<HfloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HfloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HfloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
