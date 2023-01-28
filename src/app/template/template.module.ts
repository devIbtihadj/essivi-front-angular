import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { BrowserModule } from '@angular/platform-browser';


import {RouterModule} from "@angular/router";
import { EssiviModule } from '../essivi/essivi.module';
import { LayoutsModule } from '../layouts/layouts.module';
import { TemplateRoutingModule } from './template-routing.module';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    TemplateComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    EssiviModule,
    LayoutsModule,
    RouterModule,
    NgbPaginationModule,
    NgbModule,
    TemplateRoutingModule
  ], exports:[
    TemplateComponent
  ]
})
export class TemplateModule { }
