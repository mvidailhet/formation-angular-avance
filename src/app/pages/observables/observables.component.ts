import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
})
export class ObservablesComponent {
  data$ = new Observable((observer) => {
    observer.next(1);
    observer.next(2);
    observer.complete();
  });

  constructor() {
    this.data$.subscribe({
      next: (value) => console.log(value),
      error: (err) => console.error(err),
      complete: () => console.log('DONE!'),
    });
  }
}
