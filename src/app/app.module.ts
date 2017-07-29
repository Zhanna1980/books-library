import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BooksService } from './books.service';
import { ModalService } from './modal.service';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { PromptComponent } from './prompt/prompt.component';
import { BookNamePipe } from './book-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    EditModalComponent,
    PromptComponent,
    BookNamePipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [BooksService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
