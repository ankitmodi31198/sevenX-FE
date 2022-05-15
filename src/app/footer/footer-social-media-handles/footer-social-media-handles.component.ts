import { Component, NgZone, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { openUrlInNewTab } from 'src/app/app-utils';

export interface SocialMediaOptionsInterface {
  animationOption: AnimationOptions,
  url: string,
  animationItem: AnimationItem
}

@Component({
  selector: 'sevenx-footer-social-media-handles',
  templateUrl: './footer-social-media-handles.component.html',
  styleUrls: ['./footer-social-media-handles.component.scss']
})
export class FooterSocialMediaHandlesComponent implements OnInit {

  socialMediaOptions: SocialMediaOptionsInterface[] = [
    {
      animationOption: {
        path: 'assets/twitter.json',
        autoplay: false
      },
      url: 'http://twitter.com/7xstartup',
      animationItem: null
    },
    {
      animationOption: {
        path: 'assets/facebook.json',
        autoplay: false
      },
      url: 'http://fb.me/7xstartup',
      animationItem: null
    },
    {
      animationOption: {
        path: 'assets/linked_in.json',
        autoplay: false
      },
      url: 'https://www.linkedin.com/company/7xstartup',
      animationItem: null
    },
    {
      animationOption: {
        path: 'assets/instagram.json',
        autoplay: false
      },
      url: 'https://www.instagram.com/7xstartup',
      animationItem: null
    }
  ];

  emailSocialMediaOption: SocialMediaOptionsInterface = {
    animationOption: {
      path: 'assets/email.json',
      name: 'email',
      autoplay: false
    },
    url: null,
    animationItem: null
  }

  constructor(
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
  }

  openUrlInNewTab(url: string) {
    openUrlInNewTab(url);
  }

  animationCreated(animationItem: AnimationItem, socialMediaOption: SocialMediaOptionsInterface) {
    this.setEmailAnimationSegment(animationItem);
    socialMediaOption.animationItem = animationItem;
  }

  startAnimation(socialMediaOption: SocialMediaOptionsInterface) {
    this.ngZone.runOutsideAngular(() => {
      socialMediaOption.animationItem.play();
    })
  }

  stopAnimation(socialMediaOption: SocialMediaOptionsInterface) {
    this.ngZone.runOutsideAngular(() => {
      this.setEmailAnimationSegment(socialMediaOption.animationItem);
      socialMediaOption.animationItem.stop();
    })
  }

  setEmailAnimationSegment(selectedAnimationItem: AnimationItem) {
    if (selectedAnimationItem && selectedAnimationItem.name === 'email') {
      selectedAnimationItem.setSegment(35, 170);
    }
  }

}
