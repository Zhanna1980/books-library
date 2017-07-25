import { TestBed, inject } from '@angular/core/testing';

import { PromptService } from './prompt.service';

describe('PromptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PromptService]
    });
  });

  it('should ...', inject([PromptService], (service: PromptService) => {
    expect(service).toBeTruthy();
  }));
});
