import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckIdentityComponent } from './components/check-identity/check-identity.component';
import { InformationConsultComponent } from './components/information-consult/information-consult.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [
    TimelineComponent,
    CheckIdentityComponent,
    InformationConsultComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [
    MaterialModule,
    TimelineComponent,
    CheckIdentityComponent,
    InformationConsultComponent,
  ],
})
export class SharedModule {}
