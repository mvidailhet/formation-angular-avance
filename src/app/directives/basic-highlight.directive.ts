import { Directive, ElementRef, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  constructor() {
    this.backgroundColor = 'green';
  }

}
