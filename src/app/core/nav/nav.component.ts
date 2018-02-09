import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'esls-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navList: any = [
    { title: "Home", icon: 'home', IsActive: true, route: "/" },
    { title: "Technology", icon: 'laptop_mac', IsActive: false, route: "/" },
    { title: "Locations", icon: 'language', IsActive: false, route: "/" },
    { title: "Job Openings", icon: 'assignment', IsActive: false, route: "/" },
    { title: "Leadership", icon: 'people', IsActive: false, route: "/" },
  ]

  constructor() { }

  ngOnInit() {
  }

}
