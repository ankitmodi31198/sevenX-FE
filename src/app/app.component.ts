import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { filter, take } from 'rxjs/operators';
import { MAIN_LAODER_ID } from './app-utils';
import { ContactUsComponent } from './main/contact-us/contact-us.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '7X';

  constructor(
    private router: Router,
    private ngxUILoaderService: NgxUiLoaderService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((value) => {
      this.startLoader();
    })
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((value) => {
      this.stopLoader();
    })
  }

  private startLoader() {
    this.ngxUILoaderService.startLoader(MAIN_LAODER_ID);
  }

  private stopLoader() {
    this.ngxUILoaderService.stopLoader(MAIN_LAODER_ID);
  }

  contactUsClickHandler() {
    // this.router.navigate(['/contact-us']);
    const config: MatDialogConfig = {
      panelClass: 'sevenx-contact-us-modal', 
      closeOnNavigation: true, 
      maxWidth: '500px',
      autoFocus: false,
      restoreFocus: false
    }
    this.matDialog.open(ContactUsComponent, config)
      .afterClosed()
      .pipe(take(1))
      .subscribe();
  }

}
