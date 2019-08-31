import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashbdtable1Component } from './dashbdtable1.component';

describe('Dashbdtable1Component', () => {
  let component: Dashbdtable1Component;
  let fixture: ComponentFixture<Dashbdtable1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashbdtable1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashbdtable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
