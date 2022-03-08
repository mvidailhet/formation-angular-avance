import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DirectivesComponent } from './pages/directives/directives.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { MemoizeComponent } from './pages/memoize/memoize.component';
import { SliderViewChildComponent } from './pages/slider-view-child/slider-view-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectivesComponent,
    BasicHighlightDirective,
    MemoizeComponent,
    SliderViewChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
