import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CartorderComponent } from './pages/cartorder/cartorder.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

// const routes: Routes = [
//     {path: '', component: HomePageComponent}
// ]

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ProductDetailPageComponent,
    ProfileComponent,
    CartorderComponent,
    CheckoutComponent,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomePageComponent,
    ProductDetailPageComponent
    
  ]
})
export class ClientModule { }
