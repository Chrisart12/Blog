import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

	@Input() postTitle: string;
  @Input() postContent: string;
 

  	loveIts = 0;


  constructor() { }

  ngOnInit() {
  }

  created_at = new Promise((resolve)=>{
    const date = new Date();

    setTimeout(() =>{
      resolve(date);
    }, 2000);
  });

  onLove() {
    this.loveIts = this.loveIts + 1;
  }

  onDontLove() {
  	this.loveIts = this.loveIts - 1;
  }

  resultat() {
    if(this.loveIts > 0) {
      return "green";
    } else if (this.loveIts < 0) {
      return "red";
    }
  }

}
