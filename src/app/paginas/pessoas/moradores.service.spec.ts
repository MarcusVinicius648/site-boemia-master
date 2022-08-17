import { TestBed } from '@angular/core/testing';

import { MoradoresService } from './moradores.service';

describe('MoradoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoradoresService = TestBed.get(MoradoresService);
    expect(service).toBeTruthy();
  });
});
