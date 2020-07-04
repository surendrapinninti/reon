import { TestBed } from '@angular/core/testing';

import { ScssService } from './scss.service';

describe('ScssService', () => {
  let service: ScssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
