import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
import { AngularFireModule } from '@angular/fire/compat';


const firebaseConfig = {
  apiKey: "AIzaSyDiJcltSsYPUC0G8OBvItxsi8tPJ53Vn_4",
  authDomain: "chatlogin-791f1.firebaseapp.com",
  projectId: "chatlogin-791f1",
  storageBucket: "chatlogin-791f1.appspot.com",
  messagingSenderId: "963772833772",
  appId: "1:963772833772:web:a76fdcb9809047f3226ac9",
  measurementId: "G-WVRRF42D6M"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    JwtHelperService,
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
