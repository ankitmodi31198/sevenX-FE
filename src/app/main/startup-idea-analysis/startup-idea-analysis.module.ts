import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StartupIdeaAnalysisService } from 'src/app/service/api/startup-idea-analysis.service';
import { StartupIdeaDocsService } from 'src/app/service/api/startup-idea-docs.service';
import { GrowlModule } from 'src/common-ui/growl/growl.module';
import { SharedModule } from 'src/shared/shared.module';
import { StartupIdeaAnalysisComponent } from './startup-idea-analysis.component';



@NgModule({
  declarations: [
    StartupIdeaAnalysisComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    GrowlModule
  ],
  exports: [
    StartupIdeaAnalysisComponent
  ],
  providers: [
    StartupIdeaAnalysisService,
    StartupIdeaDocsService
  ]
})
export class StartupIdeaAnalysisModule { }
