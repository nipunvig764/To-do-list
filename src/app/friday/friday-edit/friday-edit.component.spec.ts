import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FridayEditComponent } from './friday-edit.component';

describe('FridayEditComponent', () => {
  let component: FridayEditComponent;
  let fixture: ComponentFixture<FridayEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FridayEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FridayEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
