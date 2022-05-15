import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { headerNavigationList } from 'src/app/header/header-navigation-list.model';
import { HeaderNavigationInterface } from 'src/app/header/header.interface';
import { FormPageScreenCode } from '../../form-page/form-page-constants';
import { FormPageScreenTitleMap } from '../../form-page/form-page-data';
@Component({
  selector: 'sevenx-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  animationCreated(animationItem: AnimationItem): void {
    console.log("Animation Created", animationItem);
  }

  navigationListToBeSearch: HeaderNavigationInterface[] = [];

  searchText: string = null;

  matchedNavigationList: HeaderNavigationInterface[] = [];

  shouldShowSearchResults: boolean = false;

  popularTags: HeaderNavigationInterface[] = [
    {
      label: FormPageScreenTitleMap[FormPageScreenCode.STARTUP_REGISTRATION],
      screenName: FormPageScreenCode.STARTUP_REGISTRATION,
      queryParams: { screenCode: FormPageScreenCode.STARTUP_REGISTRATION },
      routerLink: ['/service'],
      showInSearch: true
    },
    {
      label: FormPageScreenTitleMap[FormPageScreenCode.PVT_LTD],
      screenName: FormPageScreenCode.PVT_LTD,
      queryParams: { screenCode: FormPageScreenCode.PVT_LTD },
      routerLink: ['/service'],
      showInSearch: true
    },
    {
      label: FormPageScreenTitleMap[FormPageScreenCode.LLP],
      screenName: FormPageScreenCode.LLP,
      queryParams: { screenCode: FormPageScreenCode.LLP },
      routerLink: ['/service'],
      showInSearch: true
    },
    {
      label: FormPageScreenTitleMap[FormPageScreenCode.TRADEMARK],
      screenName: FormPageScreenCode.TRADEMARK,
      queryParams: { screenCode: FormPageScreenCode.TRADEMARK },
      routerLink: ['/service'],
      showInSearch: true
    },
    {
      label: FormPageScreenTitleMap[FormPageScreenCode.MSME_UDYAM],
      screenName: FormPageScreenCode.MSME_UDYAM,
      queryParams: { screenCode: FormPageScreenCode.MSME_UDYAM },
      routerLink: ['/service'],
      showInSearch: true
    }
  ];

  bannerAnimationOption: AnimationOptions = {
    path: 'assets/our_plans.json'
  };

  constructor(
    private router: Router
  ) {
    this.setNavigationListToBeSearch(headerNavigationList);
  }

  ngOnInit(): void {
  }

  placeholder_samples = [
    FormPageScreenTitleMap[FormPageScreenCode.STARTUP_REGISTRATION],
    FormPageScreenTitleMap[FormPageScreenCode.IEC],
    "Website & Digital Marketing",
  ];

  setNavigationListToBeSearch(navigationItems: HeaderNavigationInterface[]) {
    if (navigationItems && navigationItems.length) {
      navigationItems.forEach((item: HeaderNavigationInterface) => {
        if (item) {
          if (!(item.items && item.items.length)) {
            if (item.routerLink || item.showInSearch) {
              this.navigationListToBeSearch.push(item);
            }
          } else if (item.items && item.items.length) {
            this.setNavigationListToBeSearch(item.items);
          }
        }
      });
    }
  }

  searchTextChangeHandler(searchString: any) {
    if (searchString) {
      this.matchedNavigationList = this.navigationListToBeSearch.filter((navigationItem: HeaderNavigationInterface) => {
        return navigationItem && navigationItem.routerLink && navigationItem.label && navigationItem.label.toLowerCase().includes(searchString.toLowerCase());
      });
      this.shouldShowSearchResults = true;
    } else {
      this.matchedNavigationList = [...this.navigationListToBeSearch];
      this.shouldShowSearchResults = false;
    }
  }

  navigationItemClickHandler(navigationItem: HeaderNavigationInterface) {
    if (navigationItem && navigationItem.routerLink) {
      this.router.navigate(navigationItem.routerLink, {
        queryParams: navigationItem.queryParams
      });
    }
  }

}
