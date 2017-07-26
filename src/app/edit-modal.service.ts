import { Injectable } from '@angular/core';
import {EditBookModalData} from './edit-book-modal-data';
import {Subject} from "rxjs/Subject";

@Injectable()
export class EditModalService {
    onChangeModalData: Subject<EditBookModalData | undefined>;
    isModalActive = false;

    constructor() { 
      this.onChangeModalData = new Subject();
    }

    showModal(editBookModalData?: EditBookModalData) {
      this.isModalActive = true;
      this.onChangeModalData.next(editBookModalData);
    }

    hideModal() {
      this.isModalActive = false;
    }
}
