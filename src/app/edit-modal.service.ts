import { Injectable } from '@angular/core';
import {EditBookModalData} from './edit-book-modal-data';

@Injectable()
export class EditModalService {
    isModalActive = false;
    modalData: EditBookModalData;

    constructor() { }

    showModal(editBookModalData: EditBookModalData) {
      this.isModalActive = true;
      this.modalData = editBookModalData;
    }

    hideModal() {
      this.isModalActive = false;
      this.modalData = null;
    }
}
