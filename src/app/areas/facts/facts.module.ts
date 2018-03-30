import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AgGridModule } from 'ag-grid-angular/main';
import * as prime from 'primeng/primeng';

import { RxFormsModule } from 'app/infrastructure/shared-features/rx-forms';
import { CollapsibleCardModule } from 'app/infrastructure/widgets/collapsible-card';

import { SharedModule } from 'app/shared';

import * as components from './components';
import * as appServices from './app-services';
import { FactsRoutingModule } from './facts-routing.module';
import * as resolvers from './resolvers';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FactsRoutingModule,
    CollapsibleCardModule,
    prime.EditorModule,
    prime.SharedModule,
    RxFormsModule,
    AgGridModule.withComponents([
    ])
  ],
  declarations: [
    components.FactsComponent,
    components.FactsOverviewComponent,
    components.FactEditComponent
  ],
  providers: [
    appServices.FactsNavigationService,
    resolvers.FactEditResolver
  ]
})
export class FactsModule { }
