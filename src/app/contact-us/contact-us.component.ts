import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  

  constructor (private http:HttpClient ) {

  }
  onsubmit(data){

   
 this.http.post("mail.php",data).subscribe((result)=>{
   
   console.log(result)

 })
 
  
    

  }



  ngOnInit(): void {
  }

}
