import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserService} from './shared/user.service';
import {LoginComponent} from './pages/login/login.component';
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BasicAuthInterceptor} from './helper/basic-auth.interceptor';
import {ErrorInterceptor} from './helper/error.interceptor';
import {FakeBackendInterceptor} from './helper/fake-backend';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService,
    {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
