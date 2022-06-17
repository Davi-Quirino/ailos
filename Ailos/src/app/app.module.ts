import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Core/header/header.component';
import { SharedModule } from './shared/shared.module';
import { ConsultComponent } from './consult/consult.component';
import { NavListComponent } from './Core/nav-list/nav-list.component';
import { UserInfosComponent } from './user-infos/user-infos.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ConsultComponent, NavListComponent, UserInfosComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
