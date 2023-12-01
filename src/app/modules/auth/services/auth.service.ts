import { HttpClient } from "@angular/common/http";
import { Observable, catchError, of, throwError } from "rxjs";
import { apiUrl } from "../../shared/constants/constants";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  private endpoint = `${apiUrl}/auth`

  public signIn(body: any): Observable<any> {
    return this.http.post(`${this.endpoint}/sign-in`, body)
  }

  public signOut(): void {
    // return this.http.post(`${ this.endpoint }/sign-out`, {}).pipe(
    //   catchError( () => of([]))
    // )
  }

  public get currentUser(): any {
    if(localStorage.getItem('currentUser')){
      return JSON.parse(localStorage.getItem('currentUser')!)
    }
  }
}