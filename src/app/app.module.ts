import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DirectivesComponent } from './pages/directives/directives.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { MemoizeComponent } from './pages/memoize/memoize.component';
import { SliderViewChildComponent } from './pages/slider-view-child/slider-view-child.component';
import { ObservablesComponent } from './pages/observables/observables.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ScreenResizeComponent } from './pages/screen-resize/screen-resize.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectivesComponent,
    BasicHighlightDirective,
    MemoizeComponent,
    SliderViewChildComponent,
    ObservablesComponent,
    PokemonsComponent,
    ScreenResizeComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
