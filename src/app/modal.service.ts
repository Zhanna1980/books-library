import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ModalService {
  onChangeAddEditModalData: Subject<number | undefined>;
  onChangePromptData: Subject<number | undefined>;

  constructor() {
    this.onChangeAddEditModalData = new Subject();
    this.onChangePromptData = new Subject();
  }

  showAddEditModal(editBookModalData?: number) {
    this.onChangeAddEditModalData.next(editBookModalData);
  }

  showDeletePrompt(indexToDelete: number) {
    this.onChangePromptData.next(indexToDelete);
  }
}
