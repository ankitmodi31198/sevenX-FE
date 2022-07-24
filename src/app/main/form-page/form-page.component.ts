import { Component, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { FooterFaqScreenWiseData, FooterFaqScreenWiseDataModel } from 'src/app/footer/footer-faq/footer-faq-data';
import { GetPackagesService } from 'src/app/service/api/get-packages.service';
import { PackageListGetModel, PackageListPostModel } from 'src/app/service/models/package-list.model';
import { FooterFaqContainerKey, FormPageContainerType, FormPageScreenCode } from './form-page-constants';
import { FormPageScreenWiseData } from './form-page-data';
import { FormPageNavigationContainerModel, FormPageScreenWiseDataModel } from './form-page-interface';


@Component({
  selector: 'sevenx-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit, OnDestroy {

  formPageContainerType = FormPageContainerType;

  activeTab: string;

  selectedServiceScreenCode: FormPageScreenCode;

  selectedServiceScreenData: FormPageScreenWiseDataModel;

  mainScrollableWindowScrollListener: () => void;

  get isDigitalMarketingPage(): boolean {
    return this.selectedServiceScreenCode?.toLowerCase() === FormPageScreenCode.WEBSITE_AND_DIGITAL_MARKETING.toLowerCase();
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private renderer: Renderer2
  ) {
    this.setActivatedRouteSubscription();
  }

  setActivatedRouteSubscription() {
    this.activatedRoute.queryParams.subscribe((value) => {
      if (value && value.screenCode) {
        this.selectedServiceScreenCode = value.screenCode;
        this.loadDataForSelectedService();
      }
    });
  }

  loadDataForSelectedService() {
    if (this.selectedServiceScreenCode && FormPageScreenWiseData[this.selectedServiceScreenCode]) {
      this.selectedServiceScreenData = JSON.parse(JSON.stringify(FormPageScreenWiseData[this.selectedServiceScreenCode]));
      this.addFooterFaqNavigationContainer();
    } else {
      this.selectedServiceScreenData = null;
    }
  }

  addFooterFaqNavigationContainer() {
    const faqsForSelectedScreenCode: FooterFaqScreenWiseDataModel[] = FooterFaqScreenWiseData[this.selectedServiceScreenCode];
    if (this.selectedServiceScreenData && (faqsForSelectedScreenCode && faqsForSelectedScreenCode.length)) {
      const footerNavigationContainer: FormPageNavigationContainerModel = {
        title: 'FAQs',
        description: '',
        navigationTitle: 'FAQs',
        containerKey: FooterFaqContainerKey,
        type: FormPageContainerType.FAQ,
        value: null
      }
      if (this.selectedServiceScreenData.navigationContainers && this.selectedServiceScreenData.navigationContainers.length) {
        this.selectedServiceScreenData.navigationContainers.push(footerNavigationContainer);
      } else {
        this.selectedServiceScreenData.navigationContainers = [footerNavigationContainer];
      }
    }
  }

  ngOnInit(): void {
    const mainScrollableWindowContianer = document.getElementById('mainScrollableWindowContianer');
    this.mainScrollableWindowScrollListener = this.renderer.listen(mainScrollableWindowContianer, 'scroll', this.setActiveTab.bind(this));
  }

  setActiveTab() {
    this.activeTab = '';
    const wrapperContainerList: any = document.getElementsByClassName('form-page-container-wrapper-container');
    const formPageNavigationBarWrapperContainer: any = document.querySelector('.form-page-navigation-bar-wrapper-container');
    const mainHeaderWrapperContainer: any = document.querySelector('.main-header-wrapper-container');

    let formPageNavigationBarWrapperContainerHeight: number = 0;
    let mainHeaderWrapperContainerHeight: number = 0;

    if (formPageNavigationBarWrapperContainer) {
      formPageNavigationBarWrapperContainerHeight = formPageNavigationBarWrapperContainer.offsetHeight;
    }
    if (mainHeaderWrapperContainer) {
      mainHeaderWrapperContainerHeight = mainHeaderWrapperContainer.offsetHeight;
    }
    if (wrapperContainerList && wrapperContainerList.length) {
      for (let i = 0; i < wrapperContainerList.length; i++) {
        const mainScrollableWindowContianer = document.getElementById('mainScrollableWindowContianer');

        if (mainScrollableWindowContianer.scrollTop >= (wrapperContainerList[i].offsetTop - (formPageNavigationBarWrapperContainerHeight + mainHeaderWrapperContainerHeight))) {
          // if (i < length && mainScrollableWindowContianer.scrollTop > wrapperContainerList[i + 1].offsetTop) {
          //   this.activeTab = wrapperContainerList[i].id;
          // } else {
          this.activeTab = wrapperContainerList[i].id;
          // }
        }
      }
    }
  }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  }

  ngOnDestroy(): void {
    if (this.mainScrollableWindowScrollListener) {
      this.mainScrollableWindowScrollListener();
    }
  }
}
