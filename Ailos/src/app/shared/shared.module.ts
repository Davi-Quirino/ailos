import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { CheckIdentityComponent } from './components/check-identity/check-identity.component';
import { FooterSearchComponent } from './components/footer-search/footer-search.component';
import { InformationConsultComponent } from './components/information-consult/information-consult.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [
    TimelineComponent,
    CheckIdentityComponent,
    InformationConsultComponent,
    CardComponent,
    FooterSearchComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [
    MaterialModule,
    TimelineComponent,
    CheckIdentityComponent,
    InformationConsultComponent,
    CardComponent,
    FooterSearchComponent,
  ],
})
export class SharedModule {}
