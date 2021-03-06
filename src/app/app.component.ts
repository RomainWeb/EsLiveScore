import { Component, ViewChild } from '@angular/core';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'esls-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav

  toggleSidenav(evt: Event) {
    this.sidenav.toggle();
  }
}
