import { TestBed } from '@angular/core/testing';

import { Report001Service } from './report001.service';

describe('Report001Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Report001Service = TestBed.get(Report001Service);
    expect(service).toBeTruthy();
  });
});
