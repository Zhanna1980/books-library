import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EditModalService } from '../edit-modal.service';
import { BooksService } from '../books.service';
import { Book } from '../book';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit, OnDestroy {
  onChangeModalDataSubscription: Subscription;
  bookForm: FormGroup;
  title: String;
  book: Book;
  indexInLibrary: number;

  constructor(private editModalService: EditModalService, private booksService: BooksService) { }

  ngOnInit() {
    this.onChangeModalDataSubscription = this.editModalService.onChangeModalData.subscribe((modalData) => {
      if (modalData !== undefined) {
        this.indexInLibrary = modalData;
        this.book = this.booksService.getBookByIndex(this.indexInLibrary);
        this.title = 'Editing the book';
      } else {
        this.book = undefined;
        this.indexInLibrary = undefined;
        this.title = 'Add a new book';
      }
      this.patchValuesToForm();
    });
    this.bookForm = new FormGroup({
      'author': new FormControl(null, [Validators.required]),
      'title': new FormControl(null, [Validators.required, this.sameBookName.bind(this)]),
      'date': new FormControl(null, [Validators.required, this.dateValidation])
    });
  }

  patchValuesToForm() {
    this.bookForm.reset();
    this.bookForm.patchValue({
      'author': this.indexInLibrary !== undefined ? this.book.author : '',
      'title': this.indexInLibrary !== undefined ? this.book.title : '',
      'date': this.indexInLibrary !== undefined ? this.book.date : ''
    });
  }

  ngOnDestroy() {
    if (this.onChangeModalDataSubscription) {
      this.onChangeModalDataSubscription.unsubscribe();
    }
  }

  saveChanges() {
    this.booksService.addEditBook(this.bookForm.value, this.indexInLibrary);
  }

  sameBookName(control: FormControl): { [s: string]: boolean } {
    if (this.booksService.titleAlreadyExists(control.value, this.indexInLibrary)) {
      return { 'sameBookName': true };
    }
    return null;
  }

  dateValidation(control: FormControl): { [s: string]: boolean } {
    if (control.value === undefined) {
      return null;
    }
    if (control.value > new Date().getFullYear() || control.value < 0) {
      return { 'unvalidYear': true };
    }
    return null;
  }

  controlHasError(formControlName: string, errorName: string) {
    return this.bookForm.get(formControlName).errors[errorName];
  }

  isControlUnvalid(formControlName: string) {
    const control = this.bookForm.get(formControlName);
    return !control.valid && (control.touched || control.dirty);
  }


}
