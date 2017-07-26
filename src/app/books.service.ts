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

  getBooks() {
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

  }

  deleteBook(indexInLibrary: number) {
    this.library.splice(indexInLibrary, 1);
    console.log(this.library);
  }

  addNewBook() {
    
  }
}
