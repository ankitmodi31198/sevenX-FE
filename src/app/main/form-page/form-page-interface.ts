import { AnimationOptions } from "ngx-lottie";
import { FormPageContainerType } from "./form-page-constants";

export interface FormPageScreenWiseDataModel {
    title: string;
    description: string;
    navigationContainers: FormPageNavigationContainerModel[];
    hideNavigationBar?: boolean;
    hideBannerForm?: boolean;
    hideBannerDetails?: boolean;
    bannerWrapperStyleClass?: string;
    animationOption?: AnimationOptions;
}

export interface FormPageNavigationContainerModel {
    title: string;
    description?: string;
    navigationTitle: string;
    containerKey: string;
    type: FormPageContainerType;
    value: FormPageNavigationContainerValueModel[];
}

export interface FormPageNavigationContainerValueModel {
    title?: string;
    description?: string[];
    innerList?: FormPageNavigationContainerValueModel[]
}