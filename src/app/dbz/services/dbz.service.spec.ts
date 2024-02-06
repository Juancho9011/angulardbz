import { TestBed } from '@angular/core/testing';

import { DBZService } from './dbz.service';

describe('DBZService', () => {
  let service: DBZService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DBZService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
