import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AgGridModule } from 'ag-grid-angular/main';
import { EditorModule, SharedModule } from 'primeng/primeng';

import { RxFormsModule } from 'app/infrastructure/shared-features/rx-forms';
import { CollapsibleCardModule } from 'app/infrastructure/widgets/collapsible-card';
import { SelectModule } from 'app/infrastructure/widgets/select';

import * as comp from './domain/components';
import * as serv from './domain/services';
import { PlaygroundRoutingModule } from './playground-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PlaygroundRoutingModule,
    CollapsibleCardModule,
    SelectModule,
    EditorModule,
    SharedModule,
    RxFormsModule,
    AgGridModule.withComponents([
      comp.PlaygroundGridBuilderComponent
    ])
  ],
  declarations: [
    comp.PlaygroundComponent,
    comp.PlaygroundOverviewComponent,
    comp.PlaygroundCollapsibleCardComponent,
    comp.PlaygroundSelectComponent,
    comp.PlaygroundPrimengEditorComponent,
    comp.PlaygroundRxFormComponent,
    comp.PlaygroundEnumSelectComponent,
    comp.PlaygroundErrorComponent,
    comp.PlaygroundRxFormControlWithValidationComponent,
    comp.PlaygroundServerGetComponent,
    comp.PlaygroundServerPostComponent,
    comp.PgOrgMainComponent,
    comp.PgOrgAddressComponent,
    comp.PgOrgHqComponent,
    comp.PgOrgAddressComponent,
    comp.PlaygroundReflectComponent,
    comp.PlaygroundGridBuilderComponent
  ],
  providers: [
    serv.PlaygroundIndividualService
  ]
})
export class PlaygroundModule { }
