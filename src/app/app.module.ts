import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './modules/main/app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptorService } from './interceptors/token-interceptor.service';


import { LoaderService } from './modules/shared/services/loader.service';
import { LoaderInterceptorService } from './interceptors/loader-interceptor.service';
import { LoaderComponent } from './modules/shared/components/loader/loader.component';

import { ProgressBarMode, MatProgressBarModule} from '@angular/material/progress-bar'
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [
    LoaderService, 
    {     
      provide: HTTP_INTERCEPTORS,  
      useClass: LoaderInterceptorService, 
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: TokenInterceptorService, 
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
  }
}
