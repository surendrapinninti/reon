import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeArerReonpshereComponent } from './we-arer-reonpshere.component';

describe('WeArerReonpshereComponent', () => {
  let component: WeArerReonpshereComponent;
  let fixture: ComponentFixture<WeArerReonpshereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeArerReonpshereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeArerReonpshereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
