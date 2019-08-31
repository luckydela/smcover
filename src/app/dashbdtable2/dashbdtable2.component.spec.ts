import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashbdtable2Component } from './dashbdtable2.component';

describe('Dashbdtable2Component', () => {
  let component: Dashbdtable2Component;
  let fixture: ComponentFixture<Dashbdtable2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashbdtable2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashbdtable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
