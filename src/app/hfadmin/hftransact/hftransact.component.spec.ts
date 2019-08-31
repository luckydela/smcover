import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HftransactComponent } from './hftransact.component';

describe('HftransactComponent', () => {
  let component: HftransactComponent;
  let fixture: ComponentFixture<HftransactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HftransactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HftransactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
