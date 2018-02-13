import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'esls-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggled: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  IsOpen: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  sidenavToggle() {
    if(this.IsOpen)
      this.sidenavToggled.emit(!this.IsOpen);
    else
      this.sidenavToggled.emit(this.IsOpen);
  }

}
