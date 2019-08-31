import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HfprofileComponent } from './hfprofile.component';

describe('HfprofileComponent', () => {
  let component: HfprofileComponent;
  let fixture: ComponentFixture<HfprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HfprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HfprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
