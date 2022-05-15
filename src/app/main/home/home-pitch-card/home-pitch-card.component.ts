import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'sevenx-home-pitch-card',
  templateUrl: './home-pitch-card.component.html',
  styleUrls: ['./home-pitch-card.component.scss']
})
export class HomePitchCardComponent implements OnInit {

  bannerBottomAnimationOption: AnimationOptions = {
    path: 'assets/Blogging.json'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
