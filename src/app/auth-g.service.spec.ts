import { TestBed } from '@angular/core/testing';

import { AuthGService } from './auth-g.service';

describe('AuthGService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGService = TestBed.get(AuthGService);
    expect(service).toBeTruthy();
  });
});
