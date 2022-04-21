import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import {BookComponent} from "./book.component";
import {MatCardModule} from "@angular/material/card";
import {FlexModule} from "@angular/flex-layout";


@NgModule({
    declarations: [
        BookComponent
    ],
    exports: [
        BookComponent
    ],
    imports: [
        CommonModule,
        BookRoutingModule,
        MatCardModule,
        FlexModule
    ]
})
export class BookModule { }
