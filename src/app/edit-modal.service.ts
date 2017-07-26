import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class EditModalService {
    onChangeModalData: Subject<number | undefined>;
    isModalActive = false;

    constructor() { 
      this.onChangeModalData = new Subject();
    }

    showModal(editBookModalData?: number) {
      this.isModalActive = true;
      this.onChangeModalData.next(editBookModalData);
    }

    hideModal() {
      this.isModalActive = false;
    }
}
