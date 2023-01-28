import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageMainComponent} from "./page-main/page-main.component";
import {PageProductListComponent} from "./page-product-list/page-product-list.component";
import {PageProductFormComponent} from "./page-product-form/page-product-form.component";

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: PageMainComponent},
  {path: "product-list", component: PageProductListComponent},
  {path: "product-form", component: PageProductFormComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
