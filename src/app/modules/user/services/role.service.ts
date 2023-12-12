import { Injectable } from "@angular/core";
import { apiUrl } from "../../shared/constants/constants";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class RoleService {
  public roles = []

  private endpoint = `${ apiUrl }/roles`

  constructor(private http: HttpClient) {}

  public getRoles(): Observable<any[]> {
    return this.http.get<any[]>(this.endpoint).pipe(
      catchError( () => of( [] ))
    )
  }
}