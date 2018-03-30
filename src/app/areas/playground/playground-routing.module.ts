import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as comp from './domain/components';

const routes: Routes = [
  {
    path: '',
    component: comp.PlaygroundComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: comp.PlaygroundOverviewComponent },
      { path: 'cc', component: comp.PlaygroundCollapsibleCardComponent },
      { path: 'select', component: comp.PlaygroundSelectComponent },
      { path: 'enum-select', component: comp.PlaygroundEnumSelectComponent },
      { path: 'primeng-editor', component: comp.PlaygroundPrimengEditorComponent },
      { path: 'rx-validation', component: comp.PlaygroundRxFormComponent },
      { path: 'rx-fc', component: comp.PlaygroundRxFormControlWithValidationComponent },
      { path: 'error', component: comp.PlaygroundErrorComponent },
      { path: 'server-get', component: comp.PlaygroundServerGetComponent },
      { path: 'server-post', component: comp.PlaygroundServerPostComponent },
      { path: 'comp-com-parent-child', component: comp.PgOrgMainComponent },
      { path: 'reflect', component: comp.PlaygroundReflectComponent },
      { path: 'grid-builder', component: comp.PlaygroundGridBuilderComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaygroundRoutingModule { }


