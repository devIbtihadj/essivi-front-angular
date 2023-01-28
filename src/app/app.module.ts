import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { SecurityModule } from './security/security.module';
import { TemplateModule } from './template/template.module';
import { SecurityGuard } from './security/security.guard';
import { CustomHttpInterceptor } from './http-interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    TemplateModule,
    SecurityModule,
    NgbModule,
    ToastrModule.forRoot({
      timeOut : 2500,
      progressBar : true,
    }),
  ],
  providers: [
    SecurityGuard,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : CustomHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
