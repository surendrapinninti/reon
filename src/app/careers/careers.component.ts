import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  data = [
    { headeing: "Full Stack Development", content: "Design is one of the main thing that lets businesses grow digitally. If your businessdesign is the best, you are the next leader.", img: "./../../assets/img/color dots/sky_blue.svg" , Copenhagen: "Internship",domain:"development"   },
  { headeing: "MEAN Stack Development", content: "Experience is what customers feels while using your product or design. It helps in building trust and get more chances for lead conversion rate.", img: "./../../assets/img/color dots/sky_blue.svg" , Copenhagen: "Internship"  ,domain:"development" },
   { headeing: "Flutter Development", content: "Growth not always means getting more leads. A company grows only if it has high lead conversion rate.", img: "./../../assets/img/color dots/sky_blue.svg" , Copenhagen: "Internship",domain:"development"   }, 
  { headeing: "Ionic Development", content: "Design is one of the main thing that lets businesses grow digitally. If your businessdesign is the best, you are the next leader.", img: "./../../assets/img/color dots/sky_blue.svg" , Copenhagen: "Internship" ,domain:"development"  },
  { headeing: "Brand Strategies Development", content: "Experience is what customers feels while using your product or design. It helps in building trust and get more chances for lead conversion rate.", img: "./../../assets/img/color dots/violet.svg" , Copenhagen: "Internship" ,domain:"design"  },
  { headeing: "Brand Design", content: "Experience is what customers feels while using your product or design. It helps in building trust and get more chances for lead conversion rate.", img: "./../../assets/img/color dots/violet.svg" , Copenhagen: "Internship" ,domain:"design"  },
  { headeing: "Digital Marketing", content: "The efficient products make the businesses more productive and more functional. It helps your business to get successful.", img: "./../../assets/img/color dots/yellow.svg" , Copenhagen: "Internship"  ,domain:"marketing" }, 
  { headeing: "Graphic Designing", content: "Growth not always means getting more leads. A company grows only if it has high lead conversion rate.", img: "./../../assets/img/color dots/violet.svg" , Copenhagen: "Internship" ,domain:"design"  }, 
  { headeing: "Mobile Application Development", content: "The efficient products make the businesses more productive and more functional. It helps your business to get successful.", img: "./../../assets/img/color dots/sky_blue.svg" , Copenhagen: "Internship" ,domain:"development"  }, 
  
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
