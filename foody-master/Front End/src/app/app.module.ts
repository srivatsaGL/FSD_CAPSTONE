import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { FoodcartComponent } from './components/foodcart/foodcart.component';
import { JumbotronComponent } from './components/foodcart/jumbotron/jumbotron.component';
import { RestaurantComponent } from './components/foodcart/restaurant/restaurant.component';
import { DetailsComponent } from './components/foodcart/restaurant/details/details.component';
import { CartComponent } from './components/foodcart/restaurant/cart/cart.component';
import { MenuComponent } from './components/foodcart/restaurant/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DetailComponent } from './components/detail/detail.component';
import { AdminComponent } from './components/admin/admin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UnathorizedComponent } from './components/unathorized/unathorized.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CartItemComponent } from './components/foodcart/restaurant/cart-item/cart-item.component';
import { AdminService } from './services/admin.service';
import { UserService } from './services/user.service';
import { RestaurantService } from './services/restaurant.service';
import { FoodService } from './services/food.service';
import { CartService } from './services/cart.service';
import { AboutComponent } from './components/foodcart/about/about.component';
import { OrderComponent } from './components/foodcart/restaurant/order/order.component';
import { SummaryComponent } from './components/foodcart/restaurant/order/summary/summary.component';
import { AddrestaurantComponent } from './components/admin/addrestaurant/addrestaurant.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminregisterComponent } from './components/register/adminregister/adminregister.component';
import { AdminloginComponent } from './components/login/adminlogin/adminlogin.component';
import { AddfoodComponent } from './components/admin/addfood/addfood.component';
import { EditRestaurantComponent } from './components/admin/edit-restaurant/edit-restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    FoodcartComponent,
    JumbotronComponent,
    RestaurantComponent,
    DetailsComponent,
    CartComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DetailComponent,
    AdminComponent,
    NotFoundComponent,
    UnathorizedComponent,
    CartItemComponent,
    AboutComponent,
    OrderComponent,
    SummaryComponent,
    AddrestaurantComponent,
    AdminregisterComponent,
    AdminloginComponent,
    AddfoodComponent,
    EditRestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [AdminService, UserService, RestaurantService, FoodService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
