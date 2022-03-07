import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    //this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }
}
