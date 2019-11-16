/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NosqlService } from '../nosql.service';

describe('Service: Nosql', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NosqlService]
    });
  });

  it('should ...', inject([NosqlService], (service: NosqlService) => {
    expect(service).toBeTruthy();
  }));
});
