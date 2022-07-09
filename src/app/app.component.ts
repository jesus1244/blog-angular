import { Component, OnInit } from '@angular/core';
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
    private ac: ActivatedRoute ) {}

  showFiller = false;

  showToolbar = false;

  forums: comment[] = [];

  userlogg = '';

  ngOnInit(){

    const tokendecode:tokenUser = this.pageService.decodeToken();
    this.userlogg = tokendecode.user.username;

    this.pageService.forum2().subscribe(data  => {
      this.forums = data;
      console.log(data)
    })

    // this.ac.paramMap.pipe(
    //   switchMap((params: ParamMap) => this.pageService.forum(params.get('id') || undefined))
    // ).subscribe(data => {
    //   this.forum = data;
    //   console.log("holaa2",data)
    // });

      if(this.router.url !== '/login'){
        
        this.showToolbar

      }else{
       
        this.showToolbar = true

      }
  }

  goForum(forum: forum){
    
    const id = forum.id;
    this.router.navigate(['/forum', id])
    
  }
  title = 'forum';
}
