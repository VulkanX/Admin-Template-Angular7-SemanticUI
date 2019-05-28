/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AcpUserService } from './acp-user.service';

describe('Service: AcpUser', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcpUserService]
    });
  });

  it('should ...', inject([AcpUserService], (service: AcpUserService) => {
    expect(service).toBeTruthy();
  }));
});
