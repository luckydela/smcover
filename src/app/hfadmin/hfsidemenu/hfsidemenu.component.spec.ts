import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HfsidemenuComponent } from './hfsidemenu.component';

describe('HfsidemenuComponent', () => {
  let component: HfsidemenuComponent;
  let fixture: ComponentFixture<HfsidemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HfsidemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HfsidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
