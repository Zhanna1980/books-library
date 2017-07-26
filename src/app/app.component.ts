import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import { Book } from './book';
import {EditModalService} from './edit-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  showModal=false;

  constructor(private booksService: BooksService, private editModalService: EditModalService) {}

  ngOnInit () {
  
  }

  get library() {
    return this.booksService.library;
  }

  onAddBookClick() {
    this.editModalService.showModal();
  }
}
