import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'sevenx-digital-marketing',
  templateUrl: './digital-marketing.component.html',
  styleUrls: ['./digital-marketing.component.scss']
})
export class DigitalMarketingComponent implements OnInit {

  webDevelopmentAnimationOption: AnimationOptions = {
    path: 'assets/web_development.json'
  };

  webDesigningAnimationOption: AnimationOptions = {
    path: 'assets/web_design.json'
  };

  digitalMarketingtAnimationOption: AnimationOptions = {
    path: 'assets/digital_marketing.json'
  };

  brandingAnimationOption: AnimationOptions = {
    path: 'assets/branding.json'
  };

  ecommerceAnimationOption: AnimationOptions = {
    path: 'assets/ecommerce.json'
  };

  logoDesigningAnimationOption: AnimationOptions = {
    path: 'assets/logo_design.json'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
