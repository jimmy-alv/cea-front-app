import { Component } from "@angular/core";
import { CurrentUserService } from "../../services/current-user.service";

@Component({
  selector: 'app-profile', 
  templateUrl: './profile.component.html', 
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{
  public user = this.currentUserService.loggedUser

  constructor(private currentUserService: CurrentUserService){}
}