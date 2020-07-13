import { TestBed } from '@angular/core/testing';

import { ServernaukaService } from './servernauka.service';

describe('ServernaukaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServernaukaService = TestBed.get(ServernaukaService);
    expect(service).toBeTruthy();
  });
});
