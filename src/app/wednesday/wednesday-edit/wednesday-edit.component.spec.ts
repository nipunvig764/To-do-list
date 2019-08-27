import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WednesdayEditComponent } from './wednesday-edit.component';

describe('WednesdayEditComponent', () => {
  let component: WednesdayEditComponent;
  let fixture: ComponentFixture<WednesdayEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WednesdayEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WednesdayEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
