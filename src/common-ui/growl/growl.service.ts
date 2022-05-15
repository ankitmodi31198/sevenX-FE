import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { growlMessageType } from './growl-constants';
import { GrowlComponent } from './growl.component';
import { GrowlComponentDataInterface } from './growl.interface';

@Injectable()
export class GrowlService {

  private growlMessageSnackBarConfig: MatSnackBarConfig<GrowlComponentDataInterface> = {
    horizontalPosition: 'right',
    verticalPosition: 'top',
    duration: 3000
  }

  constructor(
    private snackBar: MatSnackBar
  ) { }

  showGrowlMessage(growlData: GrowlComponentDataInterface, growlConfig?: MatSnackBarConfig<GrowlComponentDataInterface>) {
    growlConfig = growlConfig ? Object.assign(this.growlMessageSnackBarConfig, growlConfig) : this.growlMessageSnackBarConfig;
    growlConfig.data = growlConfig.data ? Object.assign(growlConfig.data, growlData) : growlData;
    this.snackBar.openFromComponent(GrowlComponent, growlConfig);
  }

  successMessageGrowl(message: string) {
    this.showGrowlMessage({ message: message, messageType: growlMessageType.SUCCESS });
  }

  errorMessageGrowl(message: string = 'An Error occured, please contact Admin') {
    this.showGrowlMessage({ message: message, messageType: growlMessageType.ERROR });
  }

  warnMessageGrowl(message: string, messageTitle?: string) {
    this.showGrowlMessage({ message: message, messageType: growlMessageType.WARN });
    if (messageTitle) {
      this.showGrowlMessage({ message: message, messageType: growlMessageType.WARN, messageTitle });
    }
  }

  infoMessageGrowl(message: string) {
    this.showGrowlMessage({ message: message, messageType: growlMessageType.INFO });
  }

}
