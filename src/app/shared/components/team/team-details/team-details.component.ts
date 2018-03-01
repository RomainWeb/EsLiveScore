import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { TeamService } from '../../../../components/team/team.service';
import { Team } from '../../../models/team.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'esls-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnInit {
  team$: Observable<Team>;
  // team: Team;
  // id: number = +this.route.snapshot.paramMap.get('id');;

  constructor(
    private _teamService: TeamService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this._teamService.getTeam(this.id).subscribe(data => {
    //   this.team = data;
    //   console.log(data);
    // });

    this.team$ = this.route.paramMap.switchMap((params: ParamMap) => {
      return this._teamService.getTeam(+params.get('id'));
    })
  }


}
