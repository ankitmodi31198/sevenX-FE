import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/shared/shared.module';
import { LocalstorageService } from './service/local-storage/localstorageservice.service';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './app-routing/auth-interceptor.service';
import { environment } from 'src/environments/environment';
import { BASE_URL } from './service/base-service/base-url';
import { LoginSignupModule } from './login-signup/login-signup.module';
import { AuthService } from './service/auth-service/auth.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginSignupModule,
    MainModule,
    BrowserAnimationsModule,
    SharedModule,
    HeaderModule,
    FooterModule,
    HttpClientModule,
  ],
  providers: [
    LocalstorageService,
    {
      provide: BASE_URL,
      useValue: environment.baseUrl,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    AuthService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
