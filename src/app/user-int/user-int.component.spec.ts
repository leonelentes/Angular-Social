import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIntComponent } from './user-int.component';

describe('UserIntComponent', () => {
  let component: UserIntComponent;
  let fixture: ComponentFixture<UserIntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserIntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
