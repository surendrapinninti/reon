import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
// import { BannerComponent } from './banner/banner.component';
import { CareersComponent } from './careers/careers.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { IndexComponent } from './index/index.component';



const routes: Routes = [
  {path: '', component: IndexComponent, data: {title: 'Home'}},
  {path: 'about-us', component: AboutUsComponent, data: {title: 'About Us'}},
  {path: 'services', component: ServicesComponent, data: {title: 'services'}},
  {path: 'products', component: ProductsComponent, data: {title: 'Products'}},
  {path: 'careers', component: CareersComponent, data: {title: 'careers'}},
  {path: 'why-us', component: WhyUsComponent, data: {title: 'why-us'}},
  {path: 'contact-us', component: ContactUsComponent, data: {title: 'contact-us'}},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
