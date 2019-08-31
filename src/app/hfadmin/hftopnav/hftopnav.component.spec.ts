import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HftopnavComponent } from './hftopnav.component';

describe('HftopnavComponent', () => {
  let component: HftopnavComponent;
  let fixture: ComponentFixture<HftopnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HftopnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HftopnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
