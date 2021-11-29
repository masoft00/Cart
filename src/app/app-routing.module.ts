import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminPanelComponent } from './components/admin-panel/home-admin-panel/home-admin-panel.component';
import { CartComponent } from './components/cart/cart.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { HappyCustomersComponent } from './components/happy-customers/happy-customers.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserProfilComponent } from './components/user-profil/user-profil.component';



import { AuthGuard } from "./shared/auth/auth.guard";


const routes: Routes = [
  { path: '', pathMatch             : 'full', redirectTo: '/home' },
  { path: 'home', component         : HomeComponent },
  { path: 'signIn', component       : SignInComponent },
  { path: 'signUp', component       : SignUpComponent },
  { path: 'cart', component         : CartComponent },
  { path: 'products', component     : ProductsComponent },
  { path: 'admin-panel-home', component: HomeAdminPanelComponent },
  { path: 'user-profile/:id', component: UserProfilComponent, canActivate: [AuthGuard] },
  { path: 'detailProduct', component: DetailProductComponent },
  { path: 'happyCustomer', component: HappyCustomersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
