import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorcodeComponent } from './colorcode.component';

describe('ColorcodeComponent', () => {
  let component: ColorcodeComponent;
  let fixture: ComponentFixture<ColorcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
