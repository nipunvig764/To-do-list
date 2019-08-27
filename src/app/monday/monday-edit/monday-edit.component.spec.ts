import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MondayEditComponent } from './monday-edit.component';

describe('MondayEditComponent', () => {
  let component: MondayEditComponent;
  let fixture: ComponentFixture<MondayEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MondayEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MondayEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
