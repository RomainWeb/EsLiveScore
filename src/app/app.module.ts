import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Import Material Design Modules
import { MatButtonModule, MatListModule, MatIconModule, MatIconRegistry, MatCardModule, MatMenuModule, MatInputModule, MatButtonToggleModule,
  MatProgressSpinnerModule, MatSelectModule, MatSlideToggleModule, MatDialogModule, MatSnackBarModule, MatToolbarModule,
  MatTabsModule, MatSidenavModule, MatTooltipModule, MatRippleModule, MatRadioModule, MatGridListModule,
  MatDatepickerModule, MatNativeDateModule, MatSliderModule, MatAutocompleteModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Import Covalent Modules
import { CovalentCommonModule, CovalentLayoutModule, CovalentMediaModule, CovalentExpansionPanelModule,
  CovalentStepsModule, CovalentLoadingModule, CovalentDialogsModule, CovalentSearchModule, CovalentPagingModule,
  CovalentNotificationsModule, CovalentMenuModule, CovalentDataTableModule, CovalentMessageModule } from '@covalent/core';

//Import hammerJs
import 'hammerjs';

//Import Routing Module
import { AppRoutingModule } from './app-routing.module';

//Import Core Module
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    /** App Modules */
    CoreModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  exports:[
  ],
  providers: [MatIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(public matIconRegistry: MatIconRegistry){
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
}
