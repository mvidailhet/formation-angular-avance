import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  private defaultHighlightColor = 'green';
  @Input() defaultColor = 'grey';
  @Input('appBasicHighlight') highlightColor!: string;
  @HostBinding('style.backgroundColor') backgroundColor!: string;

  private _disabled: boolean = false;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(disabled: any) {
    this._disabled = this.coerceBooleanProperty(disabled);
  }

  constructor() {}

  ngOnInit(): void {
    if (this.highlightColor === '')
      this.highlightColor = this.defaultHighlightColor;
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter() {
    if (this._disabled) return;
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    if (this._disabled) return;
    this.backgroundColor = this.defaultColor;
  }

  coerceBooleanProperty = (value: any): boolean => {
    return value != null && `${value}` !== 'false';
  };
}
