import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {ProductComponent} from '../product/product.component';

const routes: Routes = <Routes>[
  {
    path:'',
    component: LayoutComponent,
    children: [
      {
        path:'product',
        component:ProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
