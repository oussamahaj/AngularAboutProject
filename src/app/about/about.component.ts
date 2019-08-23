import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  info = {
    nom: 'oussama',
    email: 'hajoussama@gmail.com',
    tel: '26019212'
  };
  comments = [];
  comment = {
    date: null,
    message: ''
  };
  newComment=false;
  addComment(){
    if(this.comment.message!=''){
      this.comment.date=new Date();
      this.comments.push({
        date:this.comment.date,
        message:this.comment.message
      });
      this.comment.message='';

    }
  }

  constructor() { }

  ngOnInit() {
  }

}
