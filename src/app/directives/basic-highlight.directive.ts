import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

export function coerceBooleanProperty(value: any): boolean {
  return value != null && `${value}` !== 'false';
}

export function CoerceBoolean() {
  return (target: any, key: string): void => {
    const getter = function () {
      // @ts-ignore
      return this['_' + key];
    };

    const setter = function (next: any) {
      // @ts-ignore
      this['_' + key] = coerceBooleanProperty(next);
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

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
