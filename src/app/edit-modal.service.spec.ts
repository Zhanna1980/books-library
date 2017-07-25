import { TestBed, inject } from '@angular/core/testing';

import { EditModalService } from './edit-modal.service';

describe('EditModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditModalService]
    });
  });

  it('should ...', inject([EditModalService], (service: EditModalService) => {
    expect(service).toBeTruthy();
  }));
});
