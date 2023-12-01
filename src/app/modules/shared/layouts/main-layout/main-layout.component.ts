import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/modules/auth/services/auth.service";

interface MenuItem {
  title: string
  route: string
}

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent{
  public navbarOpened = true

  public navItems: MenuItem[] = [
    { title: 'Inicio', route: '/home' },
    { title: 'Usuarios', route: '/users' },
    // { title: 'Cerrar sesión', route: '/auth/signout'}
  ]

  constructor(
    private router: Router
  ) { }

  public signOut(): void {
    localStorage.clear()
    this.router.navigateByUrl('/auth/signin')
  }

  public toggleNavbar(): void {
    this.navbarOpened = !this.navbarOpened
  }
}