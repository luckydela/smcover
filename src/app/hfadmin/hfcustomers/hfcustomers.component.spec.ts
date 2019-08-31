import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HfcustomersComponent } from './hfcustomers.component';

describe('HfcustomersComponent', () => {
  let component: HfcustomersComponent;
  let fixture: ComponentFixture<HfcustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HfcustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HfcustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
