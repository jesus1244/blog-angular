import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt"
import { user } from '../interfaces/interfaces.interface';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  private apiUrl: string = 'http://localhost:3000';

  constructor( private http: HttpClient, private jwtHelper: JwtHelperService ) { }

  login(user: user[]): Observable<user[]>{

    const url = `${ this.apiUrl }/login`;

    return this.http.post<user[]>( url, user );
  }

  users(): Observable<user[]>{

    const url = `${ this.apiUrl }/login`;

    return this.http.get<user[]>( url );
  }

  register( user:user[] ): Observable<user[]>{

    const url = `${ this.apiUrl }/register`;

    return this.http.post<user[]>( url, user );
  }

  isToken():boolean {
    const token = localStorage.getItem('token');
    if(token !== null && this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')){
      return false;
    }
    return true;
  }

  decodeToken(){
    const token = localStorage.getItem('token');
    const decodedToken = this.jwtHelper.decodeToken(token?.toString());
    return decodedToken;
  }

}
