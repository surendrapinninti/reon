import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-you-get',
  templateUrl: './what-you-get.component.html',
  styleUrls: ['./what-you-get.component.css']
})
export class WhatYouGetComponent implements OnInit {

data=[{heading:'Best Design',content:"Design is one of the main things that lets businesses grow digitally. If your business design is the best, you are the next leader", img2:"./../../assets/img/unique/eye_bean_grey.svg",img3:"./../../assets/img/unique/eye_bean.svg"},
      {heading:'Best Experience',content:"Experience is what customers feels while using your product or design. It helps in building trust and get more chances for lead conversion rate",img2:"./../../assets/img/unique/star_bean_grey.svg",img3:"./../../assets/img/unique//star_bean.svg"},
      {heading:'Top Level Efficiency',content:"The efficient products make the businesses more productive and more functional. It helps your business to get successful",img2:"./../../assets/img/unique/chart_bean_grey.svg",img3:"./../../assets/img/unique/chart_bean.svg"},
      {heading:'Better Growth',content:"Growth not always means getting more leads. A company grows only if it has high lead conversion rate",img2:"./../../assets/img/unique/growth_bean_grey.svg",img3:"./../../assets/img/unique/growth_bean.svg" }
      
]

  constructor() { }

  ngOnInit(): void {
  }

}
