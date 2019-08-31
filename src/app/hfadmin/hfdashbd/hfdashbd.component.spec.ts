import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HfdashbdComponent } from './hfdashbd.component';

describe('HfdashbdComponent', () => {
  let component: HfdashbdComponent;
  let fixture: ComponentFixture<HfdashbdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HfdashbdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HfdashbdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
