import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  public itemsInCart: number = 0
  public isUserLogged: boolean = localStorage.getItem('isLogged') === 'true'

  constructor(private router: Router) {
  }

  logout() {
    localStorage.removeItem('isLogged')
    this.router.navigate(['/'])
  }
}
