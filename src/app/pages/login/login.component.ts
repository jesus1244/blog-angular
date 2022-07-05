import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/interfaces/interfaces.interface';
import { PagesService } from '../pages.service';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  hide = true;

  userlog = '';

  user = {
    user: '',
    password: '',
    username:''
  }

  constructor( private router: Router, private pageSevice: PagesService ) { }

  ngOnInit(): void {
    const tokendecode = this.pageSevice.decodeToken();
    
    
    
  }

  enviar(){

    const user:any = {user: this.user.user, password: this.user.password};

    this.pageSevice.login(user).subscribe((data:any) => {

      console.log(data.token);
      
      localStorage.setItem('token', data.token);
      // this.router.navigate(['/home']);
      

    });
    console.log(this.pageSevice.decodeToken());
  }

  register(){

    const user:any = {user: this.user.user, password: this.user.password, username: this.user.username}

    this.pageSevice.register( user ).subscribe(data => {

    })
  }

  getUserLogged(){
    
  }
}
