import { Component, OnInit } from '@angular/core';

export class MenuItem {
  id    :number;
  label :string;
  path  :string;
  icon  :string;
  active:boolean;
}

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menuItems:Array<MenuItem>;

  constructor() {
    this.menuItems = [
      {'id': 1, 'label': 'Dashboard', 'path': '#', 'icon': 'dashboard', 'active': true},
      {'id': 2, 'label': 'Charts', 'path': '#', 'icon': 'pie-chart', 'active': false}
    ]
  }
  ngOnInit() {
  }
  menuItemClick(id:number) {
    this.menuItems.map((item) => {
      if(item.id === id) {
        item.active = true;
      } else {
        item.active = false;
      }
      return item;
    });
  }


}
