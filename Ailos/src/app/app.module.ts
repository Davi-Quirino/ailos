import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { ConsultComponent } from './consult/consult.component';
import { HeaderComponent } from './Core/header/header.component';
import { NavListComponent } from './Core/nav-list/nav-list.component';
import { SharedModule } from './shared/shared.module';
import { UserInfosComponent } from './user-infos/user-infos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConsultComponent,
    NavListComponent,
    UserInfosComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [AppService],
  exports: [ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
