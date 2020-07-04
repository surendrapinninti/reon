import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  data =[
    {name:"Home", url:"/"},
    {name:"About Us", url:"/about-us"},
    {name:"Careers ", url:"/careers"},
    {name:"Products", url:"/products"},
    {name:"Services", url:"/services"},
    {name:"Why us?", url:"/why-us"},
    {name:"Contact us", url:"/contact-us"},
  ]

  constructor() {
  }

  ngOnInit(): void {
  }
}

 