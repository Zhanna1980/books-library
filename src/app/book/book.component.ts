import { Component, Input } from '@angular/core';
import { Book } from '../book';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book: Book;
  @Input() index: number;

  constructor(private modalService: ModalService) { }

  onEditBookClick() {
    this.modalService.showAddEditModal(this.index);
  }

  onBookDeleteClick() {
    this.modalService.showDeletePrompt(this.index);
  }
}
