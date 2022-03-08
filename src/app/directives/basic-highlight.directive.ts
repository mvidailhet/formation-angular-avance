import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { CoerceBoolean } from '../decorators/coerce-boolean';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  private defaultHighlightColor = 'green';
  @Input() defaultColor = 'grey';
  @Input('appBasicHighlight') highlightColor!: string;
  @HostBinding('style.backgroundColor') backgroundColor!: string;

  @Input()
  @CoerceBoolean()
  disabled: string | boolean = false;

  constructor() {}

  ngOnInit(): void {
    if (this.highlightColor === '')
      this.highlightColor = this.defaultHighlightColor;
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter() {
    if (this.disabled) return;
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    if (this.disabled) return;
    this.backgroundColor = this.defaultColor;
  }
}
