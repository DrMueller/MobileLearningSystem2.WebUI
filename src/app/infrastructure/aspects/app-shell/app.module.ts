import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreServicesModule } from 'app/infrastructure/core-services';
import { AgGridBuildingModule } from 'app/infrastructure/shared-features/ag-grid/ag-grid-building';
import { RxFormsModule } from 'app/infrastructure/shared-features/rx-forms';

import { AppNavigationModule } from '../app-navigation';
import { ErrorModule } from '../error';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    CoreServicesModule,
    RxFormsModule.forRoot(),
    AppNavigationModule,
    ErrorModule.forRoot(),
    AgGridBuildingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
