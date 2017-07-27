import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import { Book } from './book';

@Injectable()
export class BooksService {
  library: Book[];
  
  constructor(private http: Http) { 
    this.getBooks();
  }

  getBooks(): void {
    this.http.get("./books.json")
      .map((data: Response) => { return data.json(); })
      .catch((err: Response) => {
        return Observable.throw("Failed to fetch data.");
      }).subscribe(data => {
        this.library = data as Book[];
      });
  }

  getBookByIndex(indexInLibrary: number): Book {
    return this.library[indexInLibrary];
  }

  editBook(indexInLibrary: number, editedAuthor: string, editedTitle: string, editedDate: string): void {
    this.library[indexInLibrary].author = editedAuthor;
    this.library[indexInLibrary].title = editedTitle;
    this.library[indexInLibrary].date = editedDate; 
  }

  deleteBook(indexInLibrary: number): void {
    this.library.splice(indexInLibrary, 1);
  }

  addNewBook(author: string, title: string, date: string):void {
    this.library.push({
      "author": author,
      "title": title,
      "date": date
    });
  }

  titleAlreadyExists(title: string): boolean {
    for (var i = 0; i < this.library.length; i++) {
      if (this.library[i].title === title) {
        return true;
      }
    }
    return false;
  }

}
