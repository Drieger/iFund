import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  // Variable used on the template
  @Input() title:string = 'iFund';
  @Input('title-mini') titleMini:string = 'iFund';

  // Event indicating a menu change
  @Output() menuToggleEvent = new EventEmitter();
}
