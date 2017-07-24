import { BooksLibraryPage } from './app.po';

describe('books-library App', () => {
  let page: BooksLibraryPage;

  beforeEach(() => {
    page = new BooksLibraryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
