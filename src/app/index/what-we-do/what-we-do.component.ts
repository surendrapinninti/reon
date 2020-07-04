import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.css']
})
export class WhatWeDoComponent implements OnInit {
  data = [{ headeing: "Application Development", content: "Design is one of the main thing that lets businesses grow digitally. If your businessdesign is the best, you are the next leader.", img1: "./../../assets/img/services-icons/serv_app_grey.svg",img2: "./../../assets/img/services-icons/serv_app.svg" },
    { headeing: "Website Development", content: "Experience is what customers feels while using your product or design. It helps in building trust and get more chances for lead conversion rate.", img1: "./../../assets/img/services-icons/serv_web_grey.svg",img2: "./../../assets/img/services-icons/serv_web.svg" },
    { headeing: "Digital Marketing", content: "The efficient products make the businesses more productive and more functional. It helps your business to get successful.", img1: "./../../assets/img/services-icons/serv_marketing_grey.svg",img2: "./../../assets/img/services-icons/serv_marketing.svg" }, 
    { headeing: "Branding", content: "Growth not always means getting more leads. A company grows only if it has high lead conversion rate.", img1: "./../../assets/img/services-icons/serv_branding_grey.svg",img2: "./../../assets/img/services-icons/serv_branding.svg" }, 
     
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
