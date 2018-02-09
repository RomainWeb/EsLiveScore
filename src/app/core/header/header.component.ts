import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'esls-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggled: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  constructor() { }

  ngOnInit() {
  }

  sidenavToggle() {
    if(this.sidenavToggled)
      this.sidenavToggled.emit(false);
    else
      this.sidenavToggled.emit(true);
  }

}
