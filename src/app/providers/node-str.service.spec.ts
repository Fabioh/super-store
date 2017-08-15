import { TestBed, inject } from '@angular/core/testing';

import { NodeStrService } from './node-str.service';

describe('NodeStrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NodeStrService]
    });
  });

  it('should be created', inject([NodeStrService], (service: NodeStrService) => {
    expect(service).toBeTruthy();
  }));
});
