import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComeBuildComponent } from './come-build.component';

describe('ComeBuildComponent', () => {
  let component: ComeBuildComponent;
  let fixture: ComponentFixture<ComeBuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComeBuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComeBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
