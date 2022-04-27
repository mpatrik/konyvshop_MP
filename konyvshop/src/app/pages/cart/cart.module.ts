import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import {CartComponent} from "./cart.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {ExtendedModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    CartComponent
  ],
    imports: [
        CommonModule,
        CartRoutingModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        ExtendedModule
    ]
})
export class CartModule { }
