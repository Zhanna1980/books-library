import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from '../modal.service';
import { BooksService } from '../books.service';
import { Book } from '../book';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent implements OnInit, OnDestroy {
  onChangePromptDataSubscription: Subscription;
  book: Book;
  indexInLibrary: number;

  constructor(private booksService: BooksService, private modalService: ModalService) { }

  ngOnInit() {
    this.onChangePromptDataSubscription = this.modalService.onChangePromptData.subscribe((indexInLibrary) => {
      if (indexInLibrary !== undefined) {
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
