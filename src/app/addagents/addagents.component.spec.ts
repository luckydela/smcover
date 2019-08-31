import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddagentsComponent } from './addagents.component';

describe('AddagentsComponent', () => {
  let component: AddagentsComponent;
  let fixture: ComponentFixture<AddagentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddagentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddagentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
