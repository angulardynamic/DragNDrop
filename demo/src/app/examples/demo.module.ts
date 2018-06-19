// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PrismComponent } from 'angular-prism';

import { DndModule } from 'ng2-dnd';
// import { routes, dndComponents, sortableComponents } from './demo-dnd.router';

import { CustomDataComponent } from './dnd/custom-data/custom-data.component';
import { CustomFunctionComponent } from './dnd/custom-function/custom-function.component';
import { ShoppingBasketComponent } from './dnd/shopping-basket/shopping-basket.component';
import { DndSimpleComponent } from './dnd/simple/dnd-simple.component';
import { SimpleDemoComponent } from './dnd/simple/simple-demo.component';
import { ZoneComponent } from './dnd/zone/zone.component';
import { EmbeddedComponent } from './sortable/embedded/embedded.component';
import { MultiComponent } from './sortable/multi/multi.component';
import { RecycleMultiComponent } from './sortable/recycle-multi/recycle-multi.component';
import { SimpleSortableCopyComponent } from './sortable/simple-sortable-copy/simple-sortable-copy.component';
import { SimpleComponent } from './sortable/simple/simple.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DndModule.forRoot(),
        // RouterModule.forChild(routes)
    ],
    declarations: [
        // PrismComponent,
        // ...dndComponents,
        // ...sortableComponents
        SimpleDemoComponent, SimpleComponent, ZoneComponent, CustomDataComponent, CustomFunctionComponent,
        ShoppingBasketComponent, SimpleComponent, MultiComponent, RecycleMultiComponent, EmbeddedComponent,
        SimpleSortableCopyComponent, DndSimpleComponent, PrismComponent
    ],
    exports: [
        // ...dndComponents, ...sortableComponents
        SimpleDemoComponent, SimpleComponent, ZoneComponent, CustomDataComponent, CustomFunctionComponent,
        ShoppingBasketComponent, SimpleComponent, MultiComponent, RecycleMultiComponent, EmbeddedComponent,
        SimpleSortableCopyComponent, DndSimpleComponent, DndModule
    ]
})
export class DemoDndModule {
}

