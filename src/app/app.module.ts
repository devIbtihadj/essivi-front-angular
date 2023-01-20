import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EssiviModule} from "./essivi/essivi.module";
import {LayoutsModule} from "./layouts/layouts.module";
import {SecurityModule} from "./security/security.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EssiviModule,
    LayoutsModule,
    SecurityModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
