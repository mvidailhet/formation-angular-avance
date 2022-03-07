import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective {
  defaultColor = 'grey';
  highlightColor = 'green';
  @HostBinding('style.backgroundColor') backgroundColor: string;


  constructor() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.backgroundColor = this.defaultColor;
  }
}
