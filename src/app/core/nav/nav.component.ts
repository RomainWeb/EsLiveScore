import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'esls-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['nav.component.scss'],
})
export class NavComponent implements OnInit, AfterViewInit {

  navList: any = [
    { title: "Home", icon: 'fa-home', route: "/" },
    { title: "Digital Training Intro", icon: 'fa-tasks', route: "/" },
    { title: "iPPM Program", icon: 'fa-book', route: "/" },
    { title: "Using iPPM", icon: 'fa-pencil-alt', route: "/" }
  ]

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    
  }

}
