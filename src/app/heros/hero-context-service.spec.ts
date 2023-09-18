import { TestBed } from '@angular/core/testing';

import { HeroContextService } from './hero-context.service';

describe('HeroContextService', () => {
  let service: HeroContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
