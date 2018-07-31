import { TestBed, inject } from '@angular/core/testing';

import { DummyServiceService } from './dummy-service.service';

describe('DummyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DummyServiceService]
    });
  });

  it('should be created', inject([DummyServiceService], (service: DummyServiceService) => {
    expect(service).toBeTruthy();
  }));
});
