export interface FooterFaqScreenWiseDataModel {
    question: string;
    answer: string[];
}

export const FooterFaqScreenWiseData: { [key: string]: FooterFaqScreenWiseDataModel[] } = {
    LTD_COMPANY: [
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
        {
            question: 'What is Authorised Capital?',
            answer: [
                "Authorised Capital or Registered Capital of a company is the upper limit of capital that a company can issue shares and collect money from shareholders. Company registration fee is payable to ROC and will be calculated on the basis of Authorised Capital."
            ]
        },
        {
            question: 'What is subscribed capital?',
            answer: [
                "Subscribed capital refers to the amount of capital agreed to be brought in by the shareholders to the company."
            ]
        },
        {
            question: 'What is paid up capital?',
            answer: [
                "Paid up capital of a company refers to the amount of capital actually brought in by the shareholders to the company. Now there is no minimum paid up capital requirements applicable for a company."
            ]
        },
        {
            question: 'What are Incorporation Forms?',
            answer: [
                "1. SPICe -INC-32:",
                "Statutory declaration should be filed at the time of incorporation of a company, confirming the compliance of legal requirements under the Companies Act for registration of a new company. The form also contain first directors details and registered office of the company.",
                "2. INC-33  eMOA:",
                "Electronic Memorandum of Association of the company.",
                "3. INC-34  eAOA:",
                "Articles of Association of the company in electronic form.",
            ]
        },
        {
            question: 'What is Corporate Identification Number (CIN)?',
            answer: [
                "CIN is the number allotted to a company registered in India by the Ministry of Corporate Affairs, Government of India.",
                "CIN is a 21-digit number that contains the information such as status (listed / unlisted), NIC code of business activity, state of registration, year of registration, private or public and the sequential registration number in the respective state (for example, U74110KA2008PTC046914)."
            ]
        }
    ],
    PARTERSHIP_FIRM: [
        {
            question: 'Who can become a Partner?',
            answer: [
                'An Individual who is an Indian National and has completed 18 years of age and a Company or LLP Registered in India can become a partner of a partnership firm.'
            ]
        },
        {
            question: 'How many Partners required for Partnership?',
            answer: [
                '2 Persons (Individual or Company/LLP) are required to make a Partnership.'
            ]
        },
        {
            question: 'How to make Partnership?',
            answer: [
                'A Partnership is made by executing an agreement between the Partners.'
            ]
        },
        {
            question: 'Is the Partnership Agreement necessary?',
            answer: [
                'Yes. A Partnership it self is created by the agreement between the partners. So, there is no partnership without an agreement.'
            ]
        },
        {
            question: 'Is Registration Partnership Mandatory?',
            answer: [
                'No. Registration is not mandatory for a Partnership. But for better acceptance under various authorities including Bank, the Partnership deed is required to be registered under respective State Partnership Act.'
            ]
        },
        {
            question: 'How to register a Partnership?',
            answer: [
                'Registration of Partnership is to be done under State Partnership Act and Rules and is done by the Registrar of Firms in respective State.'
            ]
        },
        {
            question: 'What is Liability of Partners?',
            answer: [
                'Liability of Partners in a Partnership Firm is unlimited. The personal assets of partners are also legally exposed to meet the business liabilities.'
            ]
        },
        {
            question: 'Can a Partnership open Bank Account without Registration?',
            answer: [
                'Yes. Registration of Partnership is not a pre-condition for opening a Bank Account.'
            ]
        },
        {
            question: 'Separate PAN required for Partnership?',
            answer: [
                'Yes. Partnership must apply for separate Permanent Account Number (PAN) under Income Tax Law.'
            ]
        }
    ],
    PROPRIETORSHIP_REGISTRATION: [
        {
            question: 'What is a Proprietorship?',
            answer: [
                "Proprietorship is a business concern owned and operated by an individual. Proprietorship is nothing but the Individual carrying the business himself."
            ]
        },
        {
            question: 'What is the status of Proprietorship?',
            answer: [
                "Proprietorship is an unincorporated business. It does not have any separate status other than individual."
            ]
        },
        {
            question: 'Can Proprietorship acquire a separate PAN?',
            answer: [
                "Proprietorship can not obtain a separate PAN as there is no separate entity status to it. So, the PAN of Individual Proprietor will be used for Income tax purpose."
            ]
        },
        {
            question: 'How to Register a Proprietorship?',
            answer: [
                "In India, there is specific Registration for a Proprietorship."
            ]
        },
        {
            question: 'Can Proprietorship open Current Account?',
            answer: [
                "Yes. Proprietorship can open Current Account with a Bank with individual details of proprietor"
            ]
        },
        {
            question: 'Can one individual operate multiple Proprietorships?',
            answer: [
                "Yes. One individual can operate multiple Proprietorships. There is no limit of number of Proprietorships by an Individual"
            ]
        },
        {
            question: 'Can Proprietorship be operated with a Brand Name or Business Name?',
            answer: [
                "Yes. A Proprietorship can be operated with a Brand Name or Business Name. Also, the Current Account can be operated with a Business Name."
            ]
        },
        {
            question: 'Can Proprietorship obtain GST Registration?',
            answer: [
                "Yes. A Proprietorship can obtain GST Registration with individual details of proprietor or with a Business Name."
            ]
        },
        {
            question: 'What all registrations can be obtained for a Proprietorship?',
            answer: [
                "Though there is no specific registration as such, the proprietorship needs to obtain ancillary registration related to business operations such as MSME Registration, Shops and Establishment Registration, Professional Tax Registration, Goods and Service Tax Registration etc."
            ]
        }
    ],
    LLP: [
        {
            question: 'How many Parters / Designated Parters are required for registering LLP?',
            answer: [
                "Minimum Number of 2 Partners and 2 Designated Partners required for registering a Limited Liability Partnership (LLP)"
            ]
        },
        {
            question: 'Who can become a Designated Partner?',
            answer: [
                "Every LLP must have minimum 2 designated partners who will be responsible for compliance under LLP Act. A partner who is an individual can be appointed as Designated partner and if LLP have only entities as partners their nominee who is a natural person appointed as designated partner."
            ]
        },
        {
            question: 'What is Directors Identification Number (DIN)?',
            answer: [
                "Directors Identification Number (DIN) is an identification number issued by the Ministry of Corporate Affairs, Government of India, to Directors of a company or Designated Partners of an LLP."
            ]
        },
        {
            question: 'How to Obtain a DIN?',
            answer: [
                "New DIN will be allotted to a Director / Designated Partner while registering a Company or LLP. Also, an Company / LLP can apply for a DIN for a proposed Director / Designated Partner."
            ]
        },
        {
            question: 'What is LLP Agreement?',
            answer: [
                "LLP agreement is an agreeent between the partners of LLP. LLP agreement defines the mutual rights and duties of each partner, the relationships among individual partners and that of each partner with the LLP. The LLP Agreement should be in accordance with first schedule of LLP Act."
            ]
        },
        {
            question: 'What is Registered Office?',
            answer: [
                "Registered Office refers to the official correspondence address of an LLP or its principal place of business. The address of the Registered Office will be used for all official communications of the LLP. The LLP shall affix the name and address of its registered office outside every office or place of business in a prominent position. Also, the name and address of its registered office should be mentioned in its business letters, bills and other official publications."
            ]
        },
        {
            question: 'Whether the Registered Office can be changed?',
            answer: [
                "Registered Office of the LLP can be shifted from one place to another in the same state or from one state to another after complying with legal requirements."
            ]
        },
        {
            question: 'What is Contribution?',
            answer: [
                "Contribution means the amount contributed by each partner in the LLP as per the LLP agreement. The contribution is the liability of each partner and an LLP can recover the agreed contribution from the partner. A partner can contribute to the capital by cash, goods or services subject to applicable valuation."
            ]
        },
        {
            question: 'Who is a partner of an LLP?',
            answer: [
                "A partner in relation to an LLP means any person who becomes a partner in the liability partnership in accordance with the LLP agreement. An individual (who is capable of entering in to an agreement) or a body corporate can become a partner in an LLP. A body corporate means an LLP registered under the LLP Act, limited company registered under the Companies Act, a registered legal entity in any country registered under relevant laws of that country. However, it does not include a society or a corporation sole."
            ]
        },
        {
            question: 'Who can become a partner of an LLP?',
            answer: [
                "An individual (who is capable of entering in to an agreement) or a body corporate can become a partner in an LLP. A body corporate means an LLP registered under the LLP Act, limited company registered under the Companies Act, a registered legal entity in any country registered under relevant laws of that country. However, it does not include a society or a corporation sole."
            ]
        },
        {
            question: 'What is LLPIN?',
            answer: [
                "LLPIN is a 7-digit alpha numeric registration number allotted by Ministry of Corporate Affairs, Government of India, to an LLP."
            ]
        }
    ],
    OPC: [
        {
            question: 'What is Directors Identification Number (DIN)?',
            answer: [
                "Directors Identification Number (DIN) is an identification number issued by the Ministry of Corporate Affairs, Government of India, to Directors of a company or Designated Partners of an LLP."
            ]
        },
        {
            question: 'How to Obtain a DIN?',
            answer: [
                "New DIN will be allotted to a Director / Designated Partner while registering a Company or LLP. Also, an Company / LLP can apply for a DIN for a proposed Director / Designated Partner."
            ]
        },
        {
            question: 'How many Persons required for registering an OPC?',
            answer: [
                "ONE Person who is an Indian National and resident in India can register an OPC. Also it requires another person as Nominee Shareholder. So, in effect you need TWO People for registering an OPC. The Primary Shareholer can also be a Director."
            ]
        },
        {
            question: 'Who can become a Shareholder or Nominee Shareholder in an OPC?',
            answer: [
                "An India National (Individual), who is resident in India can only become a Shareholder or Nominee Shareholder in an OPC. Foreign Nationals, Non Resident Indians, Companies and LLPs cannot become a Shareholder or Nominee Shareholder in an OPC."
            ]
        },
        {
            question: 'Who can become a Director in an OPC?',
            answer: [
                "Only individuals can become directors of the company. There is no restrictions for Foreign Nationals or Non Resident Indians to become a director of an OPC."
            ]
        },
        {
            question: "How many OPC's a person can register or become Nominee?",
            answer: [
                "A Person can register only ONE OPC. Also a person can not become nominee in more than one OPC."
            ]
        },
        {
            question: 'What is Memorandum of Association (MOA)?',
            answer: [
                "MOA is the charter document of a company. A company is created by registering a memorandum. MOA contains the name of a company, the state in which the registered office of the company is located, objectives, and its authorised capital. The MOA will be subscribed by the initial promoters of the company in their own handwriting. They will also have to write their name, father's name, residential address, occupation and the number of shares they agree to subscribe in the company. The MOA should also bear the signature of the witness who knows the subscribers."
            ]
        },
        {
            question: 'What is Articles of Association (AOA)?',
            answer: [
                "AOA contains rules and regulations for the management of a company's internal affairs and conduct of its business. It defines the relationship of company between its members and directors and relation between members and directors. It also describes powers of directors. Further, the AOA describes the rights and duties of its members as well as the duties and responsibilities of its directors. In case of a private limited company, the AOA will contain the restrictions of transfer of shares, if any. Also, AOA usually contains the names of first directors of a company. The AOA will be subscribed by the initial promoters of the company in their own handwriting. Promoters will have to write their names, father's name, residential address, and occupation. The AOA should also bear the signature of the witness who knows the subscribers."
            ]
        },
        {
            question: 'Can the details of subscribers to the MOA & AOA can be amended?',
            answer: [
                "The details of subscribers to the MOA & AOA cannot be amended or changed at any point of time during the life of the company, as it constitutes the document giving birth to a company. Subsequent changes in the shareholding or directorship of the company should be reflected in its internal records and will not affect the subscriber details in the MOA & AOA"
            ]
        },
        {
            question: 'What is Digital Signature Certificate (DSC)?',
            answer: [
                "A digital signature is a type of asymmetric cryptography used to simulate the security properties of a handwritten signature on paper. Digital signature schemes normally give two algorithms, one for signing that involves the user's secret or private key, and one for verifying signatures that involves the user's public key. Digital signatures have often confused with scanned copies of a physical written signature, which do not have any legal backing for authentication of electronic documents."
            ]
        },
        {
            question: 'What is Registered Office?',
            answer: [
                "Registered Office refers to the official correspondence address of a company or its principal place of business. The address of the Registered Office will be used for all official communications of the company. The company shall affix the name and address of its registered office outside every office or place of business in a prominent position. Also, the name and address of its registered office should be mentioned in its business letters, bills and other official publications."
            ]
        },
        {
            question: 'Whether the Registered Office can be changed?',
            answer: [
                "Registered Office of the company can be shifted from one place to another in the same state or from one state to another after complying with legal requirements."
            ]
        },
        {
            question: 'What is Authorised Capital?',
            answer: [
                "Authorised Capital or Registered Capital of a company is the upper limit of capital that a company can issue shares and collect money from shareholders. Company registration fee is payable to ROC and will be calculated on the basis of Authorised Capital. There is no requirement as to minimum Authorised Capital for registration of Company."
            ]
        },
        {
            question: 'What is subscribed capital?',
            answer: [
                "Subscribed capital refers to the amount of capital agreed to be brought in by the shareholders to the company."
            ]
        },
        {
            question: 'What is paid up capital?',
            answer: [
                "Paid up capital of a company refers to the amount of capital actually brought in by the shareholders to the company. Subscribers to the It is not necessary that subscribers should bring in the subscribed capital immediately after ncorporation. However, at the time of closing accounts for the first financial year, there should be a mimimum paid up capital of Rs.1,00,000."
            ]
        },
        {
            question: 'What is Corporate Identification Number (CIN)?',
            answer: [
                "CIN is the number allotted to a company registered in India by the Ministry of Corporate Affairs, Government of India. CIN is a 21-digit number that contains the information such as status (listed / unlisted), NIC code of business activity, state of registration, year of registration, private or public and the sequential registration number in the respective state (for example, U74110KA2008PTC046914)"
            ]
        },
        {
            question: 'Can a Minor be a Shareholder or Nominee?',
            answer: [
                "No. A minor can not become member or nominee of the One Person Company. Also a Minor cannot hold share with beneficial interest in an OPC."
            ]
        },
        {
            question: 'Whether OPC can do Non-Banking Financial activities and Investement?',
            answer: [
                "An OPC is prohibited from carrying Non-Banking Financial activites and Investment in securities of other body corporates."
            ]
        },
        {
            question: 'When an OPC can be converted to Private Limited Company?',
            answer: [
                "An OPC can be converted voluntarily into any other kind of company (Private Limited or Public Limited) only after 2 years from the date of incorporation. An OPC can be converted to any other kind of company within 2 years of Incorporation only if the the Paid up Capital of OPC exceeds Rupees Fifty Lakhs or its average annual turnover during a period of three consecutive financial years exceeds Rupees Two Crore."
            ]
        },
        {
            question: 'Why a Nominee is required in OPC?',
            answer: [
                "The subscriber to the memorandum shall nominate another person as nominee after obtaining a written consent from such person. In the event of the shareholder death or incapacity to contract, the Nominee shall become the member of that OPC."
            ]
        },
        {
            question: 'Can the shareholder OPC change Nominee?',
            answer: [
                "Yes, the shareholder can change the nominee with an intimation in writing to the company at any time for any reason and can nominate another person after obtaining the prior consent of new nominee."
            ]
        },
        {
            question: 'Can the Nominee withdraw his consent from OPC?',
            answer: [
                "Yes. The Nominee can withdraw his consent by giving a notice in writing to the sole member and to the One Person Company. In such case, the sole member shall nominate another person as nominee within fifteen days of the receipt of the notice of withdrawal."
            ]
        }
    ],
    PVT_LTD: [
        {
            question: 'What is Directors Identification Number (DIN)?',
            answer: [
                "Directors Identification Number (DIN) is an identification number issued by the Ministry of Corporate Affairs, Government of India, to Directors of a company or Designated Partners of an LLP."
            ]
        },
        {
            question: 'How to Obtain a DIN?',
            answer: [
                "New DIN will be allotted to a Director / Designated Partner while registering a Company or LLP. Also, a Company / LLP can apply for a DIN for a proposed Director / Designated Partner."
            ]
        },
        {
            question: "How many Shareholder(s) and Director(s) are required for registering a Private Limited Company?",
            answer: [
                "Minimum Number of 2 Shareholder and 2 Directors required for registering a Private Limited Company."
            ]
        },
        {
            question: "Who can become a Shareholder / Director in a Company?",
            answer: [
                "Shareholders could be Individuals, Companies or LLPs, but only individuals can become directors of the company."
            ]
        },
        {
            question: 'What is Memorandum of Association (MOA)?',
            answer: [
                "MOA is the charter document of a company. A company is created by registering a memorandum. MOA contains the name of a company, the state in which the registered office of the company is located, objectives, and its authorised capital. The MOA will be subscribed by the initial promoters of the company in their own handwriting. They will also have to write their name, father's name, residential address, occupation and the number of shares they agree to subscribe in the company. The MOA should also bear the signature of the witness who knows the subscribers."
            ]
        },
        {
            question: 'What is Articles of Association (AOA)?',
            answer: [
                "AOA contains rules and regulations for the management of a company's internal affairs and conduct of its business. It defines the relationship of company between its members and directors and relation between members and directors. It also describes powers of directors. Further, the AOA describes the rights and duties of its members as well as the duties and responsibilities of its directors. In case of a private limited company, the AOA will contain the restrictions of transfer of shares, if any. Also, AOA usually contains the names of first directors of a company.",
                "The AOA will be subscribed by the initial promoters of the company in their own handwriting. Promoters will have to write their names, father's name, residential address, and occupation. The AOA should also bear the signature of the witness who knows the subscribers."
            ]
        },
        {
            question: 'Can the details of subscribers to the MOA & AOA can be amended?',
            answer: [
                "The details of subscribers to the MOA & AOA cannot be amended or changed at any point of time during the life of the company, as it constitutes the document giving birth to a company. Subsequent changes in the shareholding or directorship of the company should be reflected in its internal records and will not affect the subscriber details in the MOA & AOA"
            ]
        },
        {
            question: 'What is Digital Signature Certificate (DSC)?',
            answer: [
                "A digital signature is a type of asymmetric cryptography used to simulate the security properties of a handwritten signature on paper. Digital signature schemes normally give two algorithms, one for signing that involves the user's secret or private key, and one for verifying signatures that involves the user's public key. Digital signatures have often confused with scanned copies of a physical written signature, which do not have any legal backing for authentication of electronic documents."
            ]
        },
        {
            question: 'What is Registered Office?',
            answer: [
                "Registered Office refers to the official correspondence address of a company or its principal place of business. The address of the Registered Office will be used for all official communications of the company. The company shall affix the name and address of its registered office outside every office or place of business in a prominent position. Also, the name and address of its registered office should be mentioned in its business letters, bills and other official publications."
            ]
        },
        {
            question: 'Whether the Registered Office can be changed?',
            answer: [
                "Registered Office of the company can be shifted from one place to another in the same state or from one state to another after complying with legal requirements."
            ]
        },
        {
            question: 'What is Authorised Capital?',
            answer: [
                "Authorised Capital or Registered Capital of a company is the upper limit of capital that a company can issue shares and collect money from shareholders. Company registration fee is payable to ROC and will be calculated on the basis of Authorised Capital. There is no requirement as to minimum Authorised Capital for registration of Company."
            ]
        },
        {
            question: 'What is subscribed capital?',
            answer: [
                "Subscribed capital refers to the amount of capital agreed to be brought in by the shareholders to the company."
            ]
        },
        {
            question: 'What is paid up capital?',
            answer: [
                "Paid up capital of a company refers to the amount of capital actually brought in by the shareholders to the company. It is not necessary that subscribers should bring in the subscribed capital immediately after incorporation. However, at the time of closing accounts for the first financial year, there should be a minimum paid up capital of Rs.1,00,000."
            ]
        },
        {
            question: 'What is Corporate Identification Number (CIN)?',
            answer: [
                "CIN is the number allotted to a company registered in India by the Ministry of Corporate Affairs, Government of India. CIN is a 21-digit number that contains the information such as status (listed / unlisted), NIC code of business activity, state of registration, year of registration, private or public and the sequential registration number in the respective state (for example, U74110KA2008PTC046914)"
            ]
        },
        {
            question: "Can a Private Company Accept Deposits?",
            answer: [
                "Private company cannot accept deposits from the public. However, it can accept loans and deposits only from its shareholders, directors and directors' relatives subject to conditions."
            ]
        },
        {
            question: "What is AGILE Application SPICe for Company Registration?",
            answer: [
                "AGILE application (SPICe) for incorporation of a company shall be accompanied by a linked e-form AGILE (Application for registration of the Goods and Services Tax Identification Number (GSTIN), Employees’ State Insurance Corporation (ESIC) registration plus Employees’ Provident Fund Organisation(EPFO) registration) with effect from 31st March 2019, as notified vide the Companies (Incorporation) Third Amendment Rules, 2019 dated 29th March 2019."
            ]
        },
        {
            question: "What is the government fee payable for registration?",
            answer: [
                "At present no government fee is applicable is the authorised capital is Rs.15 lakhs. State government stamp duty applicable as per respective state government stamp duty"
            ]
        },
        {
            question: "Commencement of Business",
            answer: [
                "Every company shall file commencement of business with Registrar within 180 days from the date of incorporation. Before filing commencement of business, all subscribers shall bring subscription capital into companies' account."
            ]
        },
        // {
        //     question: "What is the Corporate Tax application?",
        //     answer: [
        //         "In order to promote growth and investment, a new provision has been added to Income-tax Act with effect from FY 2019-20 which allows any domestic company an option to pay income-tax at the rate of 22% subject to condition that they will not avail any exemption/incentive. The effective tax rate for these companies shall be 25.17% inclusive of surcharge & cess. Also, such companies shall not be required to pay Minimum Alternate Tax."
        //     ]
        // },
        {
            question: "Corporate Tax at 15%",
            answer: [
                "In order to attract fresh investment in manufacturing and to boost ‘Make-in-India’ initiative of the Government, any new domestic company incorporated on or after 1st October 2019 making fresh investment in manufacturing, will have an option to pay income-tax at the rate of 15%. This benefit is available to companies which do not avail any exemption/incentive and commences their production on or before 31st March, 2023. The effective tax rate for these companies shall be 17.01% inclusive of surcharge & cess. Also, such companies shall not be required to pay Minimum Alternate Tax."
            ]
        }
    ],
    SECTION_8_COMPANY_NGO: [
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
        {
            question: "Is Name of Section 8 Company end with Limited?",
            answer: [
                "No, section 8 company name need not end with limited as last last world. This is an exemption given by companies act to section 8 company as such type of company is formed for charitable or non profit motive business"
            ]
        }
    ],
    TRUST_REGISTRATION: [
        {
            question: "Is it mandatory for the trust to get the registration done under section 12AB?",
            answer: [
                "Yes, a trust must get the registered under section 12AB of Income Tax Act, 1961 to claim an exemption under section 11."
            ]
        },
        {
            question: "Is trust a separate Legal Entity?",
            answer: [
                "In a strict legal sense, a trust is not a separate legal entity, unlike a company. A trust gets created when the settlor hands over any property to the trustee to be used and employed for the benefit of the beneficiary. This legal arrangement is codified vide a trust deed."
            ]
        },
        {
            question: "What are the Parties of a Trust?",
            answer: [
                "Settlor",
                "Trustee",
                "Beneficiaries"
            ]
        },
        {
            question: "What are the different types of Trust?",
            answer: [
                "Private Trust",
                "Public Trust"
            ]
        },
        {
            question: "What is the Difference between Trustee and Trustor?",
            answer: [
                "Trustor is the person who creates the trust, whereas the person who has the responsibility of managing the trust for the beneficiary is known as Trustee."
            ]
        },
        {
            question: "What is the governing law for a Trust?",
            answer: [
                "The Indian Trusts Act, 1882, is a governing law for a Trust in India"
            ]
        },
        {
            question: "What is a Public Trust and what is the purpose behind forming it?",
            answer: [
                "By and large an public trust is made for setting up a school, universities, other instructive activities, clinic, mature age homes, halfway house, for advancement of kid wellbeing and their strengthening, government assistance of more fragile segment of society, and for satisfaction of Corporate Social Responsibilities (CSR) by organizations."
            ]
        },
        {
            question: "What are the Documents Required During Trust Registration process?",
            answer: [
                "Proof of Identity for Trustor & Trustee",
                "Address Proof of Registered Office",
                "NOC from the Landlord is required",
                "Particulars of the Trustee and settlor",
                "Trust Deed on Proper Stamp Value.",
                "Photographs & PAN of Trustee and settlor."
            ]
        },
        {
            question: "How do I register a trust under Indian Trust Act 1882?",
            answer: [
                "Select an Appropriate Name",
                "Drafting of Trust Deed",
                "Selecting Settlers and Trustees of Trust",
                "Preparing Memorandum of Association",
                "Paying the Requisite Fees",
                "Collection of a Copy of Trust Deed",
                "Submission of Trust Deed to Registrar",
                "Obtain Registration Certificate"
            ]
        },
        {
            question: "What about Amendment in Private trust Deed?",
            answer: [
                "It is extremely difficult to amend a trust deed since a trust by its inherent nature is irrevocable. Therefore, it is important to provide the amendment clauses in the trust deed itself. However, if the amendment clauses provided in the trust deed are too wide, then the trust may not be treated as irrevocable."
            ]
        }
    ],
    SOCIETY_REGISTRATION: [
        {
            question: "Who is required to sign to the memorandum of society?",
            answer: [
                "Individual, Foreigners, Companies, Partnership firm, Other certified organisation."
            ]
        },
        {
            question: "Do the members of society have any rights in society?",
            answer: [
                "Yes, there are the following rights available to the members of society:",
                "They are entitled to vote",
                "They have the right to receive the notice of every meeting",
                "They have the right to receive a copy of bye-laws",
                "They have the right to receive financial statements",
                "They have the right to attend general meetings of societies"
            ]
        },
        {
            question: "Do the members have a share in the profit?",
            answer: [
                "No, members of society are not entitled to profit incurred by the organisation in any form."
            ]
        },
        {
            question: "What is the quorum required for a meeting of a society?",
            answer: [
                "Quorum’ implies the minimum number of members who must be present in the meeting to make the proceedings of the conference valid"
            ]
        },
        {
            question: "What is the General Body of a Society?",
            answer: [
                "General Body of a society comprises of all the members who have subscribed to the memorandum of the organisation."
            ]
        },
        {
            question: "Can Memorandum of Society Be Amended?",
            answer: [
                "Memorandum can be reformed by approval in an extraordinary General Body Meeting called for the purpose after giving due notice. By permission, another extraordinary General Body Meeting called after 30 days. Byelaws can be amended by approval of the majority of members in Special General Body Meeting. Such amended shall be filed with the Registrar within one month."
            ]
        },
        {
            question: "Do I need to have my office property to register an NGO?",
            answer: [
                "No. You can register an NGO in a rented property with a rested lease deed."
            ]
        },
        {
            question: "Can a government servant become a trustee?",
            answer: [
                "Yes, a government servant can become a trustee in an Indian trust."
            ]
        },
        {
            question: "What is 35ac?",
            answer: [
                "There is a special provision for people in the business. If they donate to those NGOs having 35ac registration, they get a tax rebate of 100%."
            ]
        }
    ],
    NBFC_REGISTRATION: [
        {
            question: "Does RBI registration mandatory for NBFCs?",
            answer: [
                "Yes, RBI registration is mandatory for setting up NBFC in India under section 45-IA of the RBI Act, 1934."
            ]
        },
        {
            question: "Is there any type of NBFC which is exempt from RBI registration?",
            answer: [
                "On the basis of their nature of activity, different types of NBFCs are regulated by different type of financial bodies such as RBI, SEBI, IRDA, and MCA. Thus, it is clear that it is not important for every NBFC to obtain license from RBI but surely they have to apply for registration with their respective regulatory body."
            ]
        },
        {
            question: "Can existing company apply for NBFC license?",
            answer: [
                "Yes, existing company can apply for license if it is registered under Companies Act."
            ]
        },
        {
            question: "How much capital is required for NBFC registration?",
            answer: [
                "There is a requirement of minimum capital of Rs. 2 cr which will be reserved in the form of fixed deposit in the current account of the company."
            ]
        },
        {
            question: "What will be the total fees for NBFC registration?",
            answer: [
                "Well, as per the government rules & regulations there is a basic need of minimum capital of Rs. 2 Cr consequently applicant first have to apply for company registration with minimum capital along with the government fees of filing necessary forms."
            ]
        },
        {
            question: "Is NBFC eligible to accept deposits?",
            answer: [
                "Yes, NBFC is eligible to accept deposits but at least for a period of 12 months and maximum for a period of 60 days on the other hand demand deposits cannot be accepted by NBFC."
            ]
        },
        {
            question: "Can NBFC applicant take loan to meet the minimum capital requirement?",
            answer: [
                "No, to meet the minimum capital requirement loan cannot be taken."
            ]
        },
        {
            question: "Is it mandatory to posses’ financial experience in order to apply for NBFC license?",
            answer: [
                "Yes, it is important to have financial sector exposure to minimum 1/3rd directors to apply for NBFC license."
            ]
        },
        {
            question: "Is there any cap on interest rate for NBFCs?",
            answer: [
                "Interest rate will be mentioned in the business plan submitted by the applicant to the RBI at the time of registration subject to the limit prescribed by the RBI."
            ]
        },
        {
            question: "What type of loans can be given by NBFCs?",
            answer: [
                "NBFC-ND can give unsecured personal loan & business loan, Secured loan against property, loan against securities, loan to MSMEs, Gold loan etc. however it should be mentioned in the business plan."
            ]
        },
        {
            question: "Can I apply for NBFC license without taking help of professional consultant?",
            answer: [
                "No, professional expertise is crucial to apply for NBFC license."
            ]
        },
        {
            question: "What can happen in case of carrying NBFC activities without obtaining license from RBI?",
            answer: [
                "In this case, RBI can impose heavy fine penalty and can prosecute defaulter in the court of law."
            ]
        },
        {
            question: "Does the NBFC license is valid for lifetime?",
            answer: [
                "Yes, but it can be cancelled by RBI at any time in case of non-compliance."
            ]
        },
        {
            question: "What if NBFC license got cancelled by RBI?",
            answer: [
                "RBI is empowered to cancel NBFC license but in this case applicant can file an appeal against the RBI order within the defined time duration i.e. within 30 days from the date of order received regarding cancellation of certificate of registration."
            ]
        }
    ],
    NBFC_TAKEOVER: [
        {
            question: "What is an NBFC Takeover?",
            answer: [
                "In simple language, when a business entity purchases, any other NBFC business entity is called NBFC Takeover."
            ]
        },
        {
            question: "Is it mandatory to have RBI registration for NBFCs?",
            answer: [
                "Yes, it is necessary to have RBI registration for NBFCs set up under section 45-IA of the RBI Act, 1934."
            ]
        },
        {
            question: "Is there any need to submit income proof at the time of the takeover of NBFC?",
            answer: [
                "Yes, you have to submit income tax returns for the last three years to RBI."
            ]
        },
        {
            question: "What is RBI NOD?",
            answer: [
                "NOD has to acquire from RBI before proceeding for sale of NBFC, or change in management or transfer."
            ]
        },
        {
            question: "What should be the CIBIL score at the time of Takeover of NBFC?",
            answer: [
                "The minimum CIBIL score should be more than 700, and there shouldn't be any dispute or write-off of loans with banks in the previous two years."
            ]
        },
        {
            question: "What are the functions of NBFC?",
            answer: [
                "Infrastructure development, Wealth Creation, Providing customized loan solutions, Providing employment opportunities, and financial assistance to marginalized communities of India."
            ]
        },
        {
            question: "What is the time required for the completion of the Scrutinization process?",
            answer: [
                "After an application gets filed, the Scrutinization process requires around 2-3 months."
            ]
        },
        {
            question: "What are the different types of loans that NBFC provides?",
            answer: [
                "NBFCs can grant loans like loans against securities, business loans, unsecured personal loans, Gold loans, loans to MSMEs, etc."
            ]
        },
        {
            question: "What are the merits of NBFC Takeover?",
            answer: [
                "Increase in sales and revenues.",
                "Escalating the profitability of the target company reduces the scope of competition."
            ]
        },
        {
            question: "Give two main differences between Banks and NBFCs?",
            answer: [
                "NBFCs cannot issue demand drafts, while Banks can issue demand drafts.",
                "NBFCs cannot issue the cheque to their customers, while Banks can issue the cheque."
            ]
        }
    ],
    FFMC_LICENSE: [
        {
            question: "What is a Full Fledged Money Changer?",
            answer: [
                "Authorized entities that have got the approval from Reserve Bank of India to enter into Foreign Exchange Business in consonance with section 10 of Foreign Exchange Management Act, 1999."
            ]
        },
        {
            question: "What is the Central Objective of FFMC concerning its Business?",
            answer: [
                "The central objective of FFMC to do business is to ensure the customers that they will get effective and best in the market services despite the competitive environment. Also, FFMC endeavors to widen the foreign exchange facilities to tourists visiting India, and even the NRIs will be benefitted."
            ]
        },
        {
            question: "What are the Conditions for a Company Applying for FFMC License in India?",
            answer: [
                "The first and foremost step for the company applying for FFMC License is that it should get itself registered with the Companies Registrar under Companies Act, 2013. The object clause should state that the primary activity of the entity will be the Forex currency exchange. At the same time, the company should ensure that the corporation is free from any legal cases, and no ongoing case is pending with the Department of Enforcement or Revenue Intelligence."
            ]
        },
        {
            question: "Is There any Requirement of Yearly Renewal of the FFMC License?",
            answer: [
                "Yes, FFMC License must go through the renewal process every year by submitting the application documents to RBI."
            ]
        },
        {
            question: "Is there any Possibility of Carrying out Money changing Business without the License of FFMC?",
            answer: [
                "No, there is zero possibility to work as a money changer without getting the FFMC Licensing."
            ]
        },
        {
            question: "Where is one supposed to submit the Application for FFMC License?",
            answer: [
                "Under Section 10(1) of FEMA, 1999, Application in the prescribed form, as well as required documents, must be submitted towards the respective Regional Office of Foreign Exchange Department of RBI."
            ]
        },
        {
            question: "Name the Three Types of FFMC Licenses?",
            answer: [
                "The three types of FFMC Licenses are classified as-",
                "Authorized Dealer Category- 1(Banks)",
                "Authorized Dealer Category- 2(Authorized Dealers)",
                "Full Fledge Money Changers (FFMC)"
            ]
        },
        {
            question: "Are the Franchisees authorized to carry out all the Activities of the Authorized Dealer (2) Category?",
            answer: [
                "No, the franchisees are allowed to carry out limited money changing activities as per the master circular of RBI."
            ]
        },
        {
            question: "Apart from Getting FFMC License Approval, What are the Other Registrations required?",
            answer: [
                "Submit all these copies to the Regional Office of RBI before commencing business",
                "A copy of lease agreement",
                "A copy of registration under shops",
                "Rent receipt or Establishment Act"
            ]
        },
        {
            question: "For What Purpose FFMC has got the Authority to Sell Foreign Exchange?",
            answer: [
                "Business Visits",
                "Private Visits",
                "Forex Prepaid Cards"
            ]
        }
    ],
    NBFC_COLLABORATION: [
        {
            question: "What is NBFC Collaboration?",
            answer: [
                "NBFC Collaboration is an exercise in which active collaboration between NBFC and Fintech firms/banks takes place for funding and sourcing of leads."
            ]
        },
        {
            question: "What is the principal purpose behind NBFC Collaboration?",
            answer: [
                "The principal purpose of this collaboration is to raise funds."
            ]
        },
        {
            question: "Classify all the models of Fintech-NBFC Collaboration?",
            answer: [
                "The various models of Fintech-NBFC Collaboration are",
                "Lead-Based Model",
                "Co-Lending Model",
                "Fintech-Led Model"
            ]
        },
        {
            question: "What is this Fintech-Led Model all about?",
            answer: [
                "A Fintech-Led Model is a setup where Fintech Company enters into the shoes of the lending company by joining hands with NBFC under the First Loss Default Guarantee Cover."
            ]
        },
        {
            question: "Why NBFC opens a separate bank account?",
            answer: [
                "NBFC opens a separate bank account to meet out the loaning needs."
            ]
        },
        {
            question: "Is there any requirement for NBFCs to check the financial strength and background of Fintech Companies before any collaboration?",
            answer: [
                "Yes, NBFCs should go for proper checking of financial health and background of Fintech firms."
            ]
        },
        {
            question: "In NBFC Collaboration Business Model, who provides FLDG and fund?",
            answer: [
                "Fintech Company provides FLDG and funds at the initial step of the NBFC Collaboration Business Model."
            ]
        },
        {
            question: "To whom Fintech Company will render collection services?",
            answer: [
                "It will render collection services to Non-Banking Financial Company."
            ]
        },
        {
            question: "If a Fintech Company has raised foreign funds as debt, what shall be its compliance requirements?",
            answer: [
                "A Fintech Company shall conform to the guidelines of External Commercial Borrowings (ECB) in case if a Fintech Company has raised foreign funds as loan/debt."
            ]
        }
    ],
    MICROFINANCE_COMPANY_REGISTRATION: [
        {
            question: "What do you mean by Micro-finance company?",
            answer: [
                "Microfinance is also coined as 'microcredit'. It is a financial service that provides loans, savings, and insurance to entrepreneurs and small business owners who don’t have access to traditional sources of capital, like banks or investors. Microfinance is also named as microcredit."
            ]
        },
        {
            question: "How to register a micro-finance company?",
            answer: [
                "File Name Approval Application",
                "Apply for DIN & DSC",
                "Certificate of Incorporation",
                "Online Application to RBI",
            ]
        },
        {
            question: "What are the basic Documents required to register microfinance companies?",
            answer: [
                "Copy of PAN Card,",
                "Aadhar Card,",
                "Address Proof (Bank Statement, Mobile Bill, Telephone Bill),",
                "Passport Size Photo,",
                "Ownership Proof (Electricity bill etc.),",
                "Utility Bill (Gas bill, Electricity bill),",
                "NOC"
            ]
        },
        {
            question: "State the advantages of registering a microfinance company?",
            answer: [
                "It benefits in fostering self-reliance and entrepreneurship.",
                "Constant and smooth access to funding",
                "High-grade overall loan repayment rate in correlation to traditional bank"
            ]
        },
        {
            question: "What are the registration fees?",
            answer: [
                "The starting registration fees for Microfinance Company is Rs.1,190,000/-"
            ]
        },
        {
            question: "Can Microfinance companies provide loans for the personal use of borrowers?",
            answer: [
                "Yes, the loan can be provided for the personal purpose of the borrowers by Microfinance companies; the still aggregate amount cannot exceed 30% of the total investment."
            ]
        },
        {
            question: "Does the Prepayment penalty be imposed by Microfinance companies?",
            answer: [
                "No, the prepayment penalty cannot be imposed by Microfinance companies."
            ]
        },
        {
            question: "What are the limitations of interest rate & loan processing charges of Microfinance companies?",
            answer: [
                "Microfinance Companies are not available to charge a higher rate of interest from the directed rate of interest, and most variation cannot exceed 4%. In comparison, if we talk about loan processing costs, then it cannot exceed 1% of the gross loan amount. Microfinance Companies can levy loan insurance charges individually."
            ]
        },
        {
            question: "What are the Methods of Recovery?",
            answer: [
                "NBFC MFIs shall ensure that the Fair Practices Code is followed during recruitment, training, and supervision of field staff.",
                "Recovery should be non-coercive and be made only at a central designated place. If the borrower fails to come to the first designated place on two or more successive occasions, then field staff shall be allowed to recover the loan."
            ]
        },
        {
            question: "What do you mean by Net Assets?",
            answer: [
                "Net assets are described as Total Assets other than cash and bank balances and money market devices."
            ]
        },
        {
            question: "What do you mean by “Qualifying Assets?",
            answer: [
                '“Qualifying Assets” are loans disbursed to a borrower with an annual household income of less than Rs.1,00,000 in rural areas or Rs. 1,60,000 in urban and semi-urban regions.'
            ]
        },
        {
            question: "What about the restrictions on the remaining 15% of the assets that an NBFC-MFI holds?",
            answer: [
                "No, there are no restrictions."
            ]
        },
        {
            question: "Is it possible that NBFC-MFIs should lend funds for personal use/accidents?",
            answer: [
                "Apart (i.e., a maximum of 50 percent) of the cumulative amount of loans may be judged for other purposes such as housing repairs, education, medical, and other emergencies. However aggregate amount of loans given to a borrower for income generation should constitute at least 50 percent of the total loans from the NBFC-MFI."
            ]
        }
    ],
    HOUSING_FINANCE_COMPANY_REGISTRATION: [
        {
            question: "What is Housing Finance Company?",
            answer: [
                'The Housing Finance Company is a sort of Non-Banking Financial Company (NBFC) which is involved in the vital business of "financing of obtaining or development of houses". For the most part, Housing Finance Companies are those kinds of organizations who have the primary object of conveying business of giving money for housing whether straightforwardly or in a roundabout way. They are controlled by the National Housing Bank (NHB).'
            ]
        },
        {
            question: "Is Housing Finance Company a NBFC?",
            answer: [
                "Housing Finance Companies, Merchant Banking Companies, Stock Exchanges, Companies engaged in the business of stock-broking/sub-broking, Venture Capital Fund Companies, Nidhi Companies, Insurance companies and Chit Fund Companies are NBFCs but they have been exempted from the requirement of registration under Section 45."
            ]
        },
        {
            question: "Are Housing Finance Companies regulated by RBI?",
            answer: [
                "With the aim to materialize this sector there is a need to conduct synchronization between the Government, Reserve Bank of India (RBI) and National Housing Bank (NHB).",
                "RBI regulates – lending to the housing by Banks",
                "NHB regulates - lending to the housing by HFCs"
            ]
        },
        {
            question: "Why Housing Finance Companies are down?",
            answer: [
                "The housing finance sector growth has slowed down in the last one year due to liquidity crunch. In case the liquidity situation does not improve, HFCs may start seeing stress in the commercial real estate segment. The housing finance sector growth has slowed down in the last one year due to liquidity crunch."
            ]
        },
        {
            question: "Can a company take housing loan?",
            answer: [
                "That decision depends on the lender's assessment of the creditworthiness of the person or entity who is attempting to borrow money. However, yes — in general — a business can get a mortgage just like anything else. Getting a loan (even a mortgage — no difference) is legal; it would not be a problem, legally."
            ]
        }
    ],
    NBFC_ACCOUNT_AGGREGATOR_LICENSE: [
        {
            question: "What is the core function of NBFC-Account Aggregator?",
            answer: [
                "Record aggregators gather data about clients' money related resources and give the data in a united, sorted out and retrievable way based on the guidelines of the client. Financial specialists would have the option to take the administrations of the record aggregators on their own circumspection."
            ]
        },
        {
            question: "Is it necessary for existing business of account aggregation to apply for NBFC-AA?",
            answer: [
                "Truly, it was required for all the current organizations of record aggregator to apply for enlistment inside the time of one month from the date of issue of ace bearings by RBI. Bearings were given by RBI on second September 2018."
            ]
        },
        {
            question: "Who regulates NBFC-AA?",
            answer: [
                "The RBI is enabled to take care of the action of record aggregators and guarantees that exercises are in similarity with the recommended guidelines."
            ]
        },
        {
            question: "Is NBFC-AA registration is still necessary if the entity is regulated by another financial sector regulator?",
            answer: [
                "Elements which are managed by other monetary area controllers are excluded from the prerequisite of NBFC-AA. Such exclusion is permitted to just those elements which are engaged with collection of records of a client of another money related area."
            ]
        },
        {
            question: "Do I need to increase the limit of NOF (Net Owned Fund) upto Rs 2 crores before applying for NBFC-AA registration?",
            answer: [
                "No, it isn't obligatory to expand the constraint of NOF up to Rs. 2 crores before applying for enlistment, be that as it may, the organization needs to meet the rules of NOF of at least Rs. 2 crores inside the time of a year from acquiring a CoR by RBI."
            ]
        },
        {
            question: "Is it necessary to put operations on hold till the CoR is granted if the existing businesses of account aggregator have made application for NBFC-AA registration?",
            answer: [
                "Subsequent to applying for enlistment, they are allowed to convey tasks of NBFC account aggregator till the CoR is dismissed by the power or a year from date recording of the application, whichever is prior."
            ]
        },
        {
            question: "Which entities can participate in the AA ecosystem?",
            answer: [
                "Organizations enrolled or directed by any of the 4 controllers – Reserve Bank of India (RBI), Securities and Exchange Board of India (SEBI), Insurance Regulatory and Development Authority (IRDAI), Pension Fund Regulatory and Development Authority (PFRDA) can be a FIP or FIU."
            ]
        },
        {
            question: "Is it compulsory for all banks to join AA ecosystem?",
            answer: [
                "No, players managed by Reserve Bank of India (RBI), Securities and Exchange Board of India (SEBI), Insurance Regulatory and Development Authority (IRDAI), Pension Fund Regulatory and Development Authority (PFRDA) are not ordered to be a piece of AA environment. Be that as it may, the upsides of being a piece of AA will probably drive a draw based choice to join the AA biological system."
            ]
        },
        {
            question: "What is an FIU?",
            answer: [
                "FIU means 'Financial Information User'. A FIU expends the information from a FIP to offer different types of assistance to the end shopper. For example a loaning Bank needs access to the borrower's information to decide whether a borrower meets all requirements for an advance. The loaning Bank is the FIU. Banks assume a double job – both as a FIP and a FIU."
            ]
        },
        {
            question: "What kind of data can an FIU access through an AA?",
            answer: [
                "Presently only assets based information is accessible (ledgers, stores, shared assets, protection strategies, annuity reserves). Other information types are probably going to be included after some time."
            ]
        },
        {
            question: "What is the difference between banks and NBFCs?",
            answer: [
                "NBFC and bank both are monetary organizations. However, the significant distinction is not normal for banks NBFC cannot give self drawn checks and demand draft. NBFC represents non banking budgetary organization as the name recommends NBFC isn't a bank, perform just loaning capacities to open and NBFC can't acknowledge stores from public."
            ]
        },
        {
            question: "How do account aggregator work?",
            answer: [
                "Account Aggregator works by arranging data from various records which may incorporate financial balances, credit card accounts, venture accounts, and other shopper or business accounts."
            ]
        }
    ],
    PREPAID_WALLET_LICENSE: [
        {
            question: "What is prepaid payment system?",
            answer: [
                "Prepaid payment instruments are methods that facilitate purchase of goods and services against the value stored on such instruments. The value stored on such instruments represents the value paid for by the holder, by cash, by debit to a bank account, or by credit card."
            ]
        },
        {
            question: "What is a closed wallet?",
            answer: [
                "A closed wallet is a mobile wallet or an e-Wallet which is designed for making full or part payment for the services directly provided by the wallet issuer. A Closed wallet cannot be used for making payments to any third party service providers or for money transfer."
            ]
        },
        {
            question: "What is semi closed card?",
            answer: [
                "Semi-closed wallets which have a specific contract with the issuer to accept the payment instruments but do not permit cash withdrawal or redemption by the holder & which enables the procuring of goods & services which consist of financial services at a group of clearly recognized merchant locations/ establishments."
            ]
        },
        {
            question: "How do I start an e-wallet business?",
            answer: [
                "There are two types of enterprises which can start an e-wallet - Banks and Non-Banking Financial Companies (NBFCs). Hence, the first step towards creating an e-wallet is to get your company registered as an NBFC with the Reserve Bank of India (RBI)."
            ]
        },
        {
            question: "How can I get PPI license from banks?",
            answer: [
                "Open System PPIs can be issued only by banks, who have RBI approval to issue such PPIs. There is only one type of open system PPI i.e. PPI upto ₹1,00,000/- after completing KYC of the PPI holder (KYC compliant PPI)."
            ]
        },
        {
            question: "What is a payment wallet?",
            answer: [
                "A wallet is a small software program used for online purchase transactions. Many payment solution companies, such as CyberCase, offer free Wallet software that allows several methods of payment to be defined within the wallet (for example, several different credit cards)."
            ]
        },
        {
            question: "How many types of e-wallets are there?",
            answer: [
                "There are five types of digital storage available for your use: Online Wallet: Online wallets run on the cloud so they can be accessed from multiple devices with an Internet connection. Online wallets are practical and convenient too."
            ]
        },
        {
            question: "What is a PPI license?",
            answer: [
                "Pre-paid Payment Instruments (PPIs) are defined in the RBI Guidelines issued under the Payment and Settlements Systems Act, 2005 as payment instruments that facilitate purchase of goods and services, including funds transfer, against the value stored on such instruments. PPIs are one component of the Payment System."
            ]
        },
        {
            question: "What is M wallet?",
            answer: [
                "A mobile wallet is a virtual wallet that stores payment card information on a mobile device. Mobile wallets are a convenient way for a user to make in-store payments and can be used at merchants listed with the mobile wallet service provider."
            ]
        },
        {
            question: "What is the cheapest payment gateway?",
            answer: [
                "PayPal is another cheap payment gateway. In addition, it is a secure payment platform, so you have to enter your bank details in each online store where you want to buy."
            ]
        },
        {
            question: "What are the documents required to obtain Prepaid Wallet License?",
            answer: [
                "Name of the applicant",
                "Constitution of the applicant",
                "Address proof of registered office",
                "Certificate of Incorporation",
                "Main business of the company",
                "Management Information",
                "Statutory auditor of Company",
                "Audited balance sheet",
                "Name and address of bankers of Company",
                "Any other documents as may be required"
            ]
        },
        {
            question: "What is digital wallet?",
            answer: [
                'A digital wallet also known as "e-Wallet" refers to an electronic device or online service that allows an individual to make electronic transactions. This can include purchasing items on-line with a computer or using a smartphone to purchase something at a store.'
            ]
        },
    ],
    PEER_TO_PEER_LENDING_LICENSE: [
        {
            question: "What is P2P lending platform?",
            answer: [
                "P2P lending platform is a type of lending platform which connects borrower and lender with each other. Peer to Peer lending has become a primary and comfortable choice of most of the start-ups and entrepreneurs during the initial days of their business when they are looking for venture funding. On this stage, business people can without much of a stretch obtain money from people."
            ]
        },
        {
            question: "Is P2P lending safe?",
            answer: [
                "The safety of P2P lending depends upon the factor like lending money to the low risk borrowers after proper verification."
            ]
        },
        {
            question: "Is cash transaction permitted to transfer the funds?",
            answer: [
                "No."
            ]
        },
        {
            question: "What is the validity of P2P lending license?",
            answer: [
                "The in principal approval given by RBI would be valid for 12 months from the date approval is granted."
            ]
        },
        {
            question: "What are the cons of Peer-to-Peer lending platform for both the borrowers and lenders?",
            answer: [
                "Amount of loan is quite low in comparison to banks",
                "Often you experience more borrowers and less lenders",
                "Less Security",
                "Regardless of whether the credit rating assessment done by the stage is dependable or not, is a worry. In this way the hazard related isn't sure.",
                "With the P2P business still in its incipient stage, it would be too soon to arrive at a complete resolution.",
                "Returns are lower in contrast with traded on an open market list finance",
            ]
        },
        {
            question: "What are the eligibility criteria for obtaining Peer-to-Peer License?",
            answer: [
                "Company must be registered in India",
                "It is essential for applicant to have technological, entrepreneurial and managerial resources",
                "So as to complete P2P lending platform, a candidate must have satisfactory capital structure;",
                "Proposed Directors must satisfy the fit and legitimate models",
                "There must be a legitimate arrangement for proficient Information Technology System",
                "A feasible Business Plan",
                "Thought process to serve in public interest"
            ]
        },
        {
            question: "How do you get Peer-to-Peer lending license?",
            answer: [
                "Organization ought to be registered in India as Private Limited Company or Public Limited Company with the principal motive of financing;",
                "Least net possessed assets of INR 2 crores.",
                "WebSite/Mobile App Work Flow",
                "The online application is accessible on RBI's site (COSMOS).",
                "Accommodation of printed copy of the application alongside joined documents will be submitted to RBI Office.",
                "The permit will be allowed simply after watchful review of the application and documents connected with it."
            ]
        },
        {
            question: "Can I make money out of P2P lending?",
            answer: [
                "P2P lending can be similarly as protected as some other investment. No investment is ensured to give you benefit each and every year. The chances of gaining a benefit with P2P loaning are a lot higher when you put resources into borrowers with great credit."
            ]
        },
        {
            question: "Is P2P lending legal in India?",
            answer: [
                "In India, peer-to-peer lending is as of now managed by the Reserve Bank of India, India's Central Bank. It has distributed a discussion paper on guideline of P2P loaning and the final guidelines were discharged in 2017. There were more than 30 peer-to-peer lending platforms in India in 2016."
            ]
        },
        {
            question: "Can I lend money for profit?",
            answer: [
                "It is workable for instance to loan money for benefit through different social lending sites. For this situation, you don't generally need to think a lot about how to advance cash."
            ]
        }
    ],
    PAYMENT_BANK_LICENSE: [
        {
            question: "Who issues the Payment Bank License?",
            answer: [
                "Under section 22 of the Banking Regulation Act, 1949, the Reserve Bank of India issues the Payment Bank License to the applicants."
            ]
        },
        {
            question: "What RBI guideline on is minimum Paid-up Capital for payment bank license?",
            answer: [
                "According to the RBI guidelines, the minimum required paid-up equity capital for opening a payment bank and receiving a Payment Bank License is Rs. 100 Cr."
            ]
        },
        {
            question: "Who can get Payment Bank License?",
            answer: [
                "Existing PPI, Professionals/Individuals, NBFCs (Non-Banking Financial Company), Supermarket chains, Corporate Business Correspondents, Companies, Mobile Telephone Companies, Real-Estate sector Co-operatives, and Public Sector units can get the Payment Bank License."
            ]
        },
        {
            question: "What are the Documents required for Payment Bank License Application?",
            answer: [
                "There are many documents and Information that need to be furnished for getting the Payment License Application. To know in detail, kindly refer to the above context for better understanding."
            ]
        },
        {
            question: "What should the Proposed Structure include?",
            answer: [
                "Detailed Information about the persons/entities, ",
                "A subscriber to 5 % or more of the paid-up equity capital (shareholding arrangement) of the proposed payment bank, ",
                "Show foreign equity participation, ",
                "Details of the sources of capital of the proposed investors and proposed bank "
            ]
        },
        {
            question: "What should a Project Report include along with the application?",
            answer: [
                "A project report must show the viability of the proposed and bank business potential, the business plan, any other financial services planned to be offered, etc. as per the RBI guidelines, and any other information that is reflected as relevant."
            ]
        },
        {
            question: "What is the Guiding policy for foreign shareholding?",
            answer: [
                "The Foreign Direct Investments policy for private banks must be the guiding policy for foreign shareholding."
            ]
        },
        {
            question: "What are the Regulatory Frameworks for Payment Bank in India?",
            answer: [
                "Those are:- Reserve Bank of India, 1934; The Companies Act, 2013; Banking Regulation Act, 1949, Foreign Exchange Management Act, 1999, Payment and Settlement System Act, 2007; Deposit Insurance and Credit Guarantee Corporation Act, 1961, and Other Statutes and Directives, Prudential Regulations and other Guidelines issued by RBI that may apply from time to time."
            ]
        },
        {
            question: "Can NRI Deposit in Payment Banks?",
            answer: [
                "No. NRIs are not permitted to make any deposit in the Payment Banks"
            ]
        },
        {
            question: "Should Payment Banks Embark on KYC and CFT?",
            answer: [
                "Yes, a Payments Bank must embark on its own CFT (Combating Financial Terrorism) exercise and KYC (Know Your Customer)/AML (Anti Money Laundering) as any other bank."
            ]
        },
        {
            question: "Can Payment Banks opt for RTGS/IMPS/NEFT?",
            answer: [
                "Yes. Under the payment system approval by the Reserve Bank of India, a Payment Bank can operate as a channel of accepting 'remittances' from banks, such as RTGS/IMPS/NEFT."
            ]
        },
        {
            question: "Does the Payment Bank Comply with Cyber Security norms?",
            answer: [
                "Yes. A Payment Bank needs to agree to take RBI (Reserve Bank of India) Compliances on Web-Banking, Technology Risk Management, Cyber Laws, Data Security, and Electronic Banking."
            ]
        },
        {
            question: "To whom the Payment Bank License application shall be addressed?",
            answer: [
                'The payment bank license application shall be addressed to the "Chief General Manager" of the Department of Banking Regulation, RBI.'
            ]
        },
        {
            question: "Who all consists of the External Advisory Committee to assess the applications?",
            answer: [
                "An EAC (External Advisory Committee), consisting of distinguished professionals like Chartered Accountants, Finance Professionals, Bankers, etc. shall assess the applications. They may call for Information and have deliberations and negotiations with applicants as may be deemed fit by it."
            ]
        },
        {
            question: "What is a Business plan in terms of the Payment Bank License?",
            answer: [
                "All the applicants for the payments bank's license will be obligatory to furnish their project reports and business plans with their applications. The business plan for the application should address how the bank aims to achieve the purposes of setting up payment banks in India."
            ]
        },
        {
            question: "Do I need to consult a Legal representative to get a Payment Bank license?",
            answer: [
                'Yes. It is advisable that an attorney with "Banking experience" must be appointed to overwhelm many of the potential pitfalls that creep around within the Payment Bank License, and to understand the requirement in detail.'
            ]
        },
        {
            question: "Should I get a Payment Bank License?",
            answer: [
                "Yes. You should. The payment banks are predictable enough to be a game-changer and transform the current banking system. It will fetch the banking on a broader scale in India and delivers a hugely profitable business."
            ]
        }
    ],
    PAYMENT_GATEWAY_LICENSE: [
        {
            question: "What are Payment Gateways?",
            answer: [
                "Payment Gateways are intermediary elements in between the banks and the websites promoting the delivery of Transaction reports."
            ]
        },
        {
            question: "Why the Security Standards are important in Payments Gateways?",
            answer: [
                "The sensitive information needs to be protected from any fraud and misrepresentations such as Debit/Credit Card Numbers, internet banking ids, and passwords, etc. For this reason, governing security standards to be followed by anyone get access to card information such as payment gateways by the card associations along with various rules and regulations."
            ]
        },
        {
            question: "What types of business of payment gateways is suited in India?",
            answer: [
                "Any business can take the form of sole-proprietorship, partnership, or the structure of a company; however, the business of payment gateways is suited if formed as a private limited company in India."
            ]
        },
        {
            question: "What is Second Party Providers in payment gateways?",
            answer: [
                "Parties starting from Rs 30,000 (setup costs are very high), Like HDFC, ICICI, and Axis having low Transaction Discount Rate (TDR) with lower transaction fees."
            ]
        },
        {
            question: "What is Third-Party Provider in payment gateways?",
            answer: [
                "Third-Party Providers such as EBS, CCAvenue, Payzippy, PayU, Direct Pay, which charges setup and annual fee; however, some even don’t charge that."
            ]
        },
        {
            question: "What do you mean by PCI DSS?",
            answer: [
                "PCI DSS contained rules and regulations and has launched on September 7, 2006. It intends to optimize the security of credit, debit, and cash card transactions and protect cardholders from facing any scams."
            ]
        },
        {
            question: "How the Secure Electronic Transactions (SET) is connected with the customers’ payment?",
            answer: [
                "SET allows merchants to verify their customers’ payment information protecting the customer without actually seeing it."
            ]
        },
        {
            question: "What is Merchant Agreement",
            answer: [
                "Merchant Agreement is a contract between the payment and business service provider."
            ]
        },
        {
            question: "How the Payment gateways comply with IT Regulations?",
            answer: [
                "A separate Website Privacy Policy and Terms and Conditions Policy must also be completed to comply with IT regulations up for the company's lawyer's portal."
            ]
        },
        {
            question: "What is Authorization Certificate in Form ‘B’?",
            answer: [
                "RBI may issue the Authorization Certificate in Form ‘B’ for commencing and carrying on a payment system to the applicant only if RBI is satisfied that all the requirements laid down in Section 7(1) gets fulfilled."
            ]
        }
    ],
    FEMA_COMPLIANCES: [
        {
            question: "What is the FEMA limit?",
            answer: [
                "FEMA's LSR plan allows a resident Indian, NRI, or overseas citizen to transmit funds from India to other countries up to USD 250,000 in a single monetary year without the need for RBI or central government approval."
            ]
        },
        {
            question: "What is a FEMA violation?",
            answer: [
                'The Foreign Exchange Management Act, 1999 (FEMA) is an Act of the Parliament of India "to consolidate and amend the law relating to foreign exchange to facilitate external trade and payments and promote the orderly development and maintenance of foreign exchange market in India."'
            ]
        },
        {
            question: "What is Form FC-GPR?",
            answer: [
                "RBI issues this form under Foreign Exchange Management Act, 1999. When the organization gets foreign investment and against such investment, it distributes its shares to such outside investors. It becomes the organization's obligation to file subtleties of such allotment of shares with the RBI within 30 days and for that organization needs to utilize the form FC-GPR (Foreign Currency-Gross Provisional Return) for submitting subtleties with RBI."
            ]
        },
        {
            question: "Who is an authorized dealer?",
            answer: [
                "An Authorized Dealer (AD) is any individual explicitly approved by the Reserve Bank under Section 10(1) of FEMA, 1999, to deal in foreign exchange or remote securities and regularly incorporates banks."
            ]
        },
        {
            question: "What are the main objectives of FEMA?",
            answer: [
                "The principle objective behind the Foreign Exchange Management Act (1999) is to unite and revise the law identifying with outside trade with the target of encouraging outer exchange and payment. It was also figured to advance the efficient turn of events and support outside trade showcases in India."
            ]
        },
        {
            question: "What is the LRS limit?",
            answer: [
                "The Liberalized Remittance Scheme (LRS) of the Reserve Bank of India (RBI) permits occupant people to transmit a specific cash flow during a budgetary year to another nation for venture and consumption. As per the predominant guidelines, inhabitant people may dispatch up to $250,000 per money-related year."
            ]
        },
        {
            question: "What is Form FC-TRS?",
            answer: [
                "Form FC-TRS stands for Foreign Currency Transfer. This form is filed at the time of transfer of shares or convertible debentures of an Indian company from a resident to a non-resident/non-resident Indian or vice versa with the purpose of sale."
            ]
        },
        {
            question: "What are the guidelines of FEMA compliance?",
            answer: [
                "FEMA will not apply to Indian citizens who live outside India. To check the residency of an Indian citizen, a method is adopted based on which number of days an individual lived in India is calculated during the preceding financial year (182 days or more to be a resident). An office, a branch, or an agency can be considered a person to calculate Indian residency.",
                "FEMA grants the authority to the central government to impose restrictions on three things and supervise those things as well. These are payment given to any individual outside India, payment received from any individual outside India, forex, and foreign security deals.",
                "It indicates the territories around acquisition/holding of forex that requires the Reserve Bank of India (RBI) or the government.",
                "FEMA classifies foreign exchange transactions into two categories:",
                "Capital Account",
                "Current Account"
            ]
        },
        {
            question: "Why is A2 form required?",
            answer: [
                "The model arrangement requires the remitter to announce what the remitter proposes and not what he won't do. Therefore, the A2 structure ought to be abstained from for settlements up to the US $ 25,000 for each annum, and any answering to the RBI for parity of installments ought to be filled by the AD and not the remitter."
            ]
        },
        {
            question: "What is the penalty for violation of FEMA?",
            answer: [
                "Any contradiction, under FEMA, may welcome after sorts of punishments: If the sum against which offense is amounts, at that point punishment will be 'THRICE,' the total associated with negation. Where the sum can't be measured, the punishment might be forced up to two lakh rupees."
            ]
        },
        {
            question: "How much does LRS cost?",
            answer: [
                "The Municipal Administration and Urban Development (MA&&UD) office reported Layout Regularization Scheme (LRS) for the 68 recently shaped districts and civil organization, with fundamental guideline charges beginning from ₹200 per sq ft for under 100 sq meters plot to ₹750 for plots over 500 sq meters."
            ]
        },
        {
            question: "Why was FERA replaced?",
            answer: [
                "The Foreign Exchange Regulation Act (FERA) was passed in 1973; the fundamental reason was to guarantee the utilization of outside trade. Unfortunately, the FERA made snags in the nation's advancement, so the government supplanted it by FEMA in 1999."
            ]
        },
        {
            question: "What is the difference between FPI and FDI?",
            answer: [
                "The genuine distinction between the two is that while FDI intends to assume responsibility for the organization in which venture is made, FPI means to procure benefits by putting resources into offers and obligations of the contributed element without controlling the organization."
            ]
        }
    ],
    MSME_UDYAM: [
        {
            question: "What schemes are launched by the government under MSME ?",
            answer: [
                "Technology and Quality Up gradation Scheme.",
                "Grievance Monitoring System",
                "Incubation",
                "Credit Linked Capital Subsidy Scheme.",
            ]
        },
        {
            question: "Who is eligible for MSME registration?",
            answer: [
                "Following entities are eligible for MSME registration-",
                "Sole Proprietorship",
                "Partnership Firm",
                "Limited Liability Partnership (LLP)",
                "Private Limited Company",
                "Public Limited Company",
                "Co-Operative Society and Trust.",
            ]
        },
        // {
        //     question: "Within how many days MSME Certificate will be Issued?",
        //     answer: [
        //         "MSME Certificate is issued within 1-2 working days from the date of submission of application."
        //     ]
        // },
        {
            question: "Are there any Chances of Rejection of the Online MSME Application?",
            answer: [
                "There can be various reasons for rejection of MSME application-i.e.",
                "Low CIBIL score,",
                "Unpaid debts,",
                "Loan defaults,",
                "Low cash flow,",
                "Lack of business plan,",
                "Incomplete documentation and False details, etc.",
            ]
        },
        {
            question: "How can an applicant get a copy of the MSME certificate?",
            answer: [
                "Once the MSME registration is complete, the applicant will receive a copy of the MSME certificate at the registered email address."
            ]
        },
        {
            question: "Is there any difference between Udyam Registration and MSME Certificate?",
            answer: [
                "Udyam Registration is a registration to start a business under the Ministry of Micro, Small, and Medium Enterprises approved by the Government of India. Whereas MSME Certificate is a 12-digit Unique Identification Number (UIN) provided by the Ministry of Micro, Small, and Medium Enterprises for Small and Medium Enterprises (SMEs)."
            ]
        },
        {
            question: "Is it mandatory to have an Aadhar number for MSME registration?",
            answer: [
                "Yes, Aadhaar card is mandatory for MSME registration."
            ]
        },
        {
            question: "Can a person applies for hard copy of the MSME certificate?",
            answer: [
                "No, As the Government has initiated the scheme for paperless work, so no physical copy is issued."
            ]
        },
        {
            question: "Can registered MSME’s get collateral free loans from financial institutions?",
            answer: [
                "Yes, MSME borrowers get collateral free loans from financial institutions."
            ]
        },
        {
            question: "Is credit score necessary for the MSME borrowers?",
            answer: [
                "No, credit score is not required for MSMEs."
            ]
        }
    ],
    IEC: [
        {
            question: "What are the provisions relating to the surrender of the IEC?",
            answer: [
                "IEC can be surrender by intimating the intention to the authority who earlier issued the license. Upon the receipt of an application for license surrender, issuing authority shall cancel the same after noting the reason thereof. Thereafter, DGFT is notified about the same who in return transmit it to custom, RBI or any such other authorities intimating about IEC becomes inoperative."
            ]
        },
        {
            question: "Who are exempted from obtaining IEC registration?",
            answer: [
                "Following is the exception for IEC registration:",
                "IEC is not an obligation for the traders registered under Goods & Service Tax (GST)",
                "If there is export or import of any product merely for personal consumption and not for commercial purpose, there will be no need to obtain IEC Registration",
                "There is no requirement to obtain IEC Registration in case the import or export is done on behalf of the Government of India by any department, ministry, or notified charitable institute.",
            ]
        },
        {
            question: "Is there any tax imposed based on IE Code?",
            answer: [
                "Import-Export code is not a tax registration; however, depending upon the product, the certain custom duty can be imposed."
            ]
        },
        {
            question: "Can the import-export be made without getting a license?",
            answer: [
                "No, any individual, company or sole proprietor engaged in the business of import-export needs to obtain an IEC license. It is the necessary recognition provided by the GovernmentGovernment to exporters and importer of goods or services. However, if the value of the good transacted is too low, the authority may permit first export after imposing nominal charges."
            ]
        },
        {
            question: "How to modify IEC application?",
            answer: [
                "You can modify your application numerous times before it is submitted to the next department."
            ]
        },
        {
            question: "What are the benefits of IEC?",
            answer: [
                "With the help of IEC Registration, you can obtain various benefits from the DGFT, Customs, export promotion council, etc."
            ]
        },
        {
            question: "Is it necessary to provide PAN Card?",
            answer: [
                "Yes, it is mandatory to provide PAN Card. You need to furnish the self-attested copy of your PAN Card along with the application."
            ]
        },
        {
            question: "What are the documents required to prove the genuineness of the firm in case the IEC is returned undelivered?",
            answer: [
                "You would need to provide proof of address copy of ownership title, registered copy of lease deed, copy of telephone bill, electricity bill, registered copy of rent deed, etc. need to be provided to prove the genuineness of your firm."
            ]
        },
        {
            question: "Do I need to provide the copy of only one side of PAN Card or both, and why?",
            answer: [
                "You need to provide a copy of both sides of your PAN Card to identify the issuing authority’s address."
            ]
        },
        {
            question: "Is there any need to revalidate at any point in time?",
            answer: [
                "No, the validity of IEC Registration is of a lifetime. Therefore there is no requirement to revalidate it."
            ]
        },
        {
            question: "What does an exporter need to do if he wishes to cancel the allotted IEC?",
            answer: [
                "Cancellation of the allotted IEC can be made by surrendering the same."
            ]
        },
        {
            question: "Is the requirement of IEC Registration, item-based?",
            answer: [
                "No, Import Export Code is a permanent document and is not item based."
            ]
        },
        {
            question: "What to do to obtain new or amended IEC?",
            answer: [
                "You need to check the status of your BIN or Business Identification Number on the official site."
            ]
        },
        {
            question: "What is the technical prerequisite for filing an IEC?",
            answer: [
                "The technical prerequisite for filing an IEC are :- Digital Signatures Token, PAN, Address Details of Branch Office, Bank Account in IEC Holder, Mobile Number and Email ID, Aadhar Card matching the details along with PAN Card."
            ]
        },
        {
            question: "How to apply for new online IEC application?",
            answer: [
                'Login to DGFT website > Proceed with registration process by clicking on Login > Register as user > Register as “Importer/Exporter”, Go to My Dashboard after registration > Importer Exporter Code (IEC) > Apply for IEC.'
            ]
        },
        {
            question: "Why is the registration of IEC required on DGFT Website?",
            answer: [
                "It enables you to have your own user profile. It helps to Apply / Link IEC and View IEC Dashboard under a single window as well as Apply and track applications easily. It also enables you to receive notifications over the dashboard, mobile and email."
            ]
        },
        {
            question: "How to register IEC on DGFT Website?",
            answer: [
                "Kindly go through the context as mentioned above for your detailed understanding on this issue."
            ]
        },
        {
            question: "What do you mean by Bank Details Validation?",
            answer: [
                "(a) Bank Details will be validated through ‘PFMS’ and its outcome will be made available the next day. (b) Risk shall be marked in RMS and User will be issued the IEC Immediately. (c) On the Successful bank details Validation– ‘RMS’ Flag will be removed. (d) On its Failure – ‘RMS’ Flag will be on hold."
            ]
        },
        {
            question: "How long it takes to issue new online IEC Certificate?",
            answer: [
                "The Normal time to receive is immediate from successfully submission of the IEC application."
            ]
        },
        {
            question: "The New IEC application or System is compatible with which suitable Browsers?",
            answer: [
                "The New IEC application or new portal is compatible with Chrome 70 + / Firefox 70 + / IE 11 + browsers."
            ]
        },
        {
            question: "Does Foreign Directors the PAN details is mandatory?",
            answer: [
                "No. For Foreign Directors the PAN details are not mandatory for the application."
            ]
        },
        {
            question: "What if the Name of the firm and Bank Account Name doesn’t match?",
            answer: [
                "You need to please check for the white spaces, if any, needs to be separate or remove to proceed. Moreover, the user needs to upload the supporting document for the Bank Account in accurate manner."
            ]
        }
    ],
    STARTUP_REGISTRATION: [
        {
            question: "What is Startup India?",
            answer: [
                "Start-up India Scheme is an initiative by the Government of India to promote the startup eco-system in India and to drive sustainable economic growth in India."
            ]
        },
        {
            question: "Is it an official Registration from Govt. of India?",
            answer: [
                "Yes. Start-up India Scheme is implemented through the Department of Industrial Policy & Promotions (DIPP), Government of India. After approval of application, DIPP, Government of India will issue a Certificate of Registration to the Startup"
            ]
        },
        {
            question: "Who can apply for Start-up India Scheme?",
            answer: [
                "Any business that is registered as a Private Limited Company or Limited Liability Partnership or a Partnership Firm can apply for recognition as a Startup"
            ]
        },
        {
            question: "What is are the requirements for Start-up India?",
            answer: [
                "The Business must be working towards innovation, development or improvement of products or processes or services, or if it is a scalable business model with a high potential of employment generation or wealth creation."
            ]
        },
        {
            question: "What are the advantages of Start-up registration?",
            answer: [
                "The following are the benefits declared by the Government of India to recognised Startups.",
                "1. Self-Certification of documents to be submitted to government authorities for various schemes",
                "2. Eligibility for application of Income Tax exemption and exemptions on Angel Tax.",
                "3. Easy winding up of company under insolvency & Bankruptcy code 2016.",
                "4. Fast track & up to 80% rebate in filling patents.",
                "5. Exemption on EMD and minimum requirements for Public Procurement Norms",
                "6. Access to Funds for investment into startups through Alternate Investment Funds.",
            ]
        },
        {
            question: "Whether all recognised Start-ups are exempted from Income Tax?",
            answer: [
                "No. Recognised start-ups those who are eligible can make an application for Income tax exemption or 3 years. Only after approval of the application, the startups are eligible for income tax exemption."
            ]
        },
        {
            question: "Whether all recognised Start-ups are exempted from Angel Tax?",
            answer: [
                "No. Recognised start-ups those who are eligible can make an application for exemption from Angel Tax. Only after approval of the application, the startups are eligible for Angel Tax exemption."
            ]
        }
    ],
    TRADEMARK: [
        {
            question: "What is a trademark class?",
            answer: [
                "The Trademark Registry has classified goods and services under 45 classes. Each class lists a host of goods/services and depending on those you are offering, you need to mention the class(es) on your trademark application. The trademark would be registered and protected under those classes only."
            ]
        },
        {
            question: "What trademark applications are commonly rejected?",
            answer: [
                "If your trademark is similar to an existing application, would hurt religious sentiments, contains geographical names, or common words. It would also be rejected if it is likely to confuse."
            ]
        },
        {
            question: "When can I use the ™ symbol?",
            answer: [
                "As soon as you file the application and receive an acknowledgement, you can use the ™ symbol. Once the registration process is complete, you can use the ® symbol."
            ]
        },
        {
            question: "What if my trademark is taken, but under a different class?",
            answer: [
                "If your brand name has already been registered, but under a different class, you're still in luck. Unless the brand is too well known (like McDonald’s or Fiat), your application is likely to be approved."
            ]
        },
        {
            question: "What if someone has a similar word trademarked?",
            answer: [
                "You can't get the word, but all is not lost. You could instead design a unique logo for your business and include the name in it. So there is a way out, but it is best to have a unique name."
            ]
        },
        {
            question: "Do you guarantee approval of my trademark?",
            answer: [
                "It depends entirely on the government's judgement. But if it is unique, it is highly likely that it will be granted."
            ]
        },
        {
            question: "Should I file the trademark in my own name?",
            answer: [
                "Many start-up founders register it in their own names, while large businesses would prefer to do so in the name of the company. This is because the future of a start-up is always in doubt. If owned by the founder, the trademark would be valid regardless of the state of the company. A trademark license agreement is, however, needed in this case."
            ]
        },
        {
            question: "How long does it take to get my trademark?",
            answer: [
                "It can take anywhere between 6 months to 1 year for your trademark to be approved. However, we can apply and start using the ™ symbol within few days if we can get all the details and documents at the earliest."
            ]
        }
    ],
    GST_REGISTRATION: [
        {
            question: "What is GST?",
            answer: [
                "GST stands for Goods and Service Tax. It is a single and comprehensive tax on the supply of goods and services across India, right from the manufacturer to the Consumer. GST is applicable to the whole of India except the state of Jammu & Kashmir."
            ]
        },
        {
            question: "Who is liable for GST Registration?",
            answer: [
                "Every person needs to get registered under GST in the state from where he makes taxable supply of goods and/or services, if his aggregate turnover in a financial year exceeds Rs.20 Lakhs (Rs.10 Lakhs in North Eastern States including Sikkim)"
            ]
        },
        {
            question: "When is GST Registration Applicable?",
            answer: [
                "Every person needs to get registered under GST in the state from where he makes taxable supply of goods and/or services, if his aggregate turnover in a financial year exceeds Rs.20 Lakhs."
            ]
        },
        {
            question: "How can I get GST number?",
            answer: [
                "An application is to be filed online with GST Portal with required business registration details and supporting documents. GST Department will review the application. On approval of application, the GST Certificate can be downloaded from the portal."
            ]
        },
        // {
        //     question: "How many days it will take to get GST number?",
        //     answer: [
        //         "When all the required documents are submitted online, generally it takes 4-5 days for approval from GST Portal. If the documents are defective, the process may be delayed further."
        //     ]
        // },
        {
            question: "What documents are required for GST registration?",
            answer: [
                "The following are the documents for GST Registration",
                "1. Incorporation Certificate Company / LLP",
                "2. PAN of Company / LLP",
                "3. Cancelled Cheque Leaf with Company name / Bank Statement",
                "4. Directors / Promotes",
                "5. PAN and Address Proof of all the Promoters",
                "6.Photograph of all the Promoters / Directors (jpeg format)",
                "7. Authorisation letter to the Primary Signatory",
                "8. Digital Signature Certificate Authorised Signatory / Signatories",
                "9. Business Address Proof - Electricity Bill or Tax Paid Receipt with the address and NOC From the Owner of Premises / Rental Agreement (Commercial Purpose) in Business Name"   
            ]
        },
        {
            question: "Who is exempted from Registration?",
            answer: [
                "The following persons shall not be liable to registration, namely:–",
                "1. any person engaged exclusively in the business of supplying goods or services or both that are not liable to tax or wholly exempt from tax under this Act or under the Integrated Goods and Services Tax Act;",
                "2. An agriculturist, to the extent of supply of produce out of cultivation of land.",
                "3. The Government may, on the recommendations of the Council, by notification, specify the category of persons who may be exempted from obtaining registration under this Act.",
            ]
        },
        {
            question: "What is the ARN number in GST?",
            answer: [
                "Application Reference Number (ARN) is a unique number assigned by the GST portal after successful submission of a transaction at GST Portal. ARN will be generated on successful submission of an application for registration with GST Portal."
            ]
        },
        {
            question: "Can ARN be used for GST Billing?",
            answer: [
                "No. Application Reference Number (ARN) is only a reference / confirmation that the application is filed for GST Registration."
            ]
        },
        {
            question: "What are the contents of GSTIN?",
            answer: [
                "Goods and Services Tax Identification Number-GSTIN is a 15-digit State wise and PAN based unique code issued by the GST Portal to each registration. The format of 15 digit GSTIN is as follows:",
                "First 2 Digits - State Code",
                "3-12 Digits - PAN number of a business",
                "13th Digit - Number of registrations of a business entity within a state. It will be an alpha numeric number (1-9 and A-Z) depends on the number of registrations.",
                "14th Digit - It will be by default as Z.",
                "15th Digit - A check code which is be used for detection of errors.",
            ]
        },
        {
            question: "After GST Registration, Is it mandatory to add GST to bill when the turnover is less than Rs.20 lakhs?",
            answer: [
                "Yes. Though the turnover is less that Rs.20 Lakhs, businesses will be compelled to obtain GST Registration on customer requirements for vendor empanelment. In that case, it is mandatory to add GST to bills and collect and pay the same to Government even if the company does not come under GST bracket as per business turnover criteria."
            ]
        },
        {
            question: "Is there any fee payable for obtaining GST Registration?",
            answer: [
                "No. There is no fee payable to the GST Department for obtaining the Registration."
            ]
        }
    ],
    PAN_APPLICATION: [
        {
            question: "Who can apply for PAN card?",
            answer: [
                "Any Indian citizen, including a minor, can apply for allotment of Permanent Account Number by furnishing valid proof and documents. Foreign individual or entity can also apply for PAN allotment."
            ]
        },
        {
            question: "Whether new business requires PAN card?",
            answer: [
                "Yes, every business established in India must apply for PAN card online or offline within the 30 days of establishment. However, sole proprietorship firm does not need so as it does not have a separate identity from its owner."
            ]
        },
        {
            question: "In how much time is the PAN allotted?",
            answer: [
                "Once the application for PAN Card is forwarded, generally it takes 5 – 7 working days for allotment of PAN. However, receipt of physical PAN card may take time."
            ]
        },
        {
            question: "What is the validity of PAN card?",
            answer: [
                "The Permanent Account Number, once allotted, comes with lifetime validity for individuals and business entities. If the businesses entities are dissolved or closed, it must surrender the allotted PAN."
            ]
        },
        {
            question: "Can I hold more than one PAN card?",
            answer: [
                "A Person cannot hold more than one PAN card. If a person holds more than one PAN, a penalty of Rs. 10,000/- may be imposed under section 272B. Therefore, the person holding more than one PAN must surrender it immediately."
            ]
        }
    ],
    TAN_APPLICATION: [
        {
            question: "Within how much time is the Tax Account Number (TAN) is allotted by NSDL?",
            answer: [
                "Once applied generally, it takes 7-10 working days for TAN allotment by NSDL. However, receipt of a physical TAN letter may take time depending upon the processing time by the department. Once the application for TAN number is made, it is always possible to know your TAN status."
            ]
        },
        {
            question: "Can a PAN be used instead of TAN?",
            answer: [
                "No, a PAN cannot be used instead of TAN. PAN and TAN serve two different purposes. Therefore, it is mandatory for those deducting tax at source to obtain a TAN."
            ]
        },
        {
            question: "How and when should the TDS be deposited?",
            answer: [
                "Tax Deducted at Source (TDS) must be deposited through banks using Challan 281, quoting the TAN number of the entity. The deadline for payment of TDS is the 7th day of every month."
            ]
        },
        {
            question: "What are the due dates to files TDS Returns?",
            answer: [
                "TDS Return should be filed quarterly on the 31st day of July, October, January and May. The TDS return filed on these months will correspond to the transaction of the preceding three months."
            ]
        }
    ],
    COPYRIGHT: [
        {
            question: "Does copyright apply to titles or names?",
            answer: [
                "Copyright does not ordinarily protect titles by themselves or names, short word combinations, slogans, short phrases, methods, plots, or factual information nor protect ideas or concepts. Copyright is provided only to original creative work."
            ]
        },
        {
            question: "Do I need a trademark or copyright? What is the difference?",
            answer: [
                "A trademark is a mark given to protect a brand name, logo or slogan. On the other hand, copyright is a protection given to unique content like a book, music, videos, songs, and artistic content."
            ]
        },
        // {
        //     question: "Is the process with Vakilsearch fully online?",
        //     answer: [
        //         "Yes, the process for GST registration is online completely. You can do everything in the personalised dashboard we provide for you."
        //     ]
        // },
        {
            question: "After applying for a copyright, if someone else copies my content, is there any protection?",
            answer: [
                "Yes, absolutely. You must immediately send a legal notice and after sending the notice, if the problem does not get resolved, you can even file a case in a court of law."
            ]
        },
        {
            question: "Is there any way to search whether my content has been copyrighted by someone else in the past",
            answer: [
                "No, there are no such provisions to check if the work has been copied by any third party. However, you can do a thorough search on the Internet to check if there is anything similar to yours."
            ]
        },
        {
            question: "What if anyone claims that I have infringed their work?",
            answer: [
                "In such a case, you will receive a legal notice from the third party, claiming that you have copied or reproduced their registered work. 7xStartup can help you reply to the legal notice and in the further litigation process."
            ]
        },
        {
            question: "Is copyright valid in India alone or is it valid across the world?",
            answer: [
                "India is a signatory of the Berne Convention, so copyright registered in India will get the status of foreign work and protection will be extended to countries that are also signatories to the Berne Convention."
            ]
        },
        {
            question: "What cannot be protected through copyright in India?",
            answer: [
                "Copyright protection is not applicable for ideas and methods - e.g., business operations, technical discoveries, mathematical principles, and other such concepts; commonly available info - e.g., telephone directories, general databases taken from free public records, etc.; Choreographic works and speeches unless they are notated or videotaped. Also, business names, product descriptions, taglines, and other such expressions cannot be copyrighted."
            ]
        },
        {
            question: "Is copyright applicable to mobile applications?",
            answer: [
                "A mobile application cannot be copyrighted as such; however, the coding can be copyrighted as literary work and other elements can be filed as different copyright applications."
            ]
        },
        {
            question: "Should my work be published to get registered for copyright?",
            answer: [
                "Published and unpublished works can be registered. If a work is already published, the publishing details need to be furnished along with the application."
            ]
        },
        {
            question: "Is there any chance of my copyright work getting rejected?",
            answer: [
                "Yes, if the discrepancy is not removed within the said timeline, the application will be abandoned."
            ]
        }
    ],
    ALTERNATIVE_INVESTMENT_FUND_REGISTRATION: [
        {
            question: "What is the Hedge Funds Category for registering AIFs?",
            answer: [
                "These funds use a combination of complicated trading strategies and are not limited to arbitrage, derivative trading, margin trading, etc. These funds are authorized under SEBI (Alternative Investment Fund) Regulations to invest in unlisted as well as listed derivatives."
            ]
        },
        {
            question: "What is 'Angel Fund'?",
            answer: [
                "'Angel Fund' is a sub-category of Venture Capital Fund under Category Alternative Investment Fund that raises funds from angel investors and invests in accordance with the provisions of Chapter III-A of AIF Regulations."
            ]
        },
        {
            question: "What is a 'Debt Fund'?",
            answer: [
                "A debt fund is an Alternative Investment Fund (AIF) that invests primarily in debt or debt securities of listed or unlisted investee companies according to the stated objectives of the fund. [Ref. Regulation 2(1)(i)]. These funds are registered under Category II. In this regard, it is clarified that, since Alternative Investment Fund is a privately pooled investment vehicle, the amount contributed by the investors shall not be utilized for the purpose of giving loans."
            ]
        },
        {
            question: "Who is the Sponsor of the AIF?",
            answer: [
                "‘’Sponsor’’ is any person(s) who set up the AIF and includes promoter in case of a company and designated partner in case of a limited liability partnership."
            ]
        },
        {
            question: "What is the legal structure of registered AIFs?",
            answer: [
                "As per the SEBI, AIFs can be registered, established, or incorporated in the Form of trust, company, LLP, partnership firm, body corporate. In general practice, the majority of AIFs are registered as a trust."
            ]
        },
        {
            question: "What is the meaning of the term 'Corpus'?",
            answer: [
                "It is defined as the total amount of money committed in a written agreement or any similar documents by investors on a particular date to the AIFs."
            ]
        },
        {
            question: "Is it possible for the AIF to raise funds from the public?",
            answer: [
                "No, it cannot go public. It cannot get listed or issue its shares and securities to the public."
            ]
        },
        {
            question: "Can AIF get investment from NRI and Foreign investors?",
            answer: [
                "Yes, it can get as per the current FDI policies under the FEMA act."
            ]
        },
        {
            question: "Can it be said that AIF is more profitable than Mutual Funds?",
            answer: [
                "The objective of AIF is different from mutual funds. AIF is a highly risky investment.MF is considered less risky than AIF and available to retail investors."
            ]
        },
        {
            question: "Is it mandatory to appoint a Custodian in AIF?",
            answer: [
                "Yes, it is mandatory for Cat-III and for others having a fund size of more than INR 500 Crores"
            ]
        },
        {
            question: "Can Category-II be prohibited from investing in Listed Companies?",
            answer: [
                "No, it is not. However, primarily its investment should be unlisted; hence 51% or more can be unlisted."
            ]
        },
        {
            question: "Can AIF invest in Commodity Derivatives?",
            answer: [
                "Yes, but only by AIF Cat -III"
            ]
        },
        {
            question: "Can I launch an AIF to raise funds for real estate project?",
            answer: [
                "AIFs can't directly in projects. They can only invest in securities of such projects. For Cat I and II, only 25% of the fund can be invested in one project."
            ]
        },
        {
            question: "Can AIF be created to invest in group companies?",
            answer: [
                "Yes, but approval of 75% of investors is mandatory."
            ]
        },
        {
            question: "Can AIF launch multiple schemes?",
            answer: [
                "Yes, it can. There is no limit on the number of schemes in AIF."
            ]
        }
    ],
    MERGERS_AND_ACQUISITIONS: [
        {
            question: "What are the reasons behind mergers & acquisitions?",
            answer: [
                "Eliminate Competition",
                "Establish a bigger market share",
                "Create a strong brand",
                "Reduce tax liabilities",
                "Set off the losses of one entity against the profit of the other",
            ]
        },
        {
            question: "What are the different types mergers in India?",
            answer: [
                "Horizontal Merger",
                "Vertical Mergers",
                "Co-generic Mergers",
                "Conglomerate Mergers",
                "Cash Mergers",
                "Forward Mergers",
            ]
        },
        {
            question: "Why would two companies merge what major factors drive mergers and acquisitions?",
            answer: [
                "Mergers and acquisitions occur for some, key business reasons, however the most widely recognized explanations behind any business mix are monetary at their centre. Increasing a competitive advantage or bigger piece of the overall industry. Companies may choose to merge into request to increase a superior distribution or advertising system."
            ]
        },
        {
            question: "Why do acquisitions fail sometimes?",
            answer: [
                "Also, from the getting organization's point of view, it's very normal for the business focal points they looked for – a mix of access to new items, access to new markets or geographies, piece of the overall industry expands, development quicker than natural development, and additionally economies of scale –simply fail to materialize."
            ]
        },
        {
            question: "What happens when two companies merge?",
            answer: [
                "A merger happens when an organization finds an advantage in joining business tasks with another organization such that will add to increased shareholder value."
            ]
        },
        {
            question: "What is the success rate of merger and Acquisition?",
            answer: [
                "As indicated by examined inquire about and an ongoing Harvard Business Review report, the failure rate for mergers and acquisitions (M&A) sits between 70 percent and 90 percent."
            ]
        },
        {
            question: "What happens if a merger fails?",
            answer: [
                "Mergers and acquisitions (M&A) are mind boggling business exchanges with much on the line. If a merger or Acquisition isn't effective, a business can lose considerable resources."
            ]
        },
        {
            question: "What is Acquisition?",
            answer: [
                "Acquisition is also known as the takeover that includes selling and buying of entire business between the included entities. Acquisition can happen in either friendly manner or hostile manner. Well, it involves the process of either acquiring the assets and liabilities of the target company or buying the shares of the target company. A demerger is likewise a type of Acquisition where a solitary element is divided into at least two elements."
            ]
        },
        {
            question: "What is joint venture?",
            answer: [
                "At the point when at least two substances meet up for a characterized reason – it could be entering another market or another business or for a particular ability, that abutting is known as the Joint Venture. It could be for a restricted period or for a boundless term."
            ]
        }
    ],
    ITR_FILING: [
        {
            question: "Whether NIL ITR is mandatory to be filed?",
            answer: [
                "All the business entities (Company, LLP, Firm) must file ITR even if their total income or tax payable is zero. In case of an individual, when income exceeds the basic exemption limit, it is recommended to file ITR to avoid scrutiny from the Income Tax Department. Also, if your tax liabilities is zero and have filed the ITR before, it is necessary to be filed. The same can be provided as a proof of income whenever required."
            ]
        },
        {
            question: "What are the due dates for IT return online filing?",
            answer: [
                "The due dates for filing ITR online are mentioned below – let’s take an e.g. of  (F.Y. 2017 – 18 & A.Y. 2018 – 19)",
                "1. Up to 31st July of next year (31st July, 2018) – Individuals, HUF, BOI and AOP (who does not fall under the audit provisions)",
                "2. Up to 30th September of next year (30th September, 2018) – Companies including other entities on which Audit provisions are applicable"
            ]
        },
        {
            question: "Do I need to file return if there is a loss in my business income?",
            answer: [
                "Yes, filing ITR in case of loss would be in your interest itself. With online ITR filing, you can carry forward the losses to a certain upcoming financial year to set off losses against the future profits."
            ]
        },
        {
            question: "Whether payment of tax is made while IT return filing?",
            answer: [
                "No, the income tax is paid during the financial year in which the income is earned. While filing ITR, if the tax liability is more than the already paid advance tax, the due amount must be paid with interest, if applicable."
            ]
        },
        {
            question: "Can I file ITR once the last date of filing is gone?",
            answer: [
                "In case you fail to file the return on a due date, there is a provision to file return up to a certain date, however with a late filing fee and reduced benefits, the belated return can be filed before the end of Assessment Year for the concerned financial year. That means, for F.Y. 2017-18, belated returns can be filed till 31st March, 2019."
            ]
        },
        {
            question: "What is the penalty for a delay in filing ITR?",
            answer: [
                "Late filing fee will be levied based on the date of filing belated return. The late fee for filing depends on the period of filing:",
                "1. For return filed after due date but till December – late filing fees of ₹ 5,000 will be charged",
                "2. For return filed after 31st December – late filing fees of  ₹10,000 will be charged",
                "However, for small taxpayers with an income up to ₹ 5 Lakh, the fees are limited to ₹ 1,000 only."
            ]
        },
        {
            question: "Is it possible to revise the Income Tax return even after the acknowledgement is generated?",
            answer: [
                "To revise the filed ITR, the deadline is 1 year from the end of the next financial year. Therefore, in the case of F.Y. 2017-18, the last date of filing would be 31st March, 2019."
            ]
        }
    ],
    TDS_RETURN_FILING: [
        {
            question: "Who is required to file TDS return online?",
            answer: [
                "Any assessee deducting tax from a source must file the TDS return. Unless one has deducted tax, a requirement to file TDS return does not arise."
            ]
        },
        {
            question: "What is a TDS Certificate?",
            answer: [
                "As the name says, TDS is collected on source of income and therefore the frequency of collection is as frequent as the transactions are. This makes track of deduction difficult. Therefore, a certificate on the letterhead of the deductor is issued to deductee for the TDS payment. Individuals are advised to request for TDS certificate wherever applicable, if not already provided."
            ]
        },
        {
            question: "What is the penalty for delay or non-filing?",
            answer: [
                "The taxpayer failed to file TDS return before due date has to pay ₹ 200 per day of delay in filing as an additional fee. Apart from an additional fee, the penalty can be levied u/s 271H of Income Tax Act. The minimum penalty prescribed is ₹ 10,000 which may extend to One Lakh Rupees."
            ]
        },
        {
            question: "How and when the TDS must be deposited?",
            answer: [
                "Tax Deducted at Source (TDS) must be deposited through banks using Challan 281 quoting the TAN number of the entity. The deadline for payment of TDS is the 7th day of each month."
            ]
        },
    ],
    GST_RETURN_FILING: [
        {
            question: "Is everyone supposed to file GST returns or are there any exemptions?",
            answer: [
                "Every registered dealer, whether being a normal supplier or otherwise must file the return based on the transactions or activities involved in the business. Non-filing of the same may lead to default and may attract a penalty or additional fees."
            ]
        },
        {
            question: "What are the modes of payment for GST?",
            answer: [
                "Tax Payment or any penalty, fees, etc. are accepted through the following modes;",
                "• Internet Banking",
                "• NEFT or RTGS",
                "This amount shall be credited to the electronic cash ledger of the registered dealer."
            ]
        },
        {
            question: "What is the significance of all these returns?",
            answer: [
                "By filling the returns with the Government, the information and details will be intimated to the Government. Further, the data provided will measure the liability of the Tax-payer. Also, returns filing help you claim the eligible Input Credit. In addition to which the regular filing will count on higher rating in the GST Compliance Rating."
            ]
        },
        {
            question: "What are taxable events under the GST Act?",
            answer: [
                "Any supply i.e. transaction such as the sale, transfer, barter, exchange, license, rental, lease or disposal made or agreed to be made for a consideration, of taxable goods or services, needs to be considered as a taxable event under the GST Act."
            ]
        },
        {
            question: "Does everyone need to file the Annual return even if one is filing the Monthly return?",
            answer: [
                "All taxpayers filing a return in GSTR-1 to GSTR-3, other than ISD’s, casual/non-resident taxpayers, taxpayers under composition scheme, and TDS/TCS deductors, are required to file an annual return (GSTR-9) along with the monthly return."
            ]
        },
        {
            question: "What information is required to file GST return online?",
            answer: [
                "Prescribed information from the invoices including the HSN code in respect to the supply of goods and the accounting code in respect to the supply of the services generated needs to be uploaded in the return.  The information shall also cover the sales, purchase and any expenses occurred during the reporting period."
            ]
        }
    ],
    COMPANY: [
        {
            question: "Whether the Annual Filing is necessary for all companies?",
            answer: [
                "Yes, RoC compliance for Private Limited Companies are necessary for every registered company. Irrespective of the total turnover or the capital amount, the company must comply with the annual compliance requirement. The annual compliance is due after the AGM of the company since its first financial year."
            ]
        },
        {
            question: "What is the penalty for non-compliance of annual filing of Private Limited Company?",
            answer: [
                "Since July 2018, companies failing to follow the statutory compliance for Private Limited will be charged ₹100 for each day of a delay till the actual date of filing. There is no ceiling limit to an additional fee. For continuous failure, penalty apart from the additional Government fee can be levied on both – company and directors, including the imprisonment."
            ]
        },
        {
            question: "Whether the audited financial statement is mandatory annual filing for Private Companies?",
            answer: [
                "Audited financial statements are necessary for every company since its incorporation. The company must file the audited statements only. Also, non-audit of financial statement is not an excuse to delay the annual filing."
            ]
        },
        {
            question: "Is appointment of statutory auditor falls under annual compliance ?",
            answer: [
                "A company can opt to appoint a statutory auditor either for a period of five consecutive years or till the conclusion of next AGM. Therefore, an appointment of the statutory auditor cannot be considered as a part of annual compliance."
            ]
        },
        {
            question: "In case of no operations in the company , do directors require to sign directors report ?",
            answer: [
                "As per Companies Act, 2013 it is mandatory to submit the signed Director Report for every financial year with MCA by filing an Annual return of the company. The Director Report is considered as an attachment for the form MGT-7."
            ]
        },
        {
            question: "Which is the form filed for appointment of Statutory Auditor?",
            answer: [
                "Form ADT-1 is required to be filed for appointment or replacement of Statutory Auditor."
            ]
        },
        {
            question: "Which form is an attachment to the companies Director Report ?",
            answer: [
                "MGT-9 is an attachment to the company’s director report which is an extract of MGT-7 and addresses the following :",
                "",
                "1. Registration and other details like CIN, date of incorporation, companies name and address of a registered office",
                "2. Principle business activity of the company",
                "3. Of holding, subsidiary, and associate companies",
                "4. Shareholding pattern",
                "5. Indebtedness of the company",
                "6. Remuneration of managing directors, directors and/or manager, and key managerial personnel.",
                "7. Penalties/ Punishment/ Compounding of offense."
            ]
        },
        {
            question: "How should the transfer or transmission of shares of the company be notified to the MCA?",
            answer: [
                "Such intimation can be made through filing MGT-7 by the company."
            ]
        }
    ],
    ROC_LLP: [
        {
            question: "Whether Annual Filing is necessary for the LLPs?",
            answer: [
                "LLP Annual Filing is necessary for every LLP since its incorporation. From the closure of its first financial year, the LLP must file both the forms within the prescribed time limit.",
                "The annual compliance is mandatory for every LLP, irrespective of the number of transaction, turnover or commercial activity undertaken."
            ]
        },
        {
            question: "What is the penalty for non-filing/delayed filing of annual compliance forms for LLP?",
            answer: [
                "In case of delay in filing, the LLP is charged with additional Government fee of ₹ 100 for each day of delay. Also, there is no ceiling limit to an additional fee. For continuous failure to annual LLP compliance, the RoC can remove the name of LLP from its register. Also apart from additional fees, the penalty may also be levied to LLP and its partners."
            ]
        },
        {
            question: "Whether the Audit of Financial Statements is required for LLP RoC filing?",
            answer: [
                "The audited books of accounts are necessary for the LLP falling under any of the below-mentioned criteria:",
                "1) If turnover of the LLP exceeds ₹ 40 Lakh; or",
                "2) Total contribution of Partners exceeds ₹ 25 Lakh.",
                "",
                "If LLP does not fall under any of the above criteria, statements with the signature of partners are sufficient."
            ]
        },
        {
            question: "When does the first Financial Year of the LLP end?",
            answer: [
                "Due dates of LLP compliance are based on the closure of each financial year. Financial Year of every LLP must be closed on 31st March. However, period of financial year depends on the month of its incorporation:",
                "",
                "a) LLPs registered between 1st April and 30th September: The LLP must close its financial year on 31st March of next calendar year. Suppose LLP is registered on 1st May, 2018 , the same should close its financial year on 31st March, 2019.",
                "b) LLPs registered between 1st October and 31st March: The LLP has an option to choose the end of its financial year. For instance if the LLP is registered on 30th October, 2018 the same can close its financial year either on 31st March, 2019 or 31st March, 2020."
            ]
        }
    ],
    PROFESSIONAL_TAX: [
        {
            question: "Who shall obtain the Professional Tax Registration?",
            answer: [
                "The responsibility to obtain a registration lies with the owner of the business or profession. The business owner/employer is required to deduct the professional tax based on the professional tax slab from the salaries of employees and pay the same to Government before the 15th day of each month or quarter as applicable."
            ]
        },
        {
            question: "What is enrolment certificate?",
            answer: [
                "Also known as the Professional Tax Enrolment Certificate (PTEC), this registration is obtained for the payment of taxes by the employers."
            ]
        },
        {
            question: "What is the registration certificate?",
            answer: [
                "The employers are required to obtain the registration when employees are appointed. This makes the employees eligible to deduct the professional tax from his employee’s salaries. Registration should be obtained within the 30 days of employing staff."
            ]
        },
        {
            question: "In Which States is Professional Tax applicable?",
            answer: [
                "The State Governments of the following states have levied professional tax:",
                "Punjab, Bihar, Karnataka, West Bengal, Andhra Pradesh, Telangana, Maharashtra, Tamil Nadu, Gujarat, Assam, Sikkim, Kerala, Meghalaya, Orissa, Tripura and Madhya Pradesh."
            ]
        },
        {
            question: "What is the maximum amount of Professional Tax to be paid?",
            answer: [
                "The maximum amount payable per annum towards the professional tax is ₹  2,500. The professional tax is usually a slab-amount based on the gross income of the professional. It is deducted from the employee’s income every month."
            ]
        },
        {
            question: "Whether the separate application is required for additional place of work?",
            answer: [
                "Yes, if you have more than one place of work, you have to make a separate application for professional tax registration to the concerned authority."
            ]
        },
        {
            question: "What are the penalties of non-compliance of Professional tax payment?",
            answer: [
                "For delays in obtaining Registration Certificate, a penalty of ₹ 5/- per day is levied. In case of non/late payment of profession tax, the penalty will amount to 10% of the amount of tax. In case of late filing of returns, a penalty of ₹ 300 per return will be imposed."
            ]
        },
        {
            question: "What are the due dates to file and pay Professional Tax?",
            answer: [
                "The due date for the payment of Profession Tax is 30th June for the employees enrolled before 31st May of the year. The people enrolled after 31st May of a year are requested to pay Profession Tax within one month from the date of enrolment. Employers are requested to file monthly return along with due payment of tax."
            ]
        },
        {
            question: "Whether Shop & Establishment registration is also required for this registration?",
            answer: [
                "In cities like Ahmedabad, both the registration must be obtained simultaneously. In a few places, Shop & establishment registration is a requirement for this application. Hence, it depends on the law of where the jurisdiction of the premise is situated."
            ]
        }
    ],
    ADD_DIRECTOR: [
        {
            question: "Is there any eligibility criteria for adding a new director?",
            answer: [
                "Yes, there is and it is as follows:",
                "• The proposed individual must be a major.",
                "• They must qualify as per the laws mentioned under the Companies Act, 2013.",
                "• The members of the board must consent to the appointment of the proposed individual."
            ]
        },
        {
            question: "Should I apply for another DIN, if I already have one?",
            answer: [
                "No, a DIN or director identification number is permanently allotted and can be used for a lifetime. Once it is allotted, the same number may be used for multiple appointments and resignations."
            ]
        },
        {
            question: "Can a company appoint another corporate body as its working director?",
            answer: [
                "No, as per the Companies Act, 2013, only individuals can serve as directors of public and private limited companies."
            ]
        },
        {
            question: "Can a company add a foreigner or NRI as a director?",
            answer: [
                "Yes, an NRI or foreign national may be added as a director in a private limited company as long as there is at least one director on the board who is an Indian resident. To do so, they must have a valid passport and a DIN."
            ]
        },
        {
            question: "What is the minimum number of directors a company should have?",
            answer: [
                "The minimum number of directors required is based on the type of company. For a one-person company it is 1, for a private company it is 2 and a public company needs to have at least 3 directors."
            ]
        },
        {
            question: "Who can't be a director of a company?",
            answer: [
                "A person cannot be appointed as a director if he doesn’t qualify under the AoA, if they are an undischarged bankrupt, or if they are restricted by a court order."
            ]
        },
        {
            question: "What is the maximum number of directors in a company?",
            answer: [
                "A private company can have a maximum of 15 directors."
            ]
        },
        {
            question: "Is the process completely online?",
            answer: [
                "Yes, the process is 100% online. We will provide you with a dashboard in which you can comfortably do everything."
            ]
        },
        {
            question: "Can someone with a criminal record be a director?",
            answer: [
                "Yes, a person with a criminal record can be a director of a company as long as they are not restricted specifically by a court order."
            ]
        }
    ],
    REMOVE_DIRECTOR: [
        {
            question: "How can a director of a company be removed?",
            answer: [
                "A director can be removed in three ways:",
                "• By the director by giving their resignation",
                "• If the director is absent from board meetings for 12 months",
                "• By the shareholders, if they deem it necessary."
            ]
        },
        {
            question: "Can you remove a company director without their consent?",
            answer: [
                "Yes, a company director can be removed without their consent. However, such removal calls for a strict procedure to be followed."
            ]
        },
        {
            question: "What is the minimum number of directors a company should have?",
            answer: [
                "The minimum number of directors required is based on the type of company. For a one-person company, it is 1, for a private company it is 2, and a public company needs to have at least 3 directors."
            ]
        },
        {
            question: "Who can't be a director of a company?",
            answer: [
                "A person cannot be appointed as a director if they don’t qualify under the AoA, if they are undischarged bankrupt, or if they are restricted by a court order."
            ]
        },
        {
            question: "What is the maximum number of directors in a company?",
            answer: [
                "A private company can have a maximum of 15 directors."
            ]
        },
        // {
        //     question: "Is the process with Vakilsearch completely online?",
        //     answer: [
        //         "Yes, the process is 100% online, we will take care of the physical actions to be performed. We will provide you with a dashboard on which you can comfortably do everything."
        //     ]
        // },
        {
            question: "Can someone with a criminal record be a director?",
            answer: [
                "Yes, a person with a criminal record can be a director of a company, as long as they are not restricted specifically by a court order."
            ]
        }
    ],
    CHANGE_IN_REGISTRED_OFFICE: [
        {
            question: "What documents are required to change a company registered office address to another location in the same city?",
            answer: [
                "• Proof of address of the company’s registered office",
                "• NOC from the new owner",
                "• Property ownership documents of the new property",
                "• Electricity bill, water bill, lease agreement(in case a new premise is rented)",
            ]
        },
        {
            question: "What are the three circumstances under which a company can change its registered office address?",
            answer: [
                "The three common circumstances under which a company changes its registered company office is as follows:",
                "• Change Of Company Registered Office within the same village or city",
                "• Change Of Company Registered Office within the same state",
                "• Change Of Company Registered Office from one state to another",
            ]
        },
        {
            question: "Do you need the permission from shareholders to change the registered office address to another location in the same city?",
            answer: [
                "No, companies that are relocating to another location in the same village, town or city limits do not need the permission of their shareholders or any other authorities. However, to do so, they must notify the Registrar of Companies of the changes, via the e-Form INC-22."
            ]
        }
    ],
    REGISTERED_OFFICE_CHANGE: [
        {
            question: "What is registered office of the company?",
            answer: [
                "The registered office of a company is counted as a place where all the official connections related to the company is sent."
            ]
        },
        {
            question: "Can I change registered office of the company?",
            answer: [
                "Yes. There are four sorts of case for the shifting of registered address of the organization. Kinds of cases are as follows:",
                "• Change in the Registered Office of a Private Limited Company within the same state.",
                "• Change in the Registered Office of a Private Limited Company within the same state but outside the existing city, town or village within the same Registrar of Companies (ROC).",
                "• Change in the Registered Office of a Company within the same state but from one Registrar of Companies (ROC) to another Registrar of Companies (ROC).",
                "• Change in the Registered Office of a Private Limited Company from one state to another state or from the jurisdiction of one ROC to another.",
            ]
        },
        {
            question: "How long does it take to change registered office address?",
            answer: [
                "There is no charge to change your registered address, and it usually takes around two working days for your application form to be processed."
            ]
        },
        {
            question: "Is it mandatory to alter MOA and AOA as per the Companies Act 2013?",
            answer: [
                "It isn't fundamental, however prudent that at whatever points an organization amends its articles, it ought to guarantee that ensuing to the amendment, the AOA is according to the format indicated under the Companies Act, 2013."
            ]
        },
        {
            question: "Is registered office same as head office?",
            answer: [
                "Each business element has a chief place of business which characterizes the personality of the substance and its place of home. On account of an organization, this chief place of business is called registered office and if there should arise an occurrence of partnership or different business form it is call its head office."
            ]
        },
        {
            question: "Is the changing of registered office is an easy process?",
            answer: [
                "The appropriate response relies upon case to case. In case the change of registered office is inside a similar city then this is the least demanding technique. Notwithstanding while at the same time changing starting with one state then onto the next it will require approval of the regional director of the organization."
            ]
        },
        {
            question: "How to intimate about change of registered office to the ROC?",
            answer: [
                "The adjustment in the ROC must be intimated to the registrar of companies by filing structure INC-22, with which supporting report as the proprietorship papers/Rent understanding and NOC from the owner is attached. The Form INC-22 must be attested by a rehearsing Chartered Accountant or Company Secretary or a Cost and Management Accountant."
            ]
        },
        {
            question: "What are the documents required under Form INC-22?",
            answer: [
                "1. A copy of the registered office address",
                "2. A copy of the utility bill (not older than two months)",
                "3. NOC for the use of area obtained from the owner",
                "4. Special Resolution",
            ]
        },
        {
            question: "What are the necessary documents required at the time of finalizing a place for your company’s registered office?",
            answer: [
                "• Water Bill/Electricity Bill",
                "• Property Tax Receipt",
                "• NOC obtained from landlord regarding Registered Office",
                "• Lease agreement between landlord and the company",
            ]
        },
        {
            question: "Can two companies have same registered address?",
            answer: [
                "Yes"
            ]
        },
    ],
    MOA_AMENDMENT: [
        {
            question: "What does MOA Amendment means?",
            answer: [
                "Any change in the existing clauses of the memorandum is termed as amendment in MOA."
            ]
        },
        {
            question: "Is any filing required to be done with ROC for amendment?",
            answer: [
                "Yes, Form MGT 14 is required to be filed with ROC if a special resolution is passed for such amendment"
            ]
        },
        {
            question: "Can the subscription clause be altered in the MOA?",
            answer: [
                "No, the subscription clause is not subject to alteration in the MOA. The subscriber sheet that is used during the incorporation of the company is valid for a lifetime, and one is not allowed to make any further changes in it."
            ]
        },
        {
            question: "How much time is needed for the alteration of memorandum of association?",
            answer: [
                "The process of alteration usually takes up 2-5 working days. The process is usually faster if all the documents are in place."]
        },
        {
            question: "Is it necessary to attach physical MOA and AOA with the Form MGT-14 If the company is incorporated through SPICe form and wants alteration of MOA?",
            answer: [
                "Yes, it is necessary to attach the physical MOA and AOA with the Form MGT-14 for the alteration of MOA under this particular circumstance."]
        }
    ],
    CHANGE_IN_SHAREHOLDING: [
        {
            question: "What is Share Transfer?",
            answer: [
                "Share transfer means transferring the shares from the person having the shares (transferor) to the person desirous of acquiring the shares (transferee)."
            ]
        },
        {
            question: "Why a Share Transfer is done?",
            answer: [
                "Share Transfer can be done either because the person having shares does not want to continue as the shareholder of the company or he/she wants to withdraw his investment from the company."
            ]
        },
        {
            question: "Whether any forms need to file with ROC for Share Transfer?",
            answer: [
                "Yes, Form MGT 14 is required to be filed with ROC if a special resolution is passed for such amendment"
            ]
        },
        {
            question: "What is Share Transfer Deed (SH-7)?",
            answer: [
                "This is a Deed to be executed between the transferor and transferee for transfer the shares. This Deed contains the details regarding transferor, transferee, number of shares, details of share certificates, consideration for share transfer etc."
            ]
        },
        {
            question: "Is it mandatory to execute a Share Transfer Deed?",
            answer: [
                "Yes, in order to give effect to the share transfer, it is mandatory to execute a share transfer deed."
            ]
        },
        {
            question: "What are the documents required to complete Share transfer process?",
            answer: [
                "The following documents are required for share transfer: • Duly Stamped Share transfer deed • Board Meeting Documents (Board Meeting notice, minutes and attendance Sheet) • Share Certificates."
            ]
          },
        {
            question: "Is there any limit for minimum / maximum no of shares to be transferred?",
            answer: [
                "No, there is no such limit on minimum and maximum no of shares."
            ]
        },
        {
            question: "Who can transfer shares in a company?",
            answer: [
                "The existing Shareholders having shares in their name can transfer the same to other person."
            ]
        },
        {
            question: "How Share Transfer is done?",
            answer: [
                "The transferor and the transferee need to execute a Share Transfer Deed in form SH-4. The said deed should be stamped as per the Stamping requirements."
            ]
         },
        {
            question: "What are the Stamping requirements for Share Transfer Deed?",
            answer: [
                "Stamp duty is payable at Re. 0.25 per consideration of Rs.100 for transfer of shares. Share transfer stamp duty is paid through ‘Share Transfer Stamps’."
            ]
        },
        {
            question: "Is there any restriction regarding consideration to be paid for shares?",
            answer: [
                "No, there is no such restriction regarding consideration. It depends on the mutual consent of transferor and transferee."
            ]
        },
        {
            question: "Who will issue the new Share Certificates?",
            answer: [
                "The company, whose shares are transferred, will issue the new share certificates to the transferee."
            ]
        },
        {
            question: "How Share Transfer is done?",
            answer: [
                "The transferor and the transferee need to execute a Share Transfer Deed in form SH-4 and need to send the same to the company. The company will conduct a board meeting to approve the same and will issue new share certificate(s) to the transferee."
            ]
        },
        {
            question: "What is transmission of shares?",
            answer: [
                "Transmission of shares means the process of transmitting the ownership of shares to the legal heirs of a shareholder, consequent to the death of a shareholder."
            ]
        },
        {
            question: "Any filing required for share transfer?",
            answer: [
               "Share transfer does not require any registry filings. The details of shares transfer will be reflected in the subsequent Annual Returns; thus, the details will be updated in the ROC records."
            ]
            }
    ],
    CONVERSION_FROM_LLP_TO_PRIVATED_LIMITED: [
        {
            question: "What is the minimum capital requirement?",
            answer: [
                "There is no minimum capital requirement as per the Companies Act, 2013 "
            ]
        },
        {
            question: "How to file the Conversion form in case of more than 7 partners in the LLP?",
            answer: [
                "In case of the Limited Liability Partnership having more than 7 partners at the time of conversion into Company then the Company shall have to file a Scanned copy of the Physically prepared MOA & AOA and the company shall have to file  URC-1 and  SPICE+ along with MOA and AOA."
            ]
        },
        {
            question: "Can a Foreign National or NRI be a Director of a Company?",
            answer: [
                "Yes, the above person can become a Director post obtaining Director Identification Number. However one Director should be Indian Resident."
            ]
        },
        {
            question: "Is it mandatory to have an Auditor and if yes in what time period it is required to be appointed?",
            answer: [
                "As per Companies Act, 2013 it is compulsory to have an individual as an Auditor of a Company. The first Auditor shall be appointed within 30 days from the date of Incorporation by the Board of Directors ."
            ]
        },
        {
            question: "Whether there is a need to file any separate form for PAN and TAN?",
            answer: [
                "No, there is no need to file any other separate form, the Details pertaining to the Area Code and other details shall be entered in the SPICE+ itself and PAN & TAN shall be generated with the Certificate of Incorporation/Conversion."
            ]
        },
        {
            question: "What are the statutory requirements to be fulfilled once a Company is registered?",
            answer: [
                "There are certain basic requirements to be fulfilled after conversion like:-",
                "• Opening a current account of the company",
                "• Appointment of Statutory auditor"
            ]
        },
        {
            question: "Can a Private Limited Company carry a multiple business after the conversion of the Limited Liability Partnership?",
            answer: [
                "The Act doesn’t imposes any restrictions on carrying the multiple businesses after conversion from the Limited Liability Partnership into Private Limited Company."
            ]
        },
        {
            question: "Whether it is necessary to have a PAN Card?",
            answer: [
                "Yes, for Indian nationals becoming a Director in a Company it is mandatory to have a PAN Card and Passport in case of Foreign Nationals."
            ]
        },
        {
            question: "What is Company Registration Certificate?",
            answer: [
                "It is the documentary proof evidencing that the Company has been registered and having its unique identification number as Corporate Identification Number."
            ]
        },
        {
            question: "What are the Annual Statutory Compliance requirements to be complied by a Private Company?",
            answer: [
                "During every financial year, the company must hold at least 4 board meetings (one in each quarter) and one Annual General Meeting (AGM) and EOGM if required. Further, the company has to get the financial statements audited by an independent auditor. Subsequently, it shall file forms like AOC – 4 and MGT – 7  and other forms as applicable as part of Annual Compliance within given time."
            ]
        }
    ],
    CONVERSION_FROM_PARTNERSHIP_TO_LLP: [
        {
            question: "What documents are needed to convert a partnership into an LLP?",
            answer: [
                "• Address proof of the office",
                "• Regulatory authority’s approval",
                "• Details of all the partners and directors",
                "• Consent of all the partners and directors",
                "• Latest income tax return filing",
                "• NOC from tax authorities",
                "• Creditors and their consent",
                "• Certified liabilities and assets of the partnership"
            ]
        },
        {
            question: "What are the major steps which need to be taken to convert a partnership firm into an LLP?",
            answer: [
                "• All the partners must obtain a DSC",
                "• Next, they must obtain a designated partner identification number",
                "• Once this is done, the company must look to get their name approved",
                "• The name must include LLP at its end",
                "• File LLP forms 17, 2, and 3"
            ]
        },
        {
            question: "What is the Eligibility required to convert a partnership firm into an LLP?",
            answer: [
                "• At least seven partners.",
                "• Share capital worth at least INR 1 lakh",
                "• Capital must be divided into either units or shares",
                "• Object Clause from the partnership firm’s Memorandum of Association",
                "• DSC and DIN of all the partners",
                "• Memorandum of Association of the partnership",
                "• Articles of Association",
                "• Copy of the application for name approval",
                "• NOC from the property owner"
            ]
        },
    ],
}
