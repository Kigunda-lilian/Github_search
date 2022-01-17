import { TestBed } from '@angular/core/testing';

import { FindDataService } from './find-data.service';

describe('FindDataService', () => {
  let service: FindDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
