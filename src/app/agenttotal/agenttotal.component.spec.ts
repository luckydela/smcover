import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenttotalComponent } from './agenttotal.component';

describe('AgenttotalComponent', () => {
  let component: AgenttotalComponent;
  let fixture: ComponentFixture<AgenttotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenttotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenttotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
