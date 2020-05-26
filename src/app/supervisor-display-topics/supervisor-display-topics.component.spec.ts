import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorDisplayTopicsComponent } from './supervisor-display-topics.component';

describe('SupervisorDisplayTopicsComponent', () => {
  let component: SupervisorDisplayTopicsComponent;
  let fixture: ComponentFixture<SupervisorDisplayTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorDisplayTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorDisplayTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
