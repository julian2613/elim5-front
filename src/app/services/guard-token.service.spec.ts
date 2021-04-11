import { TestBed } from '@angular/core/testing';

import { GuardTokenService } from './guard-token.service';

describe('GuardTokenService', () => {
  let service: GuardTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
