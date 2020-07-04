import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { CareersComponent } from './careers/careers.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { IndexComponent } from './index/index.component';
import { WhatYouGetComponent } from './index/what-you-get/what-you-get.component';
import { WelcomeComponent } from './index/welcome/welcome.component';
import { ShapingTheFutureComponent } from './index/shaping-the-future/shaping-the-future.component';
import { WeArerReonpshereComponent } from './index/we-arer-reonpshere/we-arer-reonpshere.component';
import { WhatWeDoComponent } from './index/what-we-do/what-we-do.component';
import { FooterComponent } from './footer/footer.component';
import { FeedbackComponent } from './index/feedback/feedback.component';
import { TeamVideoComponent } from './index/team-video/team-video.component';
import { PortfolioComponent } from './index/portfolio/portfolio.component';
import { TeamComponent } from './index/team/team.component';
import { ClientsComponent } from './index/clients/clients.component';
import { ComeBuildComponent } from './index/come-build/come-build.component';
import{FormsModule} from '@angular/forms'






@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
  
    AboutUsComponent,
    CareersComponent,
    ServicesComponent,
    ProductsComponent,
    WhyUsComponent,
    ContactUsComponent,
    IndexComponent,
    WhatYouGetComponent,
    WelcomeComponent,
    ShapingTheFutureComponent,
    WeArerReonpshereComponent,
    WhatWeDoComponent,
    FooterComponent,
    FeedbackComponent,
    TeamVideoComponent,
    PortfolioComponent,
    TeamComponent,
    ClientsComponent,
    ComeBuildComponent,
    
    
   
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
