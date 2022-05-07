import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import {CartComponent} from "./cart.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {ExtendedModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


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
        ExtendedModule,
        MatInputModule,
        ReactiveFormsModule,
        MatRadioModule
    ]
})
export class CartModule { }
