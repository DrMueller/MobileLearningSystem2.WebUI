import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AgGridModule } from 'ag-grid-angular/main';
import * as prime from 'primeng/primeng';

import { RxFormsModule } from 'app/infrastructure/shared-features/rx-forms';
import { CollapsibleCardModule } from 'app/infrastructure/widgets/collapsible-card';
import { SharedModule } from 'app/shared';

import * as components from './components';
import * as appServices from './app-services';
import * as domainServices from './domain-services';
import * as resolvers from './resolvers';
import { LearningSessionsRoutingModule } from './learning-sessions-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LearningSessionsRoutingModule,
    CollapsibleCardModule,
    RxFormsModule,
    AgGridModule.withComponents([
    ]),
    prime.EditorModule,
    prime.SharedModule
  ],
  declarations: [
    components.LearningSessionEditComponent,
    components.LearningSessionsOverviewComponent,
    components.LearningSessionsComponent,
    components.LearningSessionsOverviewComponent,
    components.LearningSessionRunComponent
  ],
  providers: [
    appServices.LearningSessionsNavigationService,
    domainServices.LearningSessionDataService,
    domainServices.LearningSessionOverviewService,
    resolvers.LearningSessionRunResolver,
    resolvers.LearningSessionEditResolver
  ]
})

export class LearningSessionsModule { }
