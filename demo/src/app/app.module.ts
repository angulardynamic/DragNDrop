/* Import prism core */
import 'prismjs/prism';

/* Import the language you need to highlight */
import 'prismjs/components/prism-typescript';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { DndModule } from 'ng2-dnd';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { DemoDndModule } from './examples/demo.module';
import { SharedModule } from './shared/shared.module';

//import { routes } from './app.router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    //RouterModule.forRoot(routes),
    DndModule.forRoot(),
    DemoDndModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
