import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'esls-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  @Input() link: any;

  constructor() { }

  ngOnInit() {
  }

}
