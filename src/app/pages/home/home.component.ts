import { Component, OnInit } from '@angular/core';
import { sendComment, tokenUser, user, comment, forum  } from 'src/app/interfaces/interfaces.interface';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  // constructor( private pageService: PagesService ) {}

  // comments: comment[] = [];

  // userlogg = '';

  // comment = '';

  // forum:forum[] = [];

  // userComment:[]= [];

  // sendComment(){
  //   const comment = this.comment;
  //   return comment;
  // }

  // showComments(){
    
  //   if(this.comment == '') return;

  //   const tokendecode:tokenUser = this.pageService.decodeToken();

  //   let comment:sendComment = {
  //     id_user: tokendecode.user.id,
  //     comment: this.comment
  //   }
    
  //   this.pageService.insertComments(comment).subscribe(data => {

  //     console.log(data);
  //   });
  //   console.log(comment);

  //   this.comment = '';
  // }

  ngOnInit() {
    
    // const tokendecode:tokenUser = this.pageService.decodeToken();
    
    // this.userlogg = tokendecode.user.username;

    // this.pageService.comments().subscribe((data) => {

    //   this.comments = data

    //   console.log(data);
    // })

    // // this.pageService.forum().subscribe(data => {
    // //   this.forum = data;
    // // })

  }
  
}
