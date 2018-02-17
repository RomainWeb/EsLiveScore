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

//Import services
import { MatchService } from './components/match/match.service';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/error/page-not-found/page-not-found.component';
import { MatchComponent } from './components/match/match.component';
import { MatchesListComponent } from './shared/components/matches-list/matches-list.component';
import { MatchItemComponent } from './shared/components/match-item/match-item.component';
import { MatchDetailsComponent } from './shared/components/match-details/match-details.component';


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
    PageNotFoundComponent,
    MatchComponent,
    MatchesListComponent,
    MatchItemComponent,
    MatchDetailsComponent,
  ],
  exports:[
  ],
  providers: [
    MatIconRegistry,
    MatchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(public matIconRegistry: MatIconRegistry){
    matIconRegistry.registerFontClassAlias('fas', 'fas');
    matIconRegistry.registerFontClassAlias('far', 'far');
  }
}
