import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { MyAccountModule } from './my-account/my-account.module';
import { SharedModule } from 'src/shared/shared.module';
import { HomeModule } from './home/home.module';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { StartupRegistrationsModule } from './startup-registrations/startup-registrations.module';
import { CartModule } from './cart/cart.module';
import { FormPageModule } from './form-page/form-page.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { ConsultantListComponent } from './consultant-list/consultant-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateOrderListOrderModule } from './update-order-list-order/update-order-list-order.module';
import { NgxUiLoaderModule, SPINNER } from 'ngx-ui-loader';
import { StartupIdeaAnalysisModule } from './startup-idea-analysis/startup-idea-analysis.module';
import { FundingInvestorAgreementsModule } from './funding-investor-agreements/funding-investor-agreements.module';
import { StartupValuationsModule } from './startup-valuations/startup-valuations.module';
import { FindACoFounderModule } from './find-a-co-founder/find-a-co-founder.module';
import { DigitalMarketingModule } from './digital-marketing/digital-marketing.module';
import { StartupIdeaListComponent } from './startup-idea-list/startup-idea-list.component';
import { FindCoFounderListComponent } from './find-co-founder-list/find-co-founder-list.component';


@NgModule({
  declarations: [
    MainComponent,
    ConsultantListComponent,
    OrderListComponent,
    StartupIdeaListComponent,
    FindCoFounderListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
    HeaderModule,
    FooterModule,
    MyAccountModule,
    HomeModule,
    StartupRegistrationsModule,
    CartModule,
    FormPageModule,
    ContactUsModule,
    ReactiveFormsModule,
    UpdateOrderListOrderModule,
    NgxUiLoaderModule.forRoot({
      fgsType: SPINNER.doubleBounce,
      fgsColor: "#aaaaaa",
      fgsSize: 80,
      overlayColor: "rgba(255,255,255,0.6)",
      hasProgressBar: false
    }),
    StartupIdeaAnalysisModule,
    FundingInvestorAgreementsModule,
    StartupValuationsModule,
    FindACoFounderModule,
    DigitalMarketingModule
  ]
})
export class MainModule { }
