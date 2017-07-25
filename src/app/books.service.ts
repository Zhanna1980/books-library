import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class BooksService {
  _library = this.getBooks();
  

  constructor(private http: Http) { }

  getBooks() {
    return this.http.get("./books.json")
      .map((data: Response) => { return data.json(); })
      .catch((err: Response) => {
        return Observable.throw("Failed to fetch data.");
      });
  }

  get library() {
    return this._library;
  }

  editBook() {

  }

  deleteBook() {

  }

  addNewBook() {
    
  }
}
