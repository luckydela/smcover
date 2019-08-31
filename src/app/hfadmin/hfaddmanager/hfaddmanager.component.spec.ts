import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HfaddmanagerComponent } from './hfaddmanager.component';

describe('HfaddmanagerComponent', () => {
  let component: HfaddmanagerComponent;
  let fixture: ComponentFixture<HfaddmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HfaddmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HfaddmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
