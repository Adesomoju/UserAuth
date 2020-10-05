import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersFeedbackComponent } from './users-feedback.component';

describe('UsersFeedbackComponent', () => {
  let component: UsersFeedbackComponent;
  let fixture: ComponentFixture<UsersFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
