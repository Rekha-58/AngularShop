import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { AddnewproductComponent } from './addnewproduct/addnewproduct.component';
import { UpdateComponent } from './update/update.component';
import { UserComponent } from './user/user.component';
/*import { AddProductComponent } from './add-product/add-product.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';*/

export const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:LayoutComponent,
    children: [
      {
        path:'products',
        component:ProductsComponent
      },
      {path:'product-detail/:productid',
       component: ProductDetailComponent},
       {path:'cartpage', 
       component:CartPageComponent},
       {path:'addnewprod',component:AddnewproductComponent},
       {path:'update/:id',
      component:UpdateComponent},
      {path:'user',component:UserComponent}
     ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  }
