import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../interfaces/user.interface";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    private  controller =  `${environment}Auth`;

  constructor(
    private http: HttpClient,
  ) {}

  
  sign(user: User) : Observable<any> {
    return this.http.post<any>(`${this.controller}`, user);
  }

  validaToken() : Observable<any> {    
    return this.http.get<any>(`${this.controller}/ValidaToken`);
  }

}