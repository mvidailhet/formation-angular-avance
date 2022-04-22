import { Component, HostListener } from '@angular/core';
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  of,
  sampleTime,
  switchMap,
  tap,
} from 'rxjs';
import { SCREEN_SIZE_BREAKPOINTS } from './screen-size-breakpoints.enum';

@Component({
  selector: 'app-screen-resize',
  templateUrl: './screen-resize.component.html',
  styleUrls: ['./screen-resize.component.scss'],
})
export class ScreenResizeComponent {
  private _onResize$ = new BehaviorSubject<number>(window.innerWidth);
  private _currentScreenWidth: number | undefined;
  private _currentBreakpoint: SCREEN_SIZE_BREAKPOINTS | undefined;
  screenSizeBreakpointChanged$: Observable<SCREEN_SIZE_BREAKPOINTS> | undefined;
  currentScreenSizeBreakpointKey: string | undefined;

  @HostListener('window:resize') windowResize() {
    this._onResize$.next(window.innerWidth);
  }

  constructor() {
    this.createObservables();
    this.subscribeToObservable();
  }

  createObservables() {
    const onResize$ = this._onResize$.pipe(
      tap(() => console.log('resized')),
      sampleTime(500)
    );

    this.screenSizeBreakpointChanged$ = onResize$.pipe(
      switchMap((screenWidth: number) => {
        const newBreakpoint = this.detectScreenSizeBreakpoint(screenWidth);
        if (!newBreakpoint) return EMPTY;
        return of(newBreakpoint);
      })
    );
  }

  subscribeToObservable() {
    if (!this.screenSizeBreakpointChanged$) return;

    this.screenSizeBreakpointChanged$.subscribe(
      (breakpoint: SCREEN_SIZE_BREAKPOINTS) => {
        this.currentScreenSizeBreakpointKey =
          SCREEN_SIZE_BREAKPOINTS[breakpoint];
        console.log('new breakpoint !', this.currentScreenSizeBreakpointKey);
      }
    );
  }

  ngOnDestroy(): void {
    this._onResize$.complete();
  }

  private detectScreenSizeBreakpoint(
    screenWidth: number
  ): SCREEN_SIZE_BREAKPOINTS | undefined {
    if (screenWidth !== this._currentScreenWidth) {
      const newBreakpoint = this.getScreenSizeBreakpoint(screenWidth);
      if (newBreakpoint !== this._currentBreakpoint) {
        this._currentBreakpoint = newBreakpoint;
        return newBreakpoint;
      }
      this._currentBreakpoint = newBreakpoint;
    }
    this._currentScreenWidth = screenWidth;
    return;
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
