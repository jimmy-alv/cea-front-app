import { HttpClient } from "@angular/common/http";
import { Observable, catchError, of } from "rxjs";
import { apiUrl } from "../../shared/constants/constants";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient){}

  private endpoint = `${ apiUrl}/auth/sign-in`

  public signIn(body: any): Observable<any>{
    return this.http.post(this.endpoint, body).pipe(
      catchError( () => of([]))
    )
  }
}