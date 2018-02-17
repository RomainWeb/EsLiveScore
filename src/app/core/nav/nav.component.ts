import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'esls-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['nav.component.scss'],
})
export class NavComponent implements OnInit, AfterViewInit {

  navList: any = [
    { name: "League of legends", slug: "LOL", img: 'lol.png', route: "/" },
    { name: "Defense of the Ancients 2", slug: "Dota2", img: 'dota2.png', route: "/" },
    { name: "Starcraft 2", slug: "SC2", img: 'sc2.png', route: "/" },
    { name: "Counter Strike global offensive", slug: "CSGO", img: 'csgo.png', route: "/" },
    { name: "Heroes of the storm", slug: "HOTS", img: 'hots.png', route: "/" },
    { name: "Overwatch", slug: "Overwatch", img: 'overwatch.png', route: "/" },
    { name: "Fifa 18", slug: "FIFA", img: 'fifa.png', route: "/" },
  ]

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    
  }

}
