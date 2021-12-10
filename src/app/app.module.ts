import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* Angular Material */
import { MaterialModule } from './material/angular-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { ProductsComponent } from './components/products/products.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { CompatibilityComponent } from './components/compatibility/compatibility.component';
import { HappyCustomersComponent } from './components/happy-customers/happy-customers.component';
import { GraphQLModule } from './graphql.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserProfilComponent } from './components/user-profil/user-profil.component';
import { HomeAdminPanelComponent } from './components/admin-panel/home-admin-panel/home-admin-panel.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    ScrollToTopComponent,
    ProductsComponent,
    DetailProductComponent,
    CompatibilityComponent,
    HappyCustomersComponent,
    UserProfilComponent,
    HomeAdminPanelComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    GraphQLModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
