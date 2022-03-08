import { Component } from '@angular/core';

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
