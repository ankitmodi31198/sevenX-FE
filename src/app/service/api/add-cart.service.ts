import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { LoginSignupDialogComponent } from 'src/app/login-signup/login-signup-dialog/login-signup-dialog.component';
import { GrowlService } from 'src/common-ui/growl/growl.service';
import { AuthService } from '../auth-service/auth.service';
import { BaseService } from '../base-service/base.service';
import { AddCartPostModel } from '../models/add-cart.model';
import { PackageListGetModel } from '../models/package-list.model';
import { PackagesListGetModel } from '../models/packages-list.model';
import { StartupRegistrationsFormPostModel } from '../models/startup-registrations-form.model';
import { CartDetailsService } from './cart-details.service';
import { StartupRegistrationsFormService } from './startup-registrations-form.service';

@Injectable({
  providedIn: 'root'
})
export class AddCartService extends BaseService {
  urlPath: string = 'addCart';

  eFormSave: Subject<any> = new Subject();

  constructor(
    protected httpClient: HttpClient,
    protected injector: Injector,
    private startupRegistrationsFormService: StartupRegistrationsFormService,
    private authService: AuthService,
    private matDialog: MatDialog,
    private growlService: GrowlService,
    private cartDetailsService: CartDetailsService
  ) {
    super(httpClient, injector);
  }

  addItemInCart(selectedPackage: PackageListGetModel | PackagesListGetModel, requestModel: StartupRegistrationsFormPostModel = null) {
    if (selectedPackage && selectedPackage.id) {
      if (this.authService.userDetails) {
        this.performActionsWhenUserLoggedIn(selectedPackage, requestModel);
      } else {
        this.openLoginSignupDialog(selectedPackage, requestModel);
      }
    }
  }

  private openLoginSignupDialog(selectedPackage: PackageListGetModel | PackagesListGetModel, requestModel: StartupRegistrationsFormPostModel = null) {
    this.matDialog.open(LoginSignupDialogComponent, {
      disableClose: true,
      minWidth: '350px'
    }).afterClosed().subscribe(() => {
      if (this.authService.userDetails) {
        this.performActionsWhenUserLoggedIn(selectedPackage, requestModel);
      } else {
        if (requestModel) {
          return this.formAPIRequest(requestModel);
        }
        this.growlService.warnMessageGrowl('Please login to add Service in cart.', 'Login Alert')
      }
    })
  }

  private performActionsWhenUserLoggedIn(selectedPackage: PackageListGetModel | PackagesListGetModel, requestModel: StartupRegistrationsFormPostModel = null) {
    if (!requestModel) {
      requestModel.name = this.authService.userDetails.firstName;
      requestModel.contactNo = this.authService.userDetails.phoneNo;
      requestModel.email = this.authService.userDetails.username;
      requestModel.state = this.authService.userDetails.state;
      requestModel.screenName = selectedPackage.screenName;
    }
    this.formAPIRequest(requestModel);
    this.addSelectedItemInUserCart(selectedPackage.id);
  }

  formAPIRequest(requestModel) {
    this.startupRegistrationsFormService.post(requestModel)
      .pipe(take(1))
      .toPromise()
      .then((response) => {
        if (response && response.status === 200) {
          this.eFormSave.next(response);
        }
      });
  }

  private addSelectedItemInUserCart(selectedPackageId: number) {
    const postModel = new AddCartPostModel().toRemote({
      packageId: selectedPackageId
    });
    this.post(postModel)
      .pipe(take(1))
      .subscribe((response) => {
        if (response && response.status && response.status === 200) {
          this.growlService.successMessageGrowl('Item added to cart.');
          this.cartDetailsService.fetchCartDetails();
        } else {
          this.growlService.errorMessageGrowl();
        }
      });
  }
}
