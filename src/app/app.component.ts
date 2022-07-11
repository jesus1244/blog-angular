import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { comment, forum, tokenUser, user } from './interfaces/interfaces.interface';
import { PagesService } from './pages/pages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor( 
    private pageService: PagesService, 
    private router: Router, 
    private fireAuth: AngularFireAuth, ) {}
    

  showFiller = false;

  showToolbar = false;

  forums: comment[] = [];

  userlogg = '';

  isUser = false;

  ngOnInit(){

    this.pageService.forum2().subscribe(data  => {
      this.forums = data;
      console.log(data);
    })

    const tokendecode:tokenUser = this.pageService.decodeToken();

    console.log(tokendecode)
    if(tokendecode !== null){
    this.userlogg = tokendecode.user.username;
    }

    if(this.userlogg !== '') this.isUser = true;

  }

  goForum(forum: forum){
    
    const id = forum.id;
    this.router.navigate(['/forum', id]);
    
  }

  logout(){
    this.fireAuth.signOut();
    localStorage.removeItem('token');
    location.reload();
  }
  title = 'forum';
}
