import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThesisTopicsComponent } from './thesis-topics.component';

describe('ThesisTopicsComponent', () => {
  let component: ThesisTopicsComponent;
  let fixture: ComponentFixture<ThesisTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThesisTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThesisTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
