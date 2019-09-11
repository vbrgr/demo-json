import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDynamicFormComponent } from './user-dynamic-form.component';

describe('UserDynamicFormComponent', () => {
  let component: UserDynamicFormComponent;
  let fixture: ComponentFixture<UserDynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDynamicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
