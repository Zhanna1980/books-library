import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class EditModalService {
  onChangeModalData: Subject<number | undefined>;

  constructor() {
    this.onChangeModalData = new Subject();
  }

  showModal(editBookModalData?: number) {
    this.onChangeModalData.next(editBookModalData);
  }
}
