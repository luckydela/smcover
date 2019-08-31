import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranschartComponent } from './transchart.component';

describe('TranschartComponent', () => {
  let component: TranschartComponent;
  let fixture: ComponentFixture<TranschartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranschartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranschartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
