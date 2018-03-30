import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/facts',
    pathMatch: 'full'
  },
  {
    path: 'facts',
    loadChildren: 'app/areas/facts/facts.module#FactsModule'
  },
  {
    path: 'learningSessions',
    loadChildren: 'app/areas/learning-sessions/learning-sessions.module#LearningSessionsModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [
    RouterModule
  ],
  providers: []
})

export class AppRoutingModule {
}
