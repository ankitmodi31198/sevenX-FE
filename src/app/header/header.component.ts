import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CartDetailsService } from '../service/api/cart-details.service';
import { AuthService } from '../service/auth-service/auth.service';
import { LocalStorageKeyTypes } from '../service/local-storage/local-storage-key-types';
import { LocalstorageService } from '../service/local-storage/localstorageservice.service';
import { CartDetailsGetModel } from '../service/models/cart-details.model';
import { headerNavigationList } from './header-navigation-list.model';
import { HeaderNavigationInterface } from './header.interface';

@Component({
  selector: 'sevenx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {

  headerSideBarNavigationList: HeaderNavigationInterface[];

  isSidenavOpened: boolean = false;

  expandedItemName: string = '';

  headerNavigationList: HeaderNavigationInterface[];

  // temporary variable
  // remove once login component complete.
  // isLoggedInUser: boolean = false;
  get isLoggedInUser(): boolean {
    const token = this.localStorageService.getLocalStorage(
      LocalStorageKeyTypes.TOKEN
    );
    if (token && token.length && token[0]) {
      return true;
    }
    return false;
  }

  cartTotalCount: number = 0;

  get isAdminLoggedIn(): boolean {
    return this.authService && this.authService.isAdminLoggedIn;
  }

  constructor(
    private localStorageService: LocalstorageService,
    private router: Router,
    private authService: AuthService,
    private cartDetailsService: CartDetailsService
  ) {
    this.setHeaderNavigationList();
  }

  setHeaderNavigationList() {
    this.headerSideBarNavigationList = JSON.parse(JSON.stringify(headerNavigationList));
    this.headerNavigationList = JSON.parse(JSON.stringify(headerNavigationList));
    if (this.headerNavigationList && this.headerNavigationList.length) {
      this.headerNavigationList.forEach((headerItem: HeaderNavigationInterface) => {
        if (headerItem && headerItem.items && headerItem.items.length) {
          headerItem.groupByDiv = [];
          let groupByDivMap: { [key: string]: HeaderNavigationInterface[] } = {};
          headerItem.items.forEach((item: HeaderNavigationInterface) => {
            const groupByDivMapKey: string = 'div' + item.divNo;
            if (groupByDivMap[groupByDivMapKey]) {
              groupByDivMap[groupByDivMapKey].push(item);
            } else {
              groupByDivMap[groupByDivMapKey] = [item];
            }
          });
          const groupByDivMapKeys: string[] = Object.keys(groupByDivMap);
          if (groupByDivMapKeys && groupByDivMapKeys.length) {
            groupByDivMapKeys.forEach((key: string) => {
              headerItem.groupByDiv.push({ items: groupByDivMap[key] });
            });
          }
        }
      });
    }
  }

  ngOnInit(): void {
    this.setCartTotalCount();
  }

  setCartTotalCount() {
    this.cartDetailsService.cartDetails$.subscribe((response: CartDetailsGetModel) => {
      if (response) {
        this.cartTotalCount = response.cartTotalCount;
      } else {
        this.cartTotalCount = 0;
      }
    });
  }

  sidenavOpenClickHandler() {
    this.isSidenavOpened = true;
  }

  sidenavCloseClickHandler() {
    this.isSidenavOpened = false;
    this.expandedItemName = '';
  }

  sidenavHeaderItemClickHandler(headerItemLabel: string) {
    if (this.expandedItemName === headerItemLabel) {
      this.expandedItemName = '';
    } else {
      this.expandedItemName = headerItemLabel;
    }
  }

  logOutClickHandler() {
    // this.isLoggedInUser = false;
    this.localStorageService.removeLocalStorage(LocalStorageKeyTypes.TOKEN);
    this.localStorageService.removeLocalStorage(LocalStorageKeyTypes.LOGIN_USER);
    this.localStorageService.removeLocalStorage(LocalStorageKeyTypes.LOGIN_USER_DETAILS);
    this.authService.refreshLoginUserData$.next(true);
    this.router.navigate(['/']);
  }

  navigate(headerItem: HeaderNavigationInterface) {
    const overlay = document.querySelectorAll('.product-list-overlay-container');
    if (headerItem) {
      if (overlay && overlay.length) {
        for (let i = 0; i < overlay.length; i++) {
          const overlayElement = overlay[i];
          overlayElement['style'].display = 'none';
        }
      }
      this.router.navigate(headerItem.routerLink, { queryParams: headerItem.queryParams })
        .then(() => {
          setTimeout(() => {
            if (overlay && overlay.length) {
              for (let i = 0; i < overlay.length; i++) {
                const overlayElement = overlay[i];
                overlayElement['style'].display = '';
              }
            }
          });
        });
      this.sidenavCloseClickHandler();
    }
  }
}
