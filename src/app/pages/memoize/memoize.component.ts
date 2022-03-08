import { Component } from '@angular/core';

import * as memoizee from 'memoizee';

export function Memoize() {
  return function(target: any, key: string, descriptor: any) {
    const oldFunction = descriptor.value;
    const newFunction = memoizee(oldFunction);
    descriptor.value = function () {
      return newFunction.apply(this, arguments);
    };
  };
};

@Component({
  selector: 'app-memoize',
  templateUrl: './memoize.component.html',
  styleUrls: ['./memoize.component.scss'],
})
export class MemoizeComponent {
  framework = 'Angular';
  count = 0;

  @Memoize()
  getTitle(framework: string) {
    console.log('getTitle is called');
    return `I love ${framework.toUpperCase()}`;
  }

  changeFramework() {
    if (this.framework === 'Angular') {
      this.framework = 'React';
    } else {
      this.framework = 'Angular';
    }
  }

  counterAdd() {
    this.count += 1;
  }
}
