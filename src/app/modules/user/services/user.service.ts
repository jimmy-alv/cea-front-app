import { HttpClient  } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../interfaces/user.interface";
import { Observable, catchError, of } from "rxjs";
import { apiUrl } from "../../shared/constants/constants";

@Injectable({ providedIn: 'root' })
export class UserService {

  public users: User[] = []

  private endpoint = `${ apiUrl }/users`

  constructor(private http: HttpClient) {
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.endpoint).pipe(
      catchError( () => of([]))
    )
  }

  public createUser(user: any): Observable<User> {
    return this.http.post<User>(this.endpoint, user)
  }
}