import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeamDetailsComponent } from '../../shared/components/team/team-details/team-details.component';

const teamRoutes: Routes = [
  { path: 'team/:id', component: TeamDetailsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      teamRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  declarations: [
  ],
  exports:[
  ]
})
export class TeamModule { }
