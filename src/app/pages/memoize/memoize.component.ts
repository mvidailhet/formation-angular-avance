import { Component } from '@angular/core';

import * as memoizee from 'memoizee';

function add(a: number, b: number): number {
  console.log('add is called');
  return a + b;
}

const memoizedAdd = memoizee(add);

memoizedAdd(1, 2); // log "add is called"
memoizedAdd(1, 2); // cache hit, not logging
memoizedAdd(1, 3); // log "add is called"

@Component({
  selector: 'app-memoize',
  templateUrl: './memoize.component.html',
  styleUrls: ['./memoize.component.scss'],
})
export class MemoizeComponent {
  framework = 'Angular';
  count = 0;

  getTitle(framework: string): string {
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
