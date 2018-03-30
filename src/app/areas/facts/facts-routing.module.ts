import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as comp from './components';
import * as res from './resolvers';

const routes: Routes = [
  {
    path: '',
    component: comp.FactsComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: comp.FactsOverviewComponent },
      {
        path: ':factId', component: comp.FactEditComponent, resolve:
          { fact: res.FactEditResolver }
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FactsRoutingModule { }


