import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { UserModule } from './user/user.module';
import { CoreModule } from './core/core.module';
import { ClarityModule } from '@clr/angular';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule,HttpClientModule,CoreModule,ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
