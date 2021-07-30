import { Component, OnInit } from '@angular/core';
import {IPost} from "../../models/IPost";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
post:IPost
  constructor(private router:Router) { }

  ngOnInit(): void {
  this.post= this.router.getCurrentNavigation()?.extras.state as IPost;
  }

}