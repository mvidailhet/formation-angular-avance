import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './pages/directives/directives.component';
import { HomeComponent } from './pages/home/home.component';
import { MemoizeComponent } from './pages/memoize/memoize.component';
import { ObservablesComponent } from './pages/observables/observables.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { ScreenResizeComponent } from './pages/screen-resize/screen-resize.component';
import { SliderViewChildComponent } from './pages/slider-view-child/slider-view-child.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'directives',
    component: DirectivesComponent,
  },
  {
    path: 'slider-view-child',
    component: SliderViewChildComponent,
  },
  {
    path: 'memoize',
    component: MemoizeComponent,
  },
  {
    path: 'observables',
    component: ObservablesComponent,
  },
  {
    path: 'pokemons',
    component: PokemonsComponent,
  },
  {
    path: 'screen-resize',
    component: ScreenResizeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
