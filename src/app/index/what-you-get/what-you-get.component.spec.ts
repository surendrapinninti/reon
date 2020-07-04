import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatYouGetComponent } from './what-you-get.component';

describe('WhatYouGetComponent', () => {
  let component: WhatYouGetComponent;
  let fixture: ComponentFixture<WhatYouGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatYouGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatYouGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
