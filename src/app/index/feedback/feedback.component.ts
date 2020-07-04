import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  data=[{name:"Surya Vamsi",content:"Reonsphere has provided us with excellent service for our AI Based summit,we had in Andhra Pradesh.They were extremely responsive to all our emails, and the quality of video editing and production was outstanding, A tremendous value for the price with given service andquality wereceived,you guys surely doing more video for us.",img:"../../../assets/img/blog/SuryaVamsi-samll.png",designation:"Founder and CEO ",company:"Subrains Technologies"},
        {name:"Sri Prasanth Bahadursha Babi",content:"We had a dream of our own ecommerce enterprise,to providebest local taste to all the areas. Now wecan see what we had dreamedabout our product withthe help ofReonsphere. Reonsphereproactively gave us inputs as a friend for improvement of the product.Best work culture,customer treatment, customer followup,friendly nature and premium products and services whichworth getting them forour business growth.Amazing work, they provided us with best services inmarket. All the best.",img:"../../../assets/img/blog/Prasanth-small.png",designation:"Co-Founder",company:"United Tastes of Godavari"},
        {name:"Kamalesh Kumar Jain",content:"Loved the services of Reonsphere. The designs are just awesome and the technical team is very much understanding and helped me a lot in recommending some extra, valuable and worthy features which helped me grow a lot more when compared to other services which just make the development and provide me with   basic website.",img:"../../../assets/img/blog/Kamalesh Jain-small.png",designation:"Co-Founder",company:"Mahaveer Electricals"}
 
]


  constructor() { }

  ngOnInit(): void {
  }

}
