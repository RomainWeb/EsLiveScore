import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'esls-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent implements OnInit {

  navList: any = [
    { title: "League of legend", imgPath: 'lol.png', route: "/" },
    { title: "Dota 2", imgPath: 'dota2.png', route: "/" },
    { title: "Heathstone", imgPath: 'hots.png', route: "/" },
    { title: "Fifa 18", imgPath: 'fifa.png', route: "/" },
    { title: "Overwatch", imgPath: 'overwatch.png', route: "/" },
    { title: "CSGO", imgPath: 'csgo.png', route: "/" },
  ]

  constructor() { }

  ngOnInit() {
  }

}
