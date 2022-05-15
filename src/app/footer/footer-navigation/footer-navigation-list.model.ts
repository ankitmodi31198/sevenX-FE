import { FormPageScreenCode } from "src/app/main/form-page/form-page-constants";
import { FormPageScreenTitleMap } from "src/app/main/form-page/form-page-data";
import { FooterNavigationInterface } from "./footer-navigation.interface";

export const footerNavigationList: FooterNavigationInterface[] = [
    {
        label: 'Company',
        items: [
            {
                label: 'Digital Marketing',
                routerLink: ['/digital-marketing']
            },
            // {
            //     label: 'About Us',
            //     routerLink: ['/about-us']
            // },
            // {
            //     label: 'Contact Us',
            //     routerLink: ['/contact-us']
            // }
        ]
    },
    {
        label: 'Government Registrations',
        items: [
            {
                label: FormPageScreenTitleMap[FormPageScreenCode.PROPRIETORSHIP_REGISTRATION],
                screenName: FormPageScreenCode.PROPRIETORSHIP_REGISTRATION,
                queryParams: { screenCode: FormPageScreenCode.PROPRIETORSHIP_REGISTRATION },
                routerLink: ['/service']
            },
            {
                label: FormPageScreenTitleMap[FormPageScreenCode.HUF],
                screenName: FormPageScreenCode.HUF,
                queryParams: { screenCode: FormPageScreenCode.HUF },
                routerLink: ['/service']
            },
            {
                label: FormPageScreenTitleMap[FormPageScreenCode.OPC],
                screenName: FormPageScreenCode.OPC,
                queryParams: { screenCode: FormPageScreenCode.OPC },
                routerLink: ['/service']
            },
            {
                label: FormPageScreenTitleMap[FormPageScreenCode.PVT_LTD],
                screenName: FormPageScreenCode.PVT_LTD,
                queryParams: { screenCode: FormPageScreenCode.PVT_LTD },
                routerLink: ['/service']
            },
            {
                label: FormPageScreenTitleMap[FormPageScreenCode.LTD_COMPANY],
                screenName: FormPageScreenCode.LTD_COMPANY,
                queryParams: { screenCode: FormPageScreenCode.LTD_COMPANY },
                routerLink: ['/service']
            }
        ]
    },
    {
        label: 'Legal Compliances',
        items: [
            {
                label: FormPageScreenTitleMap[FormPageScreenCode.ITR_FILING],
                screenName: FormPageScreenCode.ITR_FILING,
                queryParams: { screenCode: FormPageScreenCode.ITR_FILING },
                routerLink: ['/service']
            },
            {
                label: FormPageScreenTitleMap[FormPageScreenCode.TDS_RETURN_FILING],
                screenName: FormPageScreenCode.TDS_RETURN_FILING,
                queryParams: { screenCode: FormPageScreenCode.TDS_RETURN_FILING },
                routerLink: ['/service']
            },
            {
                label: FormPageScreenTitleMap[FormPageScreenCode.INCOME_TAX_ADVISORY],
                screenName: FormPageScreenCode.INCOME_TAX_ADVISORY,
                queryParams: { screenCode: FormPageScreenCode.INCOME_TAX_ADVISORY },
                routerLink: ['/service']
            },
            {
                label: FormPageScreenTitleMap[FormPageScreenCode.GST_REGISTRATION],
                screenName: FormPageScreenCode.GST_REGISTRATION,
                queryParams: { screenCode: FormPageScreenCode.GST_REGISTRATION },
                routerLink: ['/service']
            },
            {
                label: FormPageScreenTitleMap[FormPageScreenCode.GST_ADVISORY],
                screenName: FormPageScreenCode.GST_ADVISORY,
                queryParams: { screenCode: FormPageScreenCode.GST_ADVISORY },
                routerLink: ['/service']
            }
        ]
    }
]