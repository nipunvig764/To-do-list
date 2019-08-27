import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaturdayEditComponent } from './saturday-edit.component';

describe('SaturdayEditComponent', () => {
  let component: SaturdayEditComponent;
  let fixture: ComponentFixture<SaturdayEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaturdayEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaturdayEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
