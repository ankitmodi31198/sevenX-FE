import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormStatus, getFormControlValue, getScreenNameDropdownList, getStateList, ScreenNameDropDown, setFormControlValue } from 'src/app/app-utils';
import { LoginGetModel } from 'src/app/service/models/login.model';
import { StartupRegistrationsFormPostModel } from 'src/app/service/models/startup-registrations-form.model';
import { take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { FormPageScreenTitleMap } from '../../form-page/form-page-data';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { PackageListGetModel, PackageListPostModel } from 'src/app/service/models/package-list.model';
import { FormPageScreenCode } from '../../form-page/form-page-constants';
import { GetPackagesService } from 'src/app/service/api/get-packages.service';
import { AddCartService } from 'src/app/service/api/add-cart.service';
import { StartupRegistrationsFormService } from 'src/app/service/api/startup-registrations-form.service';
import { GrowlService } from 'src/common-ui/growl/growl.service';
import { growlMessageType } from 'src/common-ui/growl/growl-constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sevenx-startup-registrations-form',
  templateUrl: './startup-registrations-form.component.html',
  styleUrls: ['./startup-registrations-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StartupRegistrationsFormComponent implements OnInit, OnDestroy {

  @Input()
  isOpenFromContact: boolean = false;

  baseForm: FormGroup;

  screenList: ScreenNameDropDown[] = this.getScreenNameDropdownList();

  filteredScreenList: ScreenNameDropDown[];

  displayWithScreenNameFn = (screen: ScreenNameDropDown) => screen && `${screen.screenName || ''}`;

  stateList: string[] = getStateList();

  filteredStateList: string[] = [];

  selectedScreenPackage: PackageListGetModel;

  formSaveSubscription: Subscription;

  @Output()
  eContactFormSubmit: EventEmitter<void> = new EventEmitter();

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private getPackagesService: GetPackagesService,
    private addCartService: AddCartService,
    private startupRegistrationsFormService: StartupRegistrationsFormService,
    private growlService: GrowlService,
    private router: Router
  ) {
    this.init();
    this.formSaveSubscription = this.addCartService.eFormSave.subscribe((response) => {
      if (response && (response.status === 200) && this.isOpenFromContact) {
        this.eContactFormSubmit.emit();
      }
    })
  }

  init() {
    this.initBaseForm();
    this.setActivatedRouteSubscription();
  }

  initBaseForm() {
    this.baseForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contactNo: ['', Validators.required],
      state: ['', Validators.required],
      screenName: ['', Validators.required]
    });
    this.autoPopulateFormData();
  }

  autoPopulateFormData() {
    const userDetails: LoginGetModel = this.authService && this.authService.userDetails;
    if (userDetails) {
      setFormControlValue('name', userDetails.firstName, this.baseForm);
      setFormControlValue('email', this.authService.loginUser, this.baseForm);
      setFormControlValue('contactNo', userDetails.phoneNo, this.baseForm);
      setFormControlValue('state', userDetails.state, this.baseForm);
    }
  }

  setActivatedRouteSubscription() {
    this.activatedRoute.queryParams.subscribe((value) => {
      this.selectedScreenPackage = null;
      if (!this.isOpenFromContact && value && value.screenCode) {
        this.setScreenNameFormControlValue(FormPageScreenTitleMap[value.screenCode]);
        this.setSelectedScreenPackage(value.screenCode);
      }
    });
  }

  setSelectedScreenPackage(selectedScreenCode: FormPageScreenCode) {
    if (selectedScreenCode) {
      const postModel: PackageListPostModel = new PackageListPostModel();
      postModel.screenNameList = [
        selectedScreenCode
      ];
      this.getPackagesService.post(postModel.toRemote(postModel))
        .pipe(take(1))
        .subscribe((response) => {
          if (response && response.status && (response.status === 200) && response.data && response.data.length) {
            this.selectedScreenPackage = new PackageListGetModel().toLocal(response.data[0]);
          }
        });
    }
  }

  screenNameInputChangeHandler(searchedValue: string) {
    searchedValue = searchedValue ? searchedValue.toLowerCase().trim() : '';
    this.filteredScreenList = this.screenList.filter((screen: ScreenNameDropDown) => {
      return screen && screen.screenName && screen.screenName.toLowerCase().includes(searchedValue);
    });
  }

  screenNameFieldCloseHandler(screenNameInputElement: HTMLInputElement) {
    if (screenNameInputElement) {
      this.setScreenNameFormControlValue(screenNameInputElement.value);
      screenNameInputElement.blur();
    }
  }

  setScreenNameFormControlValue(searchedString: string) {
    searchedString = searchedString ? searchedString.toLowerCase().trim() : '';
    let matchedValue: ScreenNameDropDown = null;
    if (searchedString) {
      matchedValue = this.screenList.find((screen: ScreenNameDropDown) => {
        return screen && screen.screenName && screen.screenName.toLowerCase() === searchedString;
      }) || null;
    }
    setFormControlValue('screenName', matchedValue, this.baseForm);
  }

  stateInputChangeHandler(searchedValue: string) {
    searchedValue = searchedValue ? searchedValue.toLowerCase().trim() : '';
    this.filteredStateList = this.stateList.filter((state: string) => {
      return state && state.toLowerCase().includes(searchedValue);
    });
  }

  stateFieldCloseHandler(stateInputElement: HTMLInputElement) {
    if (stateInputElement) {
      const searchedString = stateInputElement.value ? stateInputElement.value.toLowerCase().trim() : '';
      let matchedValue: string = null;
      if (searchedString) {
        matchedValue = this.stateList.find((state: string) => {
          return state && state.toLowerCase() === searchedString;
        }) || null;
      }
      setFormControlValue('state', matchedValue, this.baseForm);
      stateInputElement.blur();
    }
  }

  ngOnInit() {

  }

  registerClickHandler() {
    if (this.baseForm && this.baseForm.status && this.baseForm.status.toUpperCase() === FormStatus.INVALID.toUpperCase()) {
      return;
    } else {
      const startupRegistrationsFormPostModel = new StartupRegistrationsFormPostModel().toRemote({
        name: getFormControlValue('name', this.baseForm),
        email: getFormControlValue('email', this.baseForm),
        contactNo: getFormControlValue('contactNo', this.baseForm),
        state: getFormControlValue('state', this.baseForm),
        screenName: getFormControlValue('screenName', this.baseForm).screenCode
      });
      this.registerRequest(startupRegistrationsFormPostModel);
    }
  }

  registerRequest(startupRegistrationsFormPostModel) {
    if (this.selectedScreenPackage && !this.isOpenFromContact) {
      this.addCartService.addItemInCart(this.selectedScreenPackage, startupRegistrationsFormPostModel);
    } else {
      this.startupRegistrationsFormService.post(startupRegistrationsFormPostModel).subscribe((response) => {
        if (response && response.status === 200) {
          this.growlService.showGrowlMessage({
            message: 'We will get back to you soon.',
            messageType: growlMessageType.SUCCESS,
            messageTitle: 'Thank you!'
          });
          setTimeout(() => {
            // this.router.navigate(['']);
            this.eContactFormSubmit.emit();
          }, 2000);
        } else {
          this.growlService.errorMessageGrowl();
        }
      }, () => {
        this.growlService.errorMessageGrowl();
      });
    }
  }

  ngOnDestroy(): void {
    if (this.formSaveSubscription) {
      this.formSaveSubscription.unsubscribe();
    }
  }

  getScreenNameDropdownList() {
    const screens = getScreenNameDropdownList();
    screens.push({
      screenCode: 'Other',
      screenName: 'Other'
    })
    return screens;
  }
}
