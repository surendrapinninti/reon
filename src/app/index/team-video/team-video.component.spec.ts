import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamVideoComponent } from './team-video.component';

describe('TeamVideoComponent', () => {
  let component: TeamVideoComponent;
  let fixture: ComponentFixture<TeamVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
