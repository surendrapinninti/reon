import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year: number = new Date().getFullYear();
  data1 =[
    {name:"Home", url:"/"},
    {name:"About Us", url:"/about-us"},
    {name:"Careers ", url:"/careers"},]
    data2=[
    {name:"Products", url:"/products"},
    {name:"Services", url:"/services"},
    {name:"Why us?", url:"/why-us"},
    {name:"Contact us", url:"/contact-us"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
