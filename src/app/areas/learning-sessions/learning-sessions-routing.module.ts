import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as components from './components';
import * as resolvers from './resolvers';

const routes: Routes = [
  {
    path: '',
    component: components.LearningSessionsComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: components.LearningSessionsOverviewComponent },
      {
        path: ':learningSessionId',
        component: components.LearningSessionEditComponent,
        resolve: { learningSession: resolvers.LearningSessionEditResolver }
      },
      {
        path: ':learningSessionId/run',
        component: components.LearningSessionRunComponent,
        resolve: { facts: resolvers.LearningSessionRunResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningSessionsRoutingModule { }
