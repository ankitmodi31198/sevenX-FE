import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'sevenx-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {

  bannerBottomAnimationOption: AnimationOptions = {
    path: 'assets/idea_analysis.json'
  };

  ideaAnalysisAnimationOption: AnimationOptions = {
    path: 'assets/idea_analysis.json'
  };

  coFounderAnimationOption: AnimationOptions = {
    path: 'assets/co_founder.json'
  };

  incorporateStartupAnimationOption: AnimationOptions = {
    path: 'assets/incorporate_your_startup.json'
  };

  websiteDevelopmentAndDigitalMarketingAnimationOption: AnimationOptions = {
    path: 'assets/wesite_development_digital_marketing_1.json'
  };

  legalComplianceAnimationOption: AnimationOptions = {
    path: 'assets/legal_compliance.json'
  };

  startupValuationAnimationOption: AnimationOptions = {
    path: 'assets/startup_valuation.json'
  };

  fundingAnimationOption: AnimationOptions = {
    path: 'assets/funding.json'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
