import { TestBed, inject } from '@angular/core/testing';

import { BullshitWordService } from './bullshit-word.service';

describe('BullshitWordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BullshitWordService]
    });
  });

  it('should be created', inject([BullshitWordService], (service: BullshitWordService) => {
    expect(service).toBeTruthy();
  }));
});
