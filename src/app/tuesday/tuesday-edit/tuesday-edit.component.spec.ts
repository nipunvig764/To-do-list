import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuesdayEditComponent } from './tuesday-edit.component';

describe('TuesdayEditComponent', () => {
  let component: TuesdayEditComponent;
  let fixture: ComponentFixture<TuesdayEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuesdayEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuesdayEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
