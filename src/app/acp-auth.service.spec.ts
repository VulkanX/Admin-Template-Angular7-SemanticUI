/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AcpAuthService } from './acp-auth.service';

describe('Service: AcpAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcpAuthService]
    });
  });

  it('should ...', inject([AcpAuthService], (service: AcpAuthService) => {
    expect(service).toBeTruthy();
  }));
});
