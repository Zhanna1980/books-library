import { Component } from '@angular/core';
import { BooksService } from './books.service';
import { Book } from './book';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showModal = false;

  constructor(private booksService: BooksService, private modalService: ModalService) { }

  get library() {
    return this.booksService.library;
  }

  onAddBookClick() {
    this.modalService.showAddEditModal();
  }
}
