import { Component } from '@angular/core';

interface MenuItem {
  title: string
  route: string
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  public navItems: MenuItem[] = [
    { title: 'Inicio', route: '/home'},
    { title: 'Usuarios', route: '/users'},
    { title: 'Cerrar sesión', route: '/auth/signout'}
  ]
}
