import { Component, HostListener } from '@angular/core';
import { BehaviorSubject, sampleTime, Subject, tap } from 'rxjs';
import { SCREEN_SIZE_BREAKPOINTS } from './screen-size-breakpoints.enum';

@Component({
  selector: 'app-screen-resize',
  templateUrl: './screen-resize.component.html',
  styleUrls: ['./screen-resize.component.scss']
})
export class ScreenResizeComponent {
  private _currentScreenWidth: number | undefined;
  private _currentScreenSizeBreakpoint: SCREEN_SIZE_BREAKPOINTS | undefined;
  private _onResize$ = new BehaviorSubject(undefined);

  screenSizeBreakpointChanged$: Subject<SCREEN_SIZE_BREAKPOINTS> = new Subject();
  currentScreenSizeBreakpointKey: string | undefined;

  @HostListener('window:resize') windowResize() {
    this._onResize$.next(undefined);
  }

  constructor() {
    this.subscribeToScreenResize();

    this.screenSizeBreakpointChanged$.subscribe((newSizeBreakpoint: SCREEN_SIZE_BREAKPOINTS) => {
      this.currentScreenSizeBreakpointKey = SCREEN_SIZE_BREAKPOINTS[newSizeBreakpoint];
    });
  }

  private subscribeToScreenResize() {
    this._onResize$.pipe(
      tap(() => console.log('resized')),
      sampleTime(500),
      ).subscribe(() => {
      console.log('checking resize');
      this.detectScreenSizeBreakpoint();
    });
  }

  private detectScreenSizeBreakpoint() {
    const screenWidth = window.innerWidth;

    if (!this._currentScreenWidth || screenWidth !== this._currentScreenWidth) {
      const newScreenSizeBreakpoint = this.getScreenSizeBreakpoint(screenWidth);
      if (newScreenSizeBreakpoint !== this._currentScreenSizeBreakpoint) {
        this.screenSizeBreakpointChanged$.next(newScreenSizeBreakpoint);
      }
      this._currentScreenSizeBreakpoint = newScreenSizeBreakpoint;
      this._currentScreenWidth = screenWidth;
    }
  }

  private getScreenSizeBreakpoint(screensize: number): SCREEN_SIZE_BREAKPOINTS {
    if (screensize < SCREEN_SIZE_BREAKPOINTS.SM) {
      return SCREEN_SIZE_BREAKPOINTS.XS;
    }
    if (screensize < SCREEN_SIZE_BREAKPOINTS.MD) {
      return SCREEN_SIZE_BREAKPOINTS.SM;
    }
    if (screensize < SCREEN_SIZE_BREAKPOINTS.LG) {
      return SCREEN_SIZE_BREAKPOINTS.MD;
    }
    if (screensize < SCREEN_SIZE_BREAKPOINTS.XL) {
      return SCREEN_SIZE_BREAKPOINTS.LG;
    }
    return SCREEN_SIZE_BREAKPOINTS.XL;
  }

}
