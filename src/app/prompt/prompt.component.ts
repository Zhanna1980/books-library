import { Component, OnInit, OnDestroy } from '@angular/core';
import {PromptService} from '../prompt.service';
import { BooksService } from '../books.service';
import { Book } from '../book';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent implements OnInit, OnDestroy {
  onChangePromptDataSubscription: Subscription;
  book: Book;
  indexInLibrary: number;

  constructor(private booksService: BooksService, private promptService: PromptService) { }

  ngOnInit() {
    this.onChangePromptDataSubscription = this.promptService.onChangePromptData.subscribe((indexInLibrary) => {
      if (indexInLibrary != undefined) {
        this.indexInLibrary = indexInLibrary;
        this.book = this.booksService.getBookByIndex(this.indexInLibrary);
      }
    });
  }

  ngOnDestroy() {
    if (this.onChangePromptDataSubscription) {
      this.onChangePromptDataSubscription.unsubscribe();
    }
  }
  
  deleteBook() {
    this.booksService.deleteBook(this.indexInLibrary);
  }

}
