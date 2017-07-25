import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book';
import { EditModalService } from '../edit-modal.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Input() index: number;

  constructor(private editModalService: EditModalService) { }

  ngOnInit() {
  }

  onEditBookClick() {
    this.editModalService.showModal({indexInLibrary: this.index, book: this.book});;
  }

  onBookDeleteClick() {
    
  }

}
