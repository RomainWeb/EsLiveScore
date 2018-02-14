import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Import Material Design Modules
import { MatIconRegistry } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Import hammerJs
import 'hammerjs';

//Import Routing Module
import { AppRoutingModule } from './app-routing.module';

//Import Core Module
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/error/page-not-found/page-not-found.component';


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
    PageNotFoundComponent,
  ],
  exports:[
  ],
  providers: [MatIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(public matIconRegistry: MatIconRegistry){
    matIconRegistry.registerFontClassAlias('fas', 'fas');
    matIconRegistry.registerFontClassAlias('far', 'far');
  }
}
