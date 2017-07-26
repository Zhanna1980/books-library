import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PromptService {
      onChangePromptData: Subject<number | undefined>;

      constructor() { 
        this.onChangePromptData = new Subject();
      }

      showPrompt(indexToDelete: number) {
        this.onChangePromptData.next(indexToDelete);
      }
}
