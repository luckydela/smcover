import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hfdashtbl2Component } from './hfdashtbl2.component';

describe('Hfdashtbl2Component', () => {
  let component: Hfdashtbl2Component;
  let fixture: ComponentFixture<Hfdashtbl2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hfdashtbl2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hfdashtbl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
