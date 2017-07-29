import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Book } from './book';

@Injectable()
export class BooksService {
  library: Book[] = [];

  constructor(private http: Http) {
    this.getBooks();
  }

  getBooks(): void {
    this.http.get('./books.json')
      .map((data: Response) => { return data.json(); })
      .catch((err: Response) => {
        return Observable.throw('Failed to fetch data.');
      }).subscribe(data => {
        this.library = data as Book[];
      });
  }

  getBookByIndex(indexInLibrary: number): Book {
    return this.library[indexInLibrary];
  }

  addEditBook(book: Book, indexInLibrary?: number): void {
    if (indexInLibrary >= 0 && indexInLibrary < this.library.length) {
      this.library[indexInLibrary] = book;
    } else {
      this.library.unshift(book);
    }
  }

  deleteBook(indexInLibrary: number): void {
    this.library.splice(indexInLibrary, 1);
  }

  titleAlreadyExists(newTitle: string, ignoreIndex?: number): boolean {
    if (!newTitle) {
      return false;
    }

    newTitle = newTitle.toLowerCase();
    return this.library.reduce((found, value, currentIndex) => {
      return found || (ignoreIndex !== currentIndex && value.title.toLowerCase() === newTitle);
    }, false);
  }

}
