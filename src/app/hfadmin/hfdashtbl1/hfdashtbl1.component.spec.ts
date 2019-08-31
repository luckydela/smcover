import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hfdashtbl1Component } from './hfdashtbl1.component';

describe('Hfdashtbl1Component', () => {
  let component: Hfdashtbl1Component;
  let fixture: ComponentFixture<Hfdashtbl1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hfdashtbl1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hfdashtbl1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
