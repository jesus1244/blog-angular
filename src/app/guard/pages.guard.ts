import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PagesService } from '../pages/pages.service';

@Injectable({
  providedIn: 'root'
})
export class PagesGuard implements CanActivate {

  constructor( private router: Router, private pagesService: PagesService ) {}

    canActivate():boolean{
        
        if(!this.pagesService.isToken()){
            console.log("Token no es valido o expiró");
            this.router.navigate(['login']);
            return false;
        }
        
        return true;
    }
  
}
