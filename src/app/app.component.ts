import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  library = this.booksService.library;
  showModal=false;

  constructor(private booksService: BooksService) {}

  ngOnInit () {
  
  }
  
}
