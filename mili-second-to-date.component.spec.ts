import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiliSecondToDateComponent } from './mili-second-to-date.component';

describe('MiliSecondToDateComponent', () => {
  let component: MiliSecondToDateComponent;
  let fixture: ComponentFixture<MiliSecondToDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiliSecondToDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiliSecondToDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
