import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SundayEditComponent } from './sunday-edit.component';

describe('SundayEditComponent', () => {
  let component: SundayEditComponent;
  let fixture: ComponentFixture<SundayEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SundayEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SundayEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
