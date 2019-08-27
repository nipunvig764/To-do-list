import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThursdayEditComponent } from './thursday-edit.component';

describe('ThursdayEditComponent', () => {
  let component: ThursdayEditComponent;
  let fixture: ComponentFixture<ThursdayEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThursdayEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThursdayEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
