import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/client/pages/home-page/home-page.component';
import { ProductDetailPageComponent } from './modules/client/pages/product-detail-page/product-detail-page.component';
import { LoginComponent } from './shared/component/login/login.component';
import { ProfileComponent } from './modules/client/pages/profile/profile.component';
import { CartorderComponent } from './modules/client/pages/cartorder/cartorder.component';
import { CheckoutComponent } from './modules/client/pages/checkout/checkout.component';
import { NotFoundPageComponent } from './modules/client/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '',  component: HomePageComponent },
  { path: 'product', component: ProductDetailPageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'cart', component: CartorderComponent },
  { path: 'checkout', component: CheckoutComponent },

  { path: '**', component: NotFoundPageComponent }
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
