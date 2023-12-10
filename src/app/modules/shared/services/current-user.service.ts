import { Injectable, OnChanges, SimpleChanges } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CurrentUserService{
  private _loggedUser: any

  constructor(){
    this._loggedUser = JSON.parse(localStorage.getItem("currentUser")!)
  }
  
  public get loggedUser() {
    return this._loggedUser
  }

  public set loggedUser(value: any) {
    console.log('set loggedUser')
    this._loggedUser = value;
  }
}