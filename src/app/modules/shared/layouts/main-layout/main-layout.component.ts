import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/modules/auth/services/auth.service";
import { CurrentUserService } from "../../services/current-user.service";

interface MenuItem {
  title: string
  route: string
}

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit, OnChanges, AfterViewInit{
  public navbarOpened = true
  public currentUser = this.currentUserService.loggedUser
  
  public navItems: MenuItem[] = [
    { title: 'Inicio', route: '/home' },
  ]

  constructor(
    private router: Router,
    private currentUserService: CurrentUserService
  ) { }

  ngOnInit(): void {
    //console.log('on init')    
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log(changes)
  }

  ngAfterViewInit(): void {
    if(this.currentUserService.loggedUser.isAdmin){
      this.navItems.push({ title: 'Usuarios', route: '/users' })
    }
  }

  public signOut(): void {
    localStorage.clear()
    this.router.navigateByUrl('/auth/signin')
  }

  public toggleNavbar(): void {
    this.navbarOpened = !this.navbarOpened
  }
}