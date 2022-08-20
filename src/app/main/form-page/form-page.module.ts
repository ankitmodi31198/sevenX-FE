import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPageComponent } from './form-page.component';
// import { NgxPageScrollModule } from 'ngx-page-scroll';
import { FormPageDataService } from './form-page-data.service';
import { StartupRegistrationsFormModule } from '../startup-registrations/startup-registrations-form/startup-registrations-form.module';
import { PlansModule } from '../home/plans/plans.module';
import { GetPackagesService } from 'src/app/service/api/get-packages.service';
import { ComingSoonModule } from 'src/common-ui/coming-soon/coming-soon.module';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { DigitalMarketingModule } from '../digital-marketing/digital-marketing.module';
import { FindACoFounderFormModule } from '../find-a-co-founder/find-a-co-founder-form/find-a-co-founder-form.module';
import { StartupIdeaAnalysisModule } from '../startup-idea-analysis/startup-idea-analysis.module';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    FormPageComponent
  ],
  imports: [
    CommonModule,
    StartupRegistrationsFormModule,
    PlansModule,
    ComingSoonModule,
    LottieModule.forRoot({ player: playerFactory }),
    // NgxPageScrollModule
    DigitalMarketingModule,
    FindACoFounderFormModule,
    StartupIdeaAnalysisModule
  ],
  exports: [
    FormPageComponent
  ],
  providers: [
    FormPageDataService,
    GetPackagesService
  ]
})
export class FormPageModule { }
