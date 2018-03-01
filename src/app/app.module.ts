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
import { TeamModule } from './components/team/team.module';

//Import services
import { MatchService } from './components/match/match.service';
import { TeamService } from './components/team/team.service';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/error/page-not-found/page-not-found.component';
import { MatchComponent } from './components/match/match.component';
import { MatchesListComponent } from './shared/components/match/matches-list/matches-list.component';
import { MatchItemComponent } from './shared/components/match/match-item/match-item.component';
import { MatchDetailsComponent } from './shared/components/match/match-details/match-details.component';
import { TeamListComponent } from './shared/components/team/team-list/team-list.component';
import { TeamComponent } from './components/team/team.component';
import { ActualityComponent } from './components/actuality/actuality.component';
import { TeamListItemComponent } from './shared/components/team/team-list-item/team-list-item.component';
import { TeamDetailsComponent } from './shared/components/team/team-details/team-details.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    /** App Modules */
    CoreModule,
    TeamModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MatchComponent,
    MatchesListComponent,
    MatchItemComponent,
    MatchDetailsComponent,
    TeamListComponent,
    TeamComponent,
    ActualityComponent,
    TeamListItemComponent,
    TeamDetailsComponent,
  ],
  exports:[
  ],
  providers: [
    MatIconRegistry,
    MatchService,
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(public matIconRegistry: MatIconRegistry){
    matIconRegistry.registerFontClassAlias('fas', 'fas');
    matIconRegistry.registerFontClassAlias('far', 'far');
  }
}
