import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  data = [{ headeing: "Application Development", content: "Design is one of the main thing that lets businesses grow digitally. If your businessdesign is the best, you are the next leader.", img: "./../../assets/img/service/clr-icon1.png" },
    { headeing: "Website Development", content: "Experience is what customers feels while using your product or design. It helps in building trust and get more chances for lead conversion rate.", img: "./../../assets/img/service/clr-icon2.png" },
    { headeing: "Digital Marketing", content: "The efficient products make the businesses more productive and more functional. It helps your business to get successful.", img: "./../../assets/img/service/clr-icon3.png" }, 
    { headeing: "Branding", content: "Growth not always means getting more leads. A company grows only if it has high lead conversion rate.", img: "./../../assets/img/service/clr-icon1.png" }, 
     
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
