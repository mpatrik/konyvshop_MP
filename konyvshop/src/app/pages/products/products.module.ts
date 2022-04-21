import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import {ProductsComponent} from "./products.component";
import {ExtendedModule, FlexModule} from "@angular/flex-layout";
import {MatIconModule} from "@angular/material/icon";
import {BookModule} from "./book/book.module";


@NgModule({
  declarations: [
    ProductsComponent
  ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        FlexModule,
        ExtendedModule,
        MatIconModule,
        BookModule
    ]
})
export class ProductsModule { }
