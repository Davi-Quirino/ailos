import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultComponent } from './consult/consult.component';
import { UserInfosComponent } from './user-infos/user-infos.component';

const routes: Routes = [
  { path: '', component: ConsultComponent },
  { path: 'user-infos', component: UserInfosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
