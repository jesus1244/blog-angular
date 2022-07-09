import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { comment, forum, sendComment, tokenUser } from 'src/app/interfaces/interfaces.interface';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  constructor( private pageService: PagesService, private ac: ActivatedRoute, private router: Router ) {}

  comments: comment[] = [];

  userlogg = '';

  comment = '';

  forumName = '';

  forumId = '' || undefined;

  forum:forum[] = [];

  userComment:[]= [];

  sendComment(){
    const comment = this.comment;
    return comment;
  }

  showComments(){
    
    if(this.comment == '') return;

    const tokendecode:tokenUser = this.pageService.decodeToken();

    this.ac.paramMap.subscribe( params => {

      const id = params.get('id');

      let comment:sendComment = {
        id_user: tokendecode.user.id,
        id_forum: id,
        comment: this.comment
      }
      
      this.pageService.insertComments(comment).subscribe(data => {
  
        console.log(data);
      });
      console.log(comment);
  
      this.comment = '';
    })

  }

  ngOnInit() {
    
    const tokendecode:tokenUser = this.pageService.decodeToken();
    
    this.userlogg = tokendecode.user.username;

    // this.pageService.comments().subscribe((data) => {

    //   this.comments = data

    //   console.log("holaa",data);
    // })

    

    // this.ac.paramMap.subscribe(params => {
    //   this.pageService.forum().subscribe((data) => {
    //     this.forum = data;
    //   })
    //   const id = params.get('id')
    // })

    this.ac.paramMap.pipe(
      switchMap((params: ParamMap) => this.pageService.forum(params.get('id') || undefined))
    ).subscribe(data => {

      this.comments = data;
      
      data.forEach(element => {

        this.forumName = element.name;
      })
      console.log("holaa2",data)
    });

  }
  forumGetName(forum: forum){
    
    console.log(forum)
  }
}
