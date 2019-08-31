import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotetblComponent } from './quotetbl.component';

describe('QuotetblComponent', () => {
  let component: QuotetblComponent;
  let fixture: ComponentFixture<QuotetblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotetblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotetblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
