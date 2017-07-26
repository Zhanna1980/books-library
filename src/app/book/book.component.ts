import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book';
import { EditModalService } from '../edit-modal.service';
import { PromptService } from '../prompt.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Input() index: number;

  constructor(private editModalService: EditModalService, private promptService: PromptService) { }

  ngOnInit() {
  }

  onEditBookClick() {
    this.editModalService.showModal(this.index);;
  }

  onBookDeleteClick() {
    this.promptService.showPrompt(this.index);
  }

}
