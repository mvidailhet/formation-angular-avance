import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  private defaultHighlightColor = 'green';
  @Input() defaultColor = 'grey';
  @Input('appBasicHighlight') highlightColor!: string;
  @HostBinding('style.backgroundColor') backgroundColor!: string;


  constructor() {}

  ngOnInit(): void {
    if (this.highlightColor === '') this.highlightColor = this.defaultHighlightColor;
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.backgroundColor = this.defaultColor;
  }
}
