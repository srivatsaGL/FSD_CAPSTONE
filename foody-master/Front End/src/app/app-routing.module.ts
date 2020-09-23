import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { DetailsComponent } from './components/foodcart/restaurant/details/details.component';
import { FoodcartComponent } from './components/foodcart/foodcart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { Role } from './model/role';
import { DetailComponent } from './components/detail/detail.component';
import { AdminComponent } from './components/admin/admin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UnathorizedComponent } from './components/unathorized/unathorized.component';
import { CartComponent } from './components/foodcart/restaurant/cart/cart.component';
import { AboutComponent } from './components/foodcart/about/about.component';
import { OrderComponent } from './components/foodcart/restaurant/order/order.component';
import { SummaryComponent } from './components/foodcart/restaurant/order/summary/summary.component';
import { AddrestaurantComponent } from './components/admin/addrestaurant/addrestaurant.component';
import { AdminregisterComponent } from './components/register/adminregister/adminregister.component';
import { AdminloginComponent } from './components/login/adminlogin/adminlogin.component';
import { AddfoodComponent } from './components/admin/addfood/addfood.component';
import { EditRestaurantComponent } from './components/admin/edit-restaurant/edit-restaurant.component';


const routes: Routes = [
  // {path: 'details/', component:DetailsComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'foodapp',component: FoodcartComponent},
  {path: 'summary',component: SummaryComponent},
  {path: 'addrestaurant',component: AddrestaurantComponent},
  {path: 'editrestaurant',component: EditRestaurantComponent},
  {path: 'addfood',component: AddfoodComponent},
  {path: 'registeradmin',component: AdminregisterComponent},
  {path: '',redirectTo: '/foodapp',pathMatch: 'full'},
  // {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'adminlogin', component: AdminloginComponent},
  {path:'register', component: RegisterComponent},
  {path: 'cart', component:CartComponent},
  {path: 'order', component:OrderComponent},
  //user+admin
  {path:'profile',
  component: ProfileComponent,
  canActivate: [AuthGuard],
  data: {roles: [Role.USER, Role.ADMIN]}
  },
  {path:'detail/:id',
  component:DetailComponent,
  canActivate: [AuthGuard],
  data: {roles: [Role.ADMIN]}
  },
  {path:'admin',
  component: AdminComponent,
  canActivate: [AuthGuard],
  data: {roles: [Role.ADMIN]}
  },
  {path: 'addrestaurant',
  component:AddrestaurantComponent,
  canActivate: [AuthGuard],
  data: {roles: [Role.ADMIN]}
  },
  //public error pages.
  {path:'404', component: NotFoundComponent},
  {path:'401', component: UnathorizedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    //For unkhown pages
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['/404']);
    }
  }
 }
