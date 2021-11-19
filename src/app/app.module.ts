import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlowerComponent } from './flower/flower.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {Route, RouterModule} from '@angular/router';
import { FlowerService } from './services/flowerService';
import { Userservice } from './services/userservice';

var myRoutes:Route[]=[
  {path:'register',component:RegisterComponent},
  {path:'flower',component:FlowerComponent},
  {path:'order',component:OrderComponent},
  {path:'cart',component:CartComponent},
  {path:'login',component:LoginComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    FlowerComponent,
    OrderComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [FlowerService,Userservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
