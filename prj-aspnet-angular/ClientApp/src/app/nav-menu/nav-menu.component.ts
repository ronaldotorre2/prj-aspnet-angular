import { Component } from '@angular/core';

import { Menu } from './menu';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
    menu = Array<Menu>();
    isExpanded = false;

    constructor() {
        this.createMenu();
    }

    createMenu(): void {
        this.menu.push(new Menu(1, 'Home', '/', true));
        this.menu.push(new Menu(2, 'Counter', '/counter', true));
        this.menu.push(new Menu(3, 'Person', '/person', false));
    }

    collapse() {
      this.isExpanded = false;
    }

    toggle() {
      this.isExpanded = !this.isExpanded;
    }
}
