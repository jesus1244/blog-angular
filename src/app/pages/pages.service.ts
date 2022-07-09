import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt"
import { sendComment, user, comment, forum } from '../interfaces/interfaces.interface';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  private apiUrl: string = 'http://localhost:3000';

  constructor( private http: HttpClient, private jwtHelper: JwtHelperService, private fireAuth: AngularFireAuth ) { }

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

  comments(): Observable<comment[]>{

    const url = `${ this.apiUrl }/comments`;

    return this.http.get<comment[]>( url );
  }

  forum(id?: string): Observable<comment[]>{

    const url = `${ this.apiUrl }/forum/${id}`;

    return this.http.get<comment[]>( url );
  }
  forum2(): Observable<comment[]>{

    const url = `${ this.apiUrl }/forum2`;

    return this.http.get<comment[]>( url );
  }

  insertComments( comment: sendComment ): Observable<sendComment[]>{

    const url = `${ this.apiUrl }/insertcomments`;

    return this.http.post<sendComment[]>( url, comment );
  }

  async loginGoogle(email: string, password: string){

    try {
      return await this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    } catch (error) {
      console.log("error con google: ", error)
      return null
    }

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
