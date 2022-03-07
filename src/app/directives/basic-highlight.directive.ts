import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  @Input() defaultColor = 'grey';
  @Input() highlightColor = 'green';
  @HostBinding('style.backgroundColor') backgroundColor!: string;


  constructor() {}

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.backgroundColor = this.defaultColor;
  }
}
