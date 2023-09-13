import {TestBed} from '@angular/core/testing';

import {HerosService} from './heros.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('HerosService', () => {
  let service: HerosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HerosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
