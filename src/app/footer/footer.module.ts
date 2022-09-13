import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { SharedModule } from 'src/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FooterSocialMediaHandlesModule } from './footer-social-media-handles/footer-social-media-handles.module';
import { FooterNavigationModule } from './footer-navigation/footer-navigation.module';
import { FooterFaqModule } from './footer-faq/footer-faq.module';
import { FooterCopyrightComponent } from './footer-copyright/footer-copyright.component';

@NgModule({
  declarations: [
    FooterComponent,
    FooterCopyrightComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FooterFaqModule,
    FooterNavigationModule,
    FooterSocialMediaHandlesModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
