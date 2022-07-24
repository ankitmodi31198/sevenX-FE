import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitalMarketingComponent } from './digital-marketing.component';
import { SharedModule } from 'src/shared/shared.module';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    DigitalMarketingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  exports: [
    DigitalMarketingComponent
  ]
})
export class DigitalMarketingModule { }
