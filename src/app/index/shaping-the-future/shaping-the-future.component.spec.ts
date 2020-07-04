import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapingTheFutureComponent } from './shaping-the-future.component';

describe('ShapingTheFutureComponent', () => {
  let component: ShapingTheFutureComponent;
  let fixture: ComponentFixture<ShapingTheFutureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapingTheFutureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapingTheFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
