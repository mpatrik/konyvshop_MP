import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import {ProductsComponent} from "./products.component";
import {ExtendedModule, FlexModule} from "@angular/flex-layout";
import {MatIconModule} from "@angular/material/icon";
import {SearchFilterPipe} from "../../shared/pipes/search-filter.pipe";


@NgModule({
  declarations: [
    ProductsComponent,
    SearchFilterPipe
  ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        FlexModule,
        ExtendedModule,
        MatIconModule,
    ]
})
export class ProductsModule { }
