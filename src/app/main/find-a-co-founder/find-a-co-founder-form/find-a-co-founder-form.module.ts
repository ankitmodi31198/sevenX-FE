import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindACoFounderFormComponent } from './find-a-co-founder-form.component';
import { GrowlModule } from 'src/common-ui/growl/growl.module';
import { SharedModule } from 'src/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FindACoFounderService } from 'src/app/service/api/find-a-co-founder.service';
import { CoFounderDocsService } from 'src/app/service/api/co-founder-docs.service';



@NgModule({
  declarations: [
    FindACoFounderFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    GrowlModule
  ],
  exports: [
    FindACoFounderFormComponent
  ],
  providers: [
    FindACoFounderService,
    CoFounderDocsService
  ]
})
export class FindACoFounderFormModule { }
