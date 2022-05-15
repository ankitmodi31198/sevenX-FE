import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { ContactUsComponent } from 'src/app/main/contact-us/contact-us.component';
import { FooterFaqContainerKey } from 'src/app/main/form-page/form-page-constants';
import { FooterFaqScreenWiseData, FooterFaqScreenWiseDataModel } from './footer-faq-data';

@Component({
  selector: 'sevenx-footer-faq',
  templateUrl: './footer-faq.component.html',
  styleUrls: ['./footer-faq.component.scss']
})
export class FooterFaqComponent implements OnInit {

  defaultFaqList: FooterFaqScreenWiseDataModel[] = [
    {
      question: 'What is Directors Identification Number (DIN)?',
      answer: [
        'DIN is an identification number issued by the Ministry of Corporate Affairs, Government of India, to Directors of a company or Designated Partners of an LLP.  For obtaining DIN, an online application has to be submitted to the Ministry of Corporate Affairs with a copy of Identity and Address Proof of the Applicant and a declaration by the applicant. The Online DIN Application has to be signed by a Practicing Company Secretary / Chartered Accountant / Cost Accountant. Now DIN is alloted alone with incorporation of new company or in case of appointment of directors, with the proposal from respective company.'
      ]
    },
    {
      question: 'What is Digital Signature Certificate (DSC)?',
      answer: [
        "DSC is a legally recognised method of signing documents electronically. A digital signature is a type of asymmetric cryptography used to simulate the security properties of a handwritten signature on paper. Digital signature schemes normally give two algorithms, one for signing that involves the user's secret or private key, and one for verifying signatures that involves the user's public key. The output of the signature process is called digital signature.",
        "Digital signature certificates are used by programs on the Internet and local machines to confirm the identity of a third party.",
        "Digital signatures have often confused with scanned copies of a physical written signature, which do not have any legal backing for authentication of electronic documents."
      ]
    },
    {
      question: 'What is Memorandum of Association (MOA)?',
      answer: [
        "MOA is the charter document of a company. A company is created by registering a memorandum.",
        "MOA contains the name of a company, the state in which the registered office of the company is located, objectives, and its authorised capital. The MOA will be subscribed by the initial promoters of the company digitally. They will also have to enter name, father's name, residential address, occupation and the number of shares they agree to subscribe in the company. The MOA should also bear the signature of the witness digitaly who knows the subscribers.",
        "The details of subscribers to the MOA cannot be amended or changed at any point of time during the life of the company, as it constitutes the document giving birth to a company. Subsequent changes in the shareholding or directorship of the company should be reflected in its internal records and will not affect the subscriber details in the MOA."
      ]
    },
    {
      question: 'What is Articles of Association (AOA)?',
      answer: [
        "AOA is the bylaws of a company and can be filed along with the incorporation document.",
        "AOA contains rules and regulations for the management of a company's internal affairs and conduct of its business. It defines the relationship of company between its members and directors and relation between members and directors. It also describes powers of directors. Further, the AOA describes the rights and duties of its members as well as the duties and responsibilities of its directors.",
        "In case of a private limited company, the AOA will contain the restrictions of transfer of shares, if any. Also, AOA usually contains the names of first directors of a company.",
        "The AOA will be subscribed by the initial promoters of the company  digitally. Promoters will have to enter their names, father's name, residential address, and occupation.  The AOA should also bear the signature of the witness (digitally)  who knows the subscribers.",
        "The details of subscribers to the AOA cannot be amended or changed at any point of time during the life of the company, as it constitutes the document giving birth to a company. Subsequent changes in the shareholding or directorship of the company should be reflected in its internal records and will not affect the subscriber details in the AOA."
      ]
    },
    {
      question: 'What is Registered Office?',
      answer: [
        "Registered Office refers to the official correspondence address of a company or its principal place of business. The address of the Registered Office will be used for all official communications of the company.",
        "Registered Office of the company can be shifted from one place to another in the same state or from one state to another after complying with legal requirements. The company shall affix the name and address of its registered office outside every office or place of business in a prominent position. Also, the name and address of its registered office should be mentioned in its business letters, bills and other official publications."
      ]
    },
  ];

  footerFaqContainerKey: string = FooterFaqContainerKey;

  selectedFaqList: FooterFaqScreenWiseDataModel[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private matDialog: MatDialog
  ) {
    this.setActivatedRouteSubscription();
  }

  setActivatedRouteSubscription() {
    this.activatedRoute.queryParams.subscribe((value) => {
      if (value && value.screenCode && FooterFaqScreenWiseData[value.screenCode] && FooterFaqScreenWiseData[value.screenCode].length) {
        this.selectedFaqList = JSON.parse(JSON.stringify(FooterFaqScreenWiseData[value.screenCode]));
      } else {
        // this.selectedFaqList = JSON.parse(JSON.stringify(this.defaultFaqList));
        this.selectedFaqList = [];
      }
    });
  }

  ngOnInit(): void {
  }

  contactUsClickHandler() {
    this.matDialog.open(ContactUsComponent, { panelClass: 'sevenx-contact-us-modal', closeOnNavigation: true, maxWidth: '500px' })
      .afterClosed()
      .pipe(take(1))
      .subscribe();
  }
}
