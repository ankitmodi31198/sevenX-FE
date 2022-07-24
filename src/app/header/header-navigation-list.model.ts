import { FormPageScreenCode } from "../main/form-page/form-page-constants";
import { FormPageScreenTitleMap } from "../main/form-page/form-page-data";
import { HeaderNavigationInterface } from "./header.interface";

export const headerNavigationList: HeaderNavigationInterface[] = [
    {
        label: FormPageScreenTitleMap[FormPageScreenCode.STARTUP_IDEA_ANALYSIS],
        screenName: FormPageScreenCode.STARTUP_IDEA_ANALYSIS,
        queryParams: { screenCode: FormPageScreenCode.STARTUP_IDEA_ANALYSIS },
        routerLink: ['/service'],
        showInSearch: false
    },
    {
        label: FormPageScreenTitleMap[FormPageScreenCode.FIND_A_CO_FOUNDER],
        screenName: FormPageScreenCode.FIND_A_CO_FOUNDER,
        queryParams: { screenCode: FormPageScreenCode.FIND_A_CO_FOUNDER },
        routerLink: ['/service'],
        showInSearch: false
    },
    {
        // label: 'Government Registrations',
        label: 'Incorporate Your Startup',
        divCount: 3,
        items: [
            {
                label: 'Registration',
                divNo: 1,
                items: [
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.MSME_UDYAM],
                        screenName: FormPageScreenCode.MSME_UDYAM,
                        queryParams: { screenCode: FormPageScreenCode.MSME_UDYAM },
                        routerLink: ['/service'],
                        showInSearch: true
                    },
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.IEC],
                        screenName: FormPageScreenCode.IEC,
                        queryParams: { screenCode: FormPageScreenCode.IEC },
                        routerLink: ['/service'],
                        showInSearch: true
                    },
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.STARTUP_REGISTRATION],
                        screenName: FormPageScreenCode.STARTUP_REGISTRATION,
                        queryParams: { screenCode: FormPageScreenCode.STARTUP_REGISTRATION },
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
                        label: FormPageScreenTitleMap[FormPageScreenCode.GST_REGISTRATION],
                        screenName: FormPageScreenCode.GST_REGISTRATION,
                        queryParams: { screenCode: FormPageScreenCode.GST_REGISTRATION },
                        routerLink: ['/service'],
                        showInSearch: true
                    },
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.PAN_APPLICATION],
                        screenName: FormPageScreenCode.PAN_APPLICATION,
                        queryParams: { screenCode: FormPageScreenCode.PAN_APPLICATION },
                        routerLink: ['/service'],
                        showInSearch: true
                    },
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.TAN_APPLICATION],
                        screenName: FormPageScreenCode.TAN_APPLICATION,
                        queryParams: { screenCode: FormPageScreenCode.TAN_APPLICATION },
                        routerLink: ['/service'],
                        showInSearch: true
                    },
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.COPYRIGHT],
                        screenName: FormPageScreenCode.COPYRIGHT,
                        queryParams: { screenCode: FormPageScreenCode.COPYRIGHT },
                        routerLink: ['/service'],
                        showInSearch: true
                    }
                ]
            },
            {
                divNo: 2,
                label: FormPageScreenTitleMap[FormPageScreenCode.PROPRIETORSHIP_REGISTRATION],
                screenName: FormPageScreenCode.PROPRIETORSHIP_REGISTRATION,
                queryParams: { screenCode: FormPageScreenCode.PROPRIETORSHIP_REGISTRATION },
                routerLink: ['/service'],
                showInSearch: true
            },
            {
                divNo: 2,
                label: FormPageScreenTitleMap[FormPageScreenCode.HUF],
                screenName: FormPageScreenCode.HUF,
                queryParams: { screenCode: FormPageScreenCode.HUF },
                routerLink: ['/service'],
                showInSearch: true
            },
            {
                label: 'Partnership',
                divNo: 2,
                items: [
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.PARTERSHIP_FIRM],
                        screenName: FormPageScreenCode.PARTERSHIP_FIRM,
                        queryParams: { screenCode: FormPageScreenCode.PARTERSHIP_FIRM },
                        routerLink: ['/service'],
                        showInSearch: true
                    },
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.LLP],
                        screenName: FormPageScreenCode.LLP,
                        queryParams: { screenCode: FormPageScreenCode.LLP },
                        routerLink: ['/service'],
                        showInSearch: true
                    }
                ]
            },
            {
                label: 'Company',
                divNo: 2,
                items: [
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.OPC],
                        screenName: FormPageScreenCode.OPC,
                        queryParams: { screenCode: FormPageScreenCode.OPC },
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
                        label: FormPageScreenTitleMap[FormPageScreenCode.LTD_COMPANY],
                        screenName: FormPageScreenCode.LTD_COMPANY,
                        queryParams: { screenCode: FormPageScreenCode.LTD_COMPANY },
                        routerLink: ['/service'],
                        showInSearch: true
                    }
                ]
            },
            {
                label: 'Special Status',
                divNo: 2,
                items: [
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.SECTION_8_COMPANY_NGO],
                        screenName: FormPageScreenCode.SECTION_8_COMPANY_NGO,
                        queryParams: { screenCode: FormPageScreenCode.SECTION_8_COMPANY_NGO },
                        routerLink: ['/service'],
                        showInSearch: true
                    },
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.TRUST_REGISTRATION],
                        screenName: FormPageScreenCode.TRUST_REGISTRATION,
                        queryParams: { screenCode: FormPageScreenCode.TRUST_REGISTRATION },
                        routerLink: ['/service'],
                        showInSearch: true
                    },
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.SOCIETY_REGISTRATION],
                        screenName: FormPageScreenCode.SOCIETY_REGISTRATION,
                        queryParams: { screenCode: FormPageScreenCode.SOCIETY_REGISTRATION },
                        routerLink: ['/service'],
                        showInSearch: true
                    }
                ]
            },
            {
                label: 'Updations in Company/LLP',
                divNo: 3,
                items: [
                    {
                        label: 'Changes in Company',
                        items: [
                            {
                                label: FormPageScreenTitleMap[FormPageScreenCode.ADD_DIRECTOR],
                                screenName: FormPageScreenCode.ADD_DIRECTOR,
                                queryParams: { screenCode: FormPageScreenCode.ADD_DIRECTOR },
                                routerLink: ['/service'],
                                showInSearch: true
                            },
                            {
                                label: FormPageScreenTitleMap[FormPageScreenCode.REMOVE_DIRECTOR],
                                screenName: FormPageScreenCode.REMOVE_DIRECTOR,
                                queryParams: { screenCode: FormPageScreenCode.REMOVE_DIRECTOR },
                                routerLink: ['/service'],
                                showInSearch: true
                            },
                            // {
                            //     label: FormPageScreenTitleMap[FormPageScreenCode.CHANGE_IN_REGISTRED_OFFICE],
                            //     screenName: FormPageScreenCode.CHANGE_IN_REGISTRED_OFFICE,
                            //     queryParams: { screenCode: FormPageScreenCode.CHANGE_IN_REGISTRED_OFFICE },
                            //     routerLink: ['/service'],
                            //     showInSearch: true
                            // },
                            {
                                label: FormPageScreenTitleMap[FormPageScreenCode.REGISTERED_OFFICE_CHANGE],
                                screenName: FormPageScreenCode.REGISTERED_OFFICE_CHANGE,
                                queryParams: { screenCode: FormPageScreenCode.REGISTERED_OFFICE_CHANGE },
                                routerLink: ['/service'],
                                showInSearch: true
                            },
                            {
                                label: FormPageScreenTitleMap[FormPageScreenCode.MOA_AMENDMENT],
                                screenName: FormPageScreenCode.MOA_AMENDMENT,
                                queryParams: { screenCode: FormPageScreenCode.MOA_AMENDMENT },
                                routerLink: ['/service'],
                                showInSearch: true
                            },
                            {
                                label: FormPageScreenTitleMap[FormPageScreenCode.CHANGE_IN_SHAREHOLDING],
                                screenName: FormPageScreenCode.CHANGE_IN_SHAREHOLDING,
                                queryParams: { screenCode: FormPageScreenCode.CHANGE_IN_SHAREHOLDING },
                                routerLink: ['/service'],
                                showInSearch: true
                            },
                            {
                                label: FormPageScreenTitleMap[FormPageScreenCode.CONVERSION_FROM_LLP_TO_PRIVATED_LIMITED],
                                screenName: FormPageScreenCode.CONVERSION_FROM_LLP_TO_PRIVATED_LIMITED,
                                queryParams: { screenCode: FormPageScreenCode.CONVERSION_FROM_LLP_TO_PRIVATED_LIMITED },
                                routerLink: ['/service'],
                                showInSearch: true
                            }
                        ]
                    },
                    {
                        label: 'Changes in LLP',
                        items: [
                            {
                                label: FormPageScreenTitleMap[FormPageScreenCode.ADD_REMOVE_PARTNER],
                                screenName: FormPageScreenCode.ADD_REMOVE_PARTNER,
                                queryParams: { screenCode: FormPageScreenCode.ADD_REMOVE_PARTNER },
                                routerLink: ['/service'],
                                showInSearch: true
                            },
                            {
                                label: FormPageScreenTitleMap[FormPageScreenCode.CHANGE_IN_LLP_AGREEMENT],
                                screenName: FormPageScreenCode.CHANGE_IN_LLP_AGREEMENT,
                                queryParams: { screenCode: FormPageScreenCode.CHANGE_IN_LLP_AGREEMENT },
                                routerLink: ['/service'],
                                showInSearch: true
                            },
                            {
                                label: FormPageScreenTitleMap[FormPageScreenCode.CONVERSION_FROM_PARTNERSHIP_TO_LLP],
                                screenName: FormPageScreenCode.CONVERSION_FROM_PARTNERSHIP_TO_LLP,
                                queryParams: { screenCode: FormPageScreenCode.CONVERSION_FROM_PARTNERSHIP_TO_LLP },
                                routerLink: ['/service'],
                                showInSearch: true
                            },
                            {
                                label: FormPageScreenTitleMap[FormPageScreenCode.CONVERSION_FROM_PRIVATE_LIMITED_TO_LLP],
                                screenName: FormPageScreenCode.CONVERSION_FROM_PRIVATE_LIMITED_TO_LLP,
                                queryParams: { screenCode: FormPageScreenCode.CONVERSION_FROM_PRIVATE_LIMITED_TO_LLP },
                                routerLink: ['/service'],
                                showInSearch: true
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        label: FormPageScreenTitleMap[FormPageScreenCode.WEBSITE_AND_DIGITAL_MARKETING],
        screenName: FormPageScreenCode.WEBSITE_AND_DIGITAL_MARKETING,
        queryParams: { screenCode: FormPageScreenCode.WEBSITE_AND_DIGITAL_MARKETING },
        routerLink: ['/service']
    },
    {
        label: 'Legal Compliances',
        divCount: 3,
        items: [
            {
                label: 'Income Tax',
                divNo: 1,
                items: [
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.ITR_FILING],
                        screenName: FormPageScreenCode.ITR_FILING,
                        queryParams: { screenCode: FormPageScreenCode.ITR_FILING },
                        routerLink: ['/service'],
                        showInSearch: true
                    },
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.TDS_RETURN_FILING],
                        screenName: FormPageScreenCode.TDS_RETURN_FILING,
                        queryParams: { screenCode: FormPageScreenCode.TDS_RETURN_FILING },
                        routerLink: ['/service'],
                        showInSearch: true
                    },
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.INCOME_TAX_ADVISORY],
                        screenName: FormPageScreenCode.INCOME_TAX_ADVISORY,
                        queryParams: { screenCode: FormPageScreenCode.INCOME_TAX_ADVISORY },
                        routerLink: ['/service'],
                        showInSearch: true
                    }
                ]
            },
            {
                label: 'GST',
                divNo: 1,
                items: [
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.GST_REGISTRATION],
                        screenName: FormPageScreenCode.GST_REGISTRATION,
                        queryParams: { screenCode: FormPageScreenCode.GST_REGISTRATION },
                        routerLink: ['/service'],
                        showInSearch: true
                    },
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.GST_RETURN_FILING],
                        screenName: FormPageScreenCode.GST_RETURN_FILING,
                        queryParams: { screenCode: FormPageScreenCode.GST_RETURN_FILING },
                        routerLink: ['/service'],
                        showInSearch: true
                    },
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.GST_ADVISORY],
                        screenName: FormPageScreenCode.GST_ADVISORY,
                        queryParams: { screenCode: FormPageScreenCode.GST_ADVISORY },
                        routerLink: ['/service'],
                        showInSearch: true
                    }
                ]
            },
            {
                label: 'ROC',
                divNo: 1,
                items: [
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.COMPANY],
                        screenName: FormPageScreenCode.COMPANY,
                        queryParams: { screenCode: FormPageScreenCode.COMPANY },
                        routerLink: ['/service'],
                        showInSearch: true
                    },
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.ROC_LLP],
                        screenName: FormPageScreenCode.ROC_LLP,
                        queryParams: { screenCode: FormPageScreenCode.ROC_LLP },
                        routerLink: ['/service'],
                        showInSearch: true
                    }
                ]
            },
            {
                label: 'Labour law',
                divNo: 2,
                items: [
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.PF],
                        screenName: FormPageScreenCode.PF,
                        queryParams: { screenCode: FormPageScreenCode.PF },
                        routerLink: ['/service'],
                        showInSearch: true
                    },
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.ESIC],
                        screenName: FormPageScreenCode.ESIC,
                        queryParams: { screenCode: FormPageScreenCode.ESIC },
                        routerLink: ['/service'],
                        showInSearch: true
                    },
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.PROFESSIONAL_TAX],
                        screenName: FormPageScreenCode.PROFESSIONAL_TAX,
                        queryParams: { screenCode: FormPageScreenCode.PROFESSIONAL_TAX },
                        routerLink: ['/service'],
                        showInSearch: true
                    }
                    // {
                    //     label: FormPageScreenTitleMap[FormPageScreenCode.CLRA],
                    //     screenName: FormPageScreenCode.CLRA,
                    //     queryParams: { screenCode: FormPageScreenCode.CLRA },
                    //     routerLink: ['/service'],
                    //     showInSearch: true
                    // }
                ]
            },
            {
                label: 'SEBI Compliances',
                divNo: 2,
                items: [
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.ALTERNATIVE_INVESTMENT_FUND_REGISTRATION],
                        screenName: FormPageScreenCode.ALTERNATIVE_INVESTMENT_FUND_REGISTRATION,
                        queryParams: { screenCode: FormPageScreenCode.ALTERNATIVE_INVESTMENT_FUND_REGISTRATION },
                        routerLink: ['/service'],
                        showInSearch: true
                    },
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.MERGERS_AND_ACQUISITIONS],
                        screenName: FormPageScreenCode.MERGERS_AND_ACQUISITIONS,
                        queryParams: { screenCode: FormPageScreenCode.MERGERS_AND_ACQUISITIONS },
                        routerLink: ['/service'],
                        showInSearch: true
                    }
                ]
            },
            {
                label: 'RBI Compliances',
                divNo: 3,
                items: [
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.NBFC_REGISTRATION],
                        screenName: FormPageScreenCode.NBFC_REGISTRATION,
                        queryParams: { screenCode: FormPageScreenCode.NBFC_REGISTRATION },
                        routerLink: ['/service'],
                        showInSearch: true
                    },
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.NBFC_TAKEOVER],
                        screenName: FormPageScreenCode.NBFC_TAKEOVER,
                        queryParams: { screenCode: FormPageScreenCode.NBFC_TAKEOVER },
                        routerLink: ['/service'],
                        showInSearch: true
                    },
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.FFMC_LICENSE],
                        screenName: FormPageScreenCode.FFMC_LICENSE,
                        queryParams: { screenCode: FormPageScreenCode.FFMC_LICENSE },
                        routerLink: ['/service'],
                        showInSearch: true
                    },
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.NBFC_COLLABORATION],
                        screenName: FormPageScreenCode.NBFC_COLLABORATION,
                        queryParams: { screenCode: FormPageScreenCode.NBFC_COLLABORATION },
                        routerLink: ['/service'],
                        showInSearch: true
                    },
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.MICROFINANCE_COMPANY_REGISTRATION],
                        screenName: FormPageScreenCode.MICROFINANCE_COMPANY_REGISTRATION,
                        queryParams: { screenCode: FormPageScreenCode.MICROFINANCE_COMPANY_REGISTRATION },
                        routerLink: ['/service'],
                        showInSearch: true
                    },
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.HOUSING_FINANCE_COMPANY_REGISTRATION],
                        screenName: FormPageScreenCode.HOUSING_FINANCE_COMPANY_REGISTRATION,
                        queryParams: { screenCode: FormPageScreenCode.HOUSING_FINANCE_COMPANY_REGISTRATION },
                        routerLink: ['/service'],
                        showInSearch: true
                    },
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.NBFC_ACCOUNT_AGGREGATOR_LICENSE],
                        screenName: FormPageScreenCode.NBFC_ACCOUNT_AGGREGATOR_LICENSE,
                        queryParams: { screenCode: FormPageScreenCode.NBFC_ACCOUNT_AGGREGATOR_LICENSE },
                        routerLink: ['/service'],
                        showInSearch: true
                    },
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.PREPAID_WALLET_LICENSE],
                        screenName: FormPageScreenCode.PREPAID_WALLET_LICENSE,
                        queryParams: { screenCode: FormPageScreenCode.PREPAID_WALLET_LICENSE },
                        routerLink: ['/service'],
                        showInSearch: true
                    },
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.PEER_TO_PEER_LENDING_LICENSE],
                        screenName: FormPageScreenCode.PEER_TO_PEER_LENDING_LICENSE,
                        queryParams: { screenCode: FormPageScreenCode.PEER_TO_PEER_LENDING_LICENSE },
                        routerLink: ['/service'],
                        showInSearch: true
                    },
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.PAYMENT_BANK_LICENSE],
                        screenName: FormPageScreenCode.PAYMENT_BANK_LICENSE,
                        queryParams: { screenCode: FormPageScreenCode.PAYMENT_BANK_LICENSE },
                        routerLink: ['/service'],
                        showInSearch: true
                    },
                    {
                        label: FormPageScreenTitleMap[FormPageScreenCode.PAYMENT_GATEWAY_LICENSE],
                        screenName: FormPageScreenCode.PAYMENT_GATEWAY_LICENSE,
                        queryParams: { screenCode: FormPageScreenCode.PAYMENT_GATEWAY_LICENSE },
                        routerLink: ['/service'],
                        showInSearch: true
                    }
                ]
            },
            {
                divNo: 3,
                label: FormPageScreenTitleMap[FormPageScreenCode.FEMA_COMPLIANCES],
                screenName: FormPageScreenCode.FEMA_COMPLIANCES,
                queryParams: { screenCode: FormPageScreenCode.FEMA_COMPLIANCES },
                routerLink: ['/service'],
                showInSearch: true
            }
        ]
    },
    {
        label: FormPageScreenTitleMap[FormPageScreenCode.FINANCIAL_MODELLING_AND_VALUATIONS],
        screenName: FormPageScreenCode.FINANCIAL_MODELLING_AND_VALUATIONS,
        queryParams: { screenCode: FormPageScreenCode.FINANCIAL_MODELLING_AND_VALUATIONS },
        routerLink: ['/service'],
        showInSearch: false
    },
    {
        label: FormPageScreenTitleMap[FormPageScreenCode.PITCH_DECKS_AND_FUNDING],
        screenName: FormPageScreenCode.PITCH_DECKS_AND_FUNDING,
        queryParams: { screenCode: FormPageScreenCode.PITCH_DECKS_AND_FUNDING },
        routerLink: ['/service'],
        showInSearch: false
    }
]