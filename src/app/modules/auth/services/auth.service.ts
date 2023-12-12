import { HttpClient } from "@angular/common/http";
import { Observable, catchError, of, throwError } from "rxjs";
import { apiUrl } from "../../shared/constants/constants";
import { Injectable, OnChanges, SimpleChanges } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class AuthService implements OnChanges {

  public currentUser = {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

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
}