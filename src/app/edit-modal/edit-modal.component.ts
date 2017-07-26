import { Component, OnInit} from '@angular/core';
import {EditModalService} from '../edit-modal.service';
import { Book } from '../book';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {
  onChangeModalDataSubscription: Subscription;
  title: String;
  book: Book;
  indexInLibrary: number;

  constructor(private editModalService: EditModalService) { }

  ngOnInit() {
    this.onChangeModalDataSubscription = this.editModalService.onChangeModalData.subscribe((modalData) => {
      if (modalData) {
        this.book = modalData.book;
        this.indexInLibrary = modalData.indexInLibrary;
        this.title = "Editing the book";
      } else {
        this.book = undefined;
        this.indexInLibrary = undefined;
        this.title = "Add a new book";
      }
    });
  }

  ngOnDestroy() {
      if (this.onChangeModalDataSubscription) {
        this.onChangeModalDataSubscription.unsubscribe();
      }
  }
  get isModalActive() {
    return this.editModalService.isModalActive;
  }

  hide() {
    this.editModalService.hideModal();
  }

  saveChanges() {

  }

}
