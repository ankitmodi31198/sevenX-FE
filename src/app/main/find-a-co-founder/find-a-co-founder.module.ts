import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindACoFounderComponent } from './find-a-co-founder.component';
import { ComingSoonModule } from 'src/common-ui/coming-soon/coming-soon.module';
import { FindACoFounderFormModule } from './find-a-co-founder-form/find-a-co-founder-form.module';



@NgModule({
  declarations: [
    FindACoFounderComponent
  ],
  imports: [
    CommonModule,
    ComingSoonModule,
    FindACoFounderFormModule
  ],
  exports: [
    FindACoFounderComponent
  ]
})
export class FindACoFounderModule { }
