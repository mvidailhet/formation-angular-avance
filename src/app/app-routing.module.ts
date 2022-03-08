import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './pages/directives/directives.component';
import { HomeComponent } from './pages/home/home.component';
import { MemoizeComponent } from './pages/memoize/memoize.component';

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
    path: 'memoize',
    component: MemoizeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
