import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
data=[{h1_heading:"",h2_heading:"",contect:"",img:""}]

clients=[{img:'',class:''},{img:'',class:''},{img:'',class:''},{img:'',class:''}]

  constructor() { }

  ngOnInit(): void {
  }

}
