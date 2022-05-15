import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

export interface ReasonAnimationMap {
  reason: string;
  animation: AnimationOptions;
}

@Component({
  selector: 'sevenx-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  currentSelectedOptionIndex: number = 0;

  reasonAnimationMap: ReasonAnimationMap[] = [
    {
      reason: "One stop solution for Startups",
      animation: {
        path: 'assets/one_stop_solution.json'
      }
    },
    {
      reason: "Expert Assistance",
      animation: {
        path: 'assets/expert_assistance.json'
      }
    },
    {
      reason: "Confidential & Safe",
      animation: {
        path: 'assets/confiential_and_safe.json'
      }
    },
    {
      reason: "No Hidden Charges",
      animation: {
        path: 'assets/no_hidden_charges.json'
      }
    },
    {
      reason: "DPIIT Recognized Startup",
      animation: {
        path: 'assets/recognized_startup.json'
      }
    },
    {
      reason: "Transparent",
      animation: {
        path: 'assets/transparent.json'
      }
    },
  ]

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if (this.currentSelectedOptionIndex === 5) {
        this.currentSelectedOptionIndex = 0;
      } else {
        this.currentSelectedOptionIndex++;
      }
    }, 5000)
  }

}
