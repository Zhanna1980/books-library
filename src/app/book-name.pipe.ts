import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookName'
})
export class BookNamePipe implements PipeTransform {

  transform(value: any): any {
    if (!value) {
      return '';
    }

    const titleArray = [];
    let firstLetterOfWord = true;
    for (let i = 0; i < value.length; i++) {
      const char = value[i];
      if (this.isEnglishLetter(char)) {
        if (firstLetterOfWord) {
          titleArray.push(char.toUpperCase());
          firstLetterOfWord = false;
        } else {
          titleArray.push(char.toLowerCase());
        }
      } else if (this.isSpace(char) && !firstLetterOfWord) {
        titleArray.push(char);
        firstLetterOfWord = true;
      }
    }
    return titleArray.join('');
  }

  isEnglishLetter(char: string): boolean {
    const charCode = char.charCodeAt(0);
    return (charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123);
  }

  isSpace(char: string): boolean {
    return char === ' ';
  }

}
