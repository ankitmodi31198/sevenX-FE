import { FormPageScreenCode } from "src/app/main/form-page/form-page-constants";
import { FormPageScreenTitleMap } from "src/app/main/form-page/form-page-data";
import { FooterNavigationInterface } from "./footer-navigation.interface";

export const footerNavigationList: FooterNavigationInterface[] = [
    {
        label: 'Business',
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
                label: FormPageScreenTitleMap[FormPageScreenCode.LLP],
                screenName: FormPageScreenCode.LLP,
                queryParams: { screenCode: FormPageScreenCode.LLP },
                routerLink: ['/service']
            },
            {
                label: FormPageScreenTitleMap[FormPageScreenCode.PARTERSHIP_FIRM],
                screenName: FormPageScreenCode.PARTERSHIP_FIRM,
                queryParams: { screenCode: FormPageScreenCode.PARTERSHIP_FIRM },
                routerLink: ['/service']
            },
            {
                label: FormPageScreenTitleMap[FormPageScreenCode.PVT_LTD],
                screenName: FormPageScreenCode.PVT_LTD,
                queryParams: { screenCode: FormPageScreenCode.PVT_LTD },
                routerLink: ['/service']
            },
            {
                label: FormPageScreenTitleMap[FormPageScreenCode.ROC_LLP],
                screenName: FormPageScreenCode.ROC_LLP,
                queryParams: { screenCode: FormPageScreenCode.ROC_LLP },
                routerLink: ['/service']
            }
        ]
    },
    {
        label: 'New Startup',
        items: [
            {
                label: FormPageScreenTitleMap[FormPageScreenCode.STARTUP_REGISTRATION],
                screenName: FormPageScreenCode.STARTUP_REGISTRATION,
                queryParams: { screenCode: FormPageScreenCode.STARTUP_REGISTRATION },
                routerLink: ['/service']
            },
            {
                label: FormPageScreenTitleMap[FormPageScreenCode.MSME_UDYAM],
                screenName: FormPageScreenCode.MSME_UDYAM,
                queryParams: { screenCode: FormPageScreenCode.MSME_UDYAM },
                routerLink: ['/service']
            },
            {
                label: FormPageScreenTitleMap[FormPageScreenCode.GST_REGISTRATION],
                screenName: FormPageScreenCode.GST_REGISTRATION,
                queryParams: { screenCode: FormPageScreenCode.GST_REGISTRATION },
                routerLink: ['/service']
            },
            {
                label: FormPageScreenTitleMap[FormPageScreenCode.IEC],
                screenName: FormPageScreenCode.IEC,
                queryParams: { screenCode: FormPageScreenCode.IEC },
                routerLink: ['/service']
            },
            {
                label: FormPageScreenTitleMap[FormPageScreenCode.TRADEMARK],
                screenName: FormPageScreenCode.TRADEMARK,
                queryParams: { screenCode: FormPageScreenCode.TRADEMARK },
                routerLink: ['/service']
            }
        ]
    },
    {
        label: 'Income Tax & GST',
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
                label: FormPageScreenTitleMap[FormPageScreenCode.GST_RETURN_FILING],
                screenName: FormPageScreenCode.GST_RETURN_FILING,
                queryParams: { screenCode: FormPageScreenCode.GST_RETURN_FILING },
                routerLink: ['/service']
            },
            {
                label: FormPageScreenTitleMap[FormPageScreenCode.GST_ADVISORY],
                screenName: FormPageScreenCode.GST_ADVISORY,
                queryParams: { screenCode: FormPageScreenCode.GST_ADVISORY },
                routerLink: ['/service']
            }
        ]
    },
    {
        label: 'Go Digital',
        items: [
            {
                label: FormPageScreenTitleMap[FormPageScreenCode.WEBSITE_AND_DIGITAL_MARKETING],
                screenName: FormPageScreenCode.WEBSITE_AND_DIGITAL_MARKETING,
                queryParams: { screenCode: FormPageScreenCode.WEBSITE_AND_DIGITAL_MARKETING },
                routerLink: ['/service']
            }
        ]
    }
]