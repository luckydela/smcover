import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagertblComponent } from './managertbl.component';

describe('ManagertblComponent', () => {
  let component: ManagertblComponent;
  let fixture: ComponentFixture<ManagertblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagertblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagertblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
