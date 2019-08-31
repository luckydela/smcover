import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstickeragentComponent } from './addstickeragent.component';

describe('AddstickeragentComponent', () => {
  let component: AddstickeragentComponent;
  let fixture: ComponentFixture<AddstickeragentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstickeragentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstickeragentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
