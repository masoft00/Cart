import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


/* Angular Material */
import { MaterialModule } from './material/angular-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { ProductsComponent } from './components/products/products.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { CompatibilityComponent } from './components/compatibility/compatibility.component';

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
    AdminPanelComponent,
    DetailProductComponent,
    CompatibilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
