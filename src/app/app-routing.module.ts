import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './pages/directives/directives.component';
import { HomeComponent } from './pages/home/home.component';
import { MemoizeComponent } from './pages/memoize/memoize.component';
import { ObservablesComponent } from './pages/observables/observables.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
