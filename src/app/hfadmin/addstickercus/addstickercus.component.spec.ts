import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstickercusComponent } from './addstickercus.component';

describe('AddstickercusComponent', () => {
  let component: AddstickercusComponent;
  let fixture: ComponentFixture<AddstickercusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstickercusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstickercusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
