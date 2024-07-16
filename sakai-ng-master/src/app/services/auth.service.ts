import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../interfaces/user.interface";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { APIResponse } from "../interfaces/api-response.interface";

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    private  controller =  `${environment.urlAPI}Auth`;
    //private apiUrl = 'https://localhost:7254/api/Auth'; 

  constructor(
    private http: HttpClient,
  ) {}

  sign(user: User) : Observable<APIResponse<any>> {
    return this.http.post<APIResponse<any>>(`${this.controller}/Sign`,user);
    
  }

}