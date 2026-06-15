/* ------------------------------------------------------------------ */
/*  Data for the "Other Products" use-case DSC landing pages.          */
/*  Each entry powers a dedicated /products/dsc-for-* route via the     */
/*  shared <UseCaseDscPage /> template.                                */
/* ------------------------------------------------------------------ */

export interface UseCaseDscData {
  /** URL slug, e.g. "dsc-for-gst" */
  slug: string;
  /** Short label, e.g. "GST" */
  shortName: string;
  /** Page H1 / nav label, e.g. "DSC for GST" */
  title: string;
  /** Government portal name, e.g. "GST Portal (gst.gov.in)" */
  portal: string;
  /** Hero sub-headline */
  heroTagline: string;
  /** SEO <title> */
  seoTitle: string;
  /** SEO meta description */
  seoDescription: string;
  /** SEO keywords */
  keywords: string;
  /** Overview paragraphs ("What is a DSC for X?") */
  intro: string[];
  /** Who needs this DSC (cards) */
  whoNeedsIt: { title: string; desc: string }[];
  /** What you can do on this portal with the DSC */
  uses: string[];
  /** Page-specific FAQs */
  faqs: { q: string; a: string }[];
  /** Recommended underlying product */
  recommended: { label: string; href: string; price: number; note: string };
}

export const USE_CASE_DSC: Record<string, UseCaseDscData> = {
  "dsc-for-gst": {
    slug: "dsc-for-gst",
    shortName: "GST",
    title: "DSC for GST",
    portal: "GST Portal (gst.gov.in)",
    heroTagline:
      "Register, file returns and sign documents on the GST portal with a government-approved Class 3 Digital Signature Certificate.",
    seoTitle:
      "DSC for GST Registration & Return Filing | Class 3 Digital Signature | SignSecure",
    seoDescription:
      "Buy a Class 3 DSC for GST registration and return filing on gst.gov.in. Mandatory for companies & LLPs. Aadhaar eKYC, issued in 30 minutes, free online support. Authorized reseller of eMudhra, Capricorn, Pantasign & SignX.",
    keywords:
      "dsc for gst, gst dsc, digital signature for gst, class 3 dsc for gst, gst registration dsc, dsc for gst return filing, gst portal dsc",
    intro: [
      "A Digital Signature Certificate (DSC) is mandatory for companies and LLPs to register and file returns on the GST portal (gst.gov.in). A Class 3 DSC lets you authenticate every GST submission online, with the same legal validity as a handwritten signature.",
      "While proprietors and individuals can use the EVC (OTP) option, a DSC is the faster, more reliable way to file — especially during peak return-filing periods. SignSecure issues GST-ready Class 3 certificates through a 100% paperless Aadhaar eKYC process in as little as 30 minutes.",
    ],
    whoNeedsIt: [
      { title: "Companies & LLPs", desc: "A DSC is mandatory for all GST filings by companies and Limited Liability Partnerships." },
      { title: "Proprietors & Individuals", desc: "Optional via EVC, but a DSC makes registration and high-volume return filing faster and error-free." },
      { title: "Tax Practitioners & GSTPs", desc: "GST Practitioners filing on behalf of multiple clients rely on a Class 3 DSC for secure authentication." },
    ],
    uses: [
      "New GST registration (GST REG-01)",
      "Filing GSTR-1, GSTR-3B & GSTR-9",
      "Responding to GST notices & SCNs",
      "GST refund applications (RFD-01)",
      "Amendment of registration details",
      "Letter of Undertaking (LUT) filing",
      "Core field & address changes",
      "e-Invoicing & e-Way Bill authorisation",
    ],
    faqs: [
      { q: "Is a DSC mandatory for GST?", a: "Yes. A Class 3 DSC is mandatory for all companies and LLPs to register and file returns on the GST portal. Proprietorships and individuals may use EVC (Aadhaar OTP) instead, but many still prefer a DSC for reliability." },
      { q: "Which class of DSC is required for GST?", a: "A Class 3 Digital Signature Certificate (Individual for proprietors/authorised signatories, or Organization for companies) is used for GST. Class 2 DSCs were discontinued by the CCA in 2021." },
      { q: "How long does it take to get a DSC for GST?", a: "With Aadhaar-based paperless eKYC, your Class 3 DSC can be issued in as little as 30 minutes after verification. We then help you register and use it on the GST portal." },
      { q: "Can I use one DSC for GST and other portals?", a: "Yes. A single Class 3 DSC works across GST, MCA, Income Tax, EPFO and virtually every other government portal — no separate certificate needed." },
    ],
    recommended: { label: "Class 3 Individual DSC", href: "/products/class-3-individual-dsc", price: 899, note: "Use Class 3 Organization DSC for company GST filings." },
  },

  "dsc-for-mca": {
    slug: "dsc-for-mca",
    shortName: "MCA",
    title: "DSC for MCA",
    portal: "MCA21 Portal (mca.gov.in)",
    heroTagline:
      "Sign and file company forms on the MCA21 V3 portal with a Class 3 Digital Signature Certificate for directors and professionals.",
    seoTitle:
      "DSC for MCA / ROC Filing | Class 3 Digital Signature for Directors | SignSecure",
    seoDescription:
      "Buy a Class 3 DSC for MCA21 / ROC filings — company incorporation, DIR-3 KYC, AOC-4, MGT-7 and more. Required for directors & professionals. Issued in 30 minutes with free online support.",
    keywords:
      "dsc for mca, mca dsc, digital signature for mca, dsc for roc filing, director dsc, dir-3 kyc dsc, class 3 dsc for mca21",
    intro: [
      "Every form filed on the MCA21 portal must be digitally signed with a valid Class 3 Digital Signature Certificate. Directors, designated partners, and practising professionals (CA / CS / CMA) all need a DSC to incorporate companies, file annual returns, and complete statutory compliance.",
      "SignSecure issues MCA-ready Class 3 DSCs through paperless Aadhaar eKYC and helps you register the certificate against your DIN/PAN on the MCA21 V3 portal so you can start filing immediately.",
    ],
    whoNeedsIt: [
      { title: "Directors & Designated Partners", desc: "Required to sign incorporation forms, annual filings and DIR-3 KYC on MCA21." },
      { title: "CA / CS / CMA Professionals", desc: "Practising professionals certify and digitally sign MCA forms for their clients." },
      { title: "Companies & LLPs", desc: "Every registered entity needs DSCs of its authorised signatories for ROC compliance." },
    ],
    uses: [
      "Company incorporation (SPICe+)",
      "Director KYC (DIR-3 KYC)",
      "Annual filings (AOC-4, MGT-7)",
      "Director appointment & resignation (DIR-12)",
      "Charge registration (CHG-1)",
      "LLP incorporation & filings",
      "Name reservation (RUN)",
      "DSC association & role check on MCA21",
    ],
    faqs: [
      { q: "Which DSC is required for MCA filings?", a: "A Class 3 Individual DSC in the name of the director, designated partner or professional is required for all MCA21 filings." },
      { q: "Is a DSC needed for DIR-3 KYC?", a: "Yes. DIR-3 KYC (annual director KYC) must be filed using the director's own Class 3 DSC. Filing without it is not possible." },
      { q: "How do I register my DSC on the MCA21 portal?", a: "After issuance, the DSC must be associated with your role (director/professional) on the MCA21 V3 portal. SignSecure guides you through the one-time registration." },
      { q: "Can the same DSC be used for multiple companies?", a: "Yes. A director can use the same personal Class 3 DSC to sign forms for every company in which they hold a position." },
    ],
    recommended: { label: "Class 3 Individual DSC", href: "/products/class-3-individual-dsc", price: 899, note: "Directors & professionals use an Individual Class 3 DSC." },
  },

  "dsc-for-income-tax": {
    slug: "dsc-for-income-tax",
    shortName: "Income Tax",
    title: "DSC for Income Tax",
    portal: "Income Tax e-Filing Portal (incometax.gov.in)",
    heroTagline:
      "File ITRs, audit reports and respond to notices on the Income Tax portal with a Class 3 Digital Signature Certificate.",
    seoTitle:
      "DSC for Income Tax e-Filing | Class 3 Digital Signature for ITR | SignSecure",
    seoDescription:
      "Buy a Class 3 DSC for Income Tax e-filing on incometax.gov.in — ITR, tax audit reports (3CA/3CB-3CD), Form 15CA/15CB & e-proceedings. Mandatory for companies & audit cases. Issued in 30 minutes.",
    keywords:
      "dsc for income tax, income tax dsc, digital signature for itr, dsc for itr filing, class 3 dsc income tax, dsc for tax audit, register dsc income tax portal",
    intro: [
      "A Digital Signature Certificate is mandatory for companies, LLPs, and taxpayers whose accounts are audited under Section 44AB to file their Income Tax Returns. Chartered Accountants also use a Class 3 DSC to upload tax audit reports and certificates on the Income Tax e-filing portal.",
      "A DSC removes the need to send a physical ITR-V to CPC Bengaluru — your return is verified instantly upon signing. SignSecure issues Income-Tax-ready Class 3 certificates via paperless Aadhaar eKYC and helps you register them on incometax.gov.in.",
    ],
    whoNeedsIt: [
      { title: "Companies & LLPs", desc: "A DSC is mandatory for filing the income tax return of every company and LLP." },
      { title: "Audited Taxpayers (44AB)", desc: "Individuals and firms under tax audit must e-verify their ITR using a DSC." },
      { title: "Chartered Accountants", desc: "CAs upload audit reports, Form 15CB and certifications using their Class 3 DSC." },
    ],
    uses: [
      "ITR filing for companies & firms",
      "Tax audit reports (Form 3CA / 3CB-3CD)",
      "Form 15CA / 15CB (foreign remittance)",
      "TDS / TCS return filing",
      "Responding to e-Proceedings & notices",
      "Refund reissue requests",
      "Registering as legal heir / representative",
      "DSC registration on the e-filing portal",
    ],
    faqs: [
      { q: "Is a DSC mandatory for filing ITR?", a: "Yes for companies, LLPs and taxpayers under tax audit (Section 44AB). Other individuals may e-verify via Aadhaar OTP, but a DSC is required for audit cases and is often preferred for reliability." },
      { q: "Which DSC is used for Income Tax?", a: "A Class 3 Digital Signature Certificate is used for Income Tax e-filing — Individual for proprietors/professionals and Organization for companies." },
      { q: "How do I register a DSC on the Income Tax portal?", a: "Log in to incometax.gov.in, go to 'My Profile > Register DSC', and use the emSigner utility with your token. SignSecure provides the utility and step-by-step help." },
      { q: "Do I still need to send ITR-V if I use a DSC?", a: "No. When you sign your return with a DSC it is verified instantly — there is no need to post the physical ITR-V to CPC." },
    ],
    recommended: { label: "Class 3 Individual DSC", href: "/products/class-3-individual-dsc", price: 899, note: "Companies should choose Class 3 Organization DSC." },
  },

  "dsc-for-e-tendering": {
    slug: "dsc-for-e-tendering",
    shortName: "e-Tendering",
    title: "DSC for e-Tendering",
    portal: "e-Procurement Portals (CPPP, state & PSU portals)",
    heroTagline:
      "Submit and encrypt online bids on e-tendering portals with a Class 3 Combo (Signing + Encryption) Digital Signature Certificate.",
    seoTitle:
      "DSC for e-Tendering & e-Procurement | Class 3 Combo Digital Signature | SignSecure",
    seoDescription:
      "Buy a Class 3 Combo DSC (Signing + Encryption) for e-tendering and e-procurement on CPPP, state and PSU portals. Mandatory for online bidding. Issued in 30 minutes with free online support.",
    keywords:
      "dsc for e-tendering, e-tendering dsc, digital signature for tender, class 3 combo dsc, dsc for e-procurement, encryption dsc for tender, cppp dsc",
    intro: [
      "Online tender and e-procurement portals require a Class 3 Combo Digital Signature Certificate — one that can both sign and encrypt. The signing certificate authenticates your bid, while the encryption certificate protects confidential price bids until the official opening date.",
      "Most government, PSU and state e-procurement portals (CPPP/eprocure.gov.in, IREPS, GeM and others) mandate this dual-key DSC. SignSecure issues Class 3 Combo certificates that work across all major tendering platforms.",
    ],
    whoNeedsIt: [
      { title: "Contractors & Vendors", desc: "Anyone submitting competitive bids on government or PSU e-procurement portals." },
      { title: "Suppliers & Service Providers", desc: "Businesses participating in e-tenders, e-auctions and reverse auctions." },
      { title: "Bidding Companies", desc: "Organizations that regularly respond to tenders need an organization-level Combo DSC." },
    ],
    uses: [
      "Online bid submission",
      "Encrypting confidential price bids",
      "Digitally signing BOQs & technical bids",
      "Participating in reverse auctions",
      "Tender fee & EMD authorisation",
      "Bidder registration on portals",
      "CPPP / eprocure.gov.in bidding",
      "State & PSU e-procurement portals",
    ],
    faqs: [
      { q: "Which DSC is required for e-tendering?", a: "A Class 3 Combo DSC (Signing + Encryption) is required for e-tendering. The encryption key keeps your price bid confidential until the tender opening, which signing-only certificates cannot do." },
      { q: "Why do I need an encryption certificate for tenders?", a: "e-Procurement portals encrypt your commercial bid so it cannot be read before the official opening. This requires an encryption certificate, which is included in a Class 3 Combo DSC." },
      { q: "Should the DSC be individual or organization?", a: "It depends on the portal and how you bid. Organizations bidding in the company's name typically use a Class 3 Organization Combo DSC; sole proprietors use Individual." },
      { q: "Will one Combo DSC work on all tender portals?", a: "Yes. A Class 3 Combo DSC is accepted across CPPP, IREPS, GeM, and state/PSU e-procurement portals nationwide." },
    ],
    recommended: { label: "Class 3 Combo DSC", href: "/products/class-3-combo-dsc", price: 1599, note: "e-Tendering requires Signing + Encryption (Combo)." },
  },

  "dsc-for-epfo": {
    slug: "dsc-for-epfo",
    shortName: "EPFO",
    title: "DSC for EPFO",
    portal: "EPFO Unified Employer Portal (epfindia.gov.in)",
    heroTagline:
      "Register your authorised signatory and approve PF claims on the EPFO portal with a Class 3 Digital Signature Certificate.",
    seoTitle:
      "DSC for EPFO Employer Portal | Class 3 Digital Signature | SignSecure",
    seoDescription:
      "Buy a Class 3 DSC for the EPFO Unified Employer Portal — register the authorised signatory, approve KYC, file ECR and attest transfer claims. Issued in 30 minutes with free online support.",
    keywords:
      "dsc for epfo, epfo dsc, digital signature for pf, employer dsc epfo, dsc for pf return, class 3 dsc epfo, epfo authorised signatory dsc",
    intro: [
      "Employers must register the Digital Signature Certificate of their authorised signatory on the EPFO Unified Portal to approve employee KYC, attest transfer claims, and complete digital compliance. A Class 3 Organization DSC in the authorised signatory's name is used for this.",
      "Once registered, the DSC lets establishments digitally approve member details and file returns without paper. SignSecure issues EPFO-ready Class 3 certificates and assists with registration of the authorised signatory on the portal.",
    ],
    whoNeedsIt: [
      { title: "Employers & Establishments", desc: "Every establishment registered with EPFO needs a DSC for its authorised signatory." },
      { title: "Authorised Signatories", desc: "The person authorised to approve EPFO transactions must hold a Class 3 DSC." },
      { title: "HR & Payroll Teams", desc: "Teams managing PF compliance use the DSC to approve KYC and process claims." },
    ],
    uses: [
      "Registering the authorised signatory's DSC",
      "Approving employee KYC (UAN)",
      "Filing the Electronic Challan cum Return (ECR)",
      "Attesting member transfer claims",
      "Digitally signing employer forms",
      "Form 5A (ownership return)",
      "Exemption & surrender applications",
      "Updating establishment details",
    ],
    faqs: [
      { q: "Which DSC is required for EPFO?", a: "A Class 3 Organization DSC in the name of the establishment's authorised signatory is used to register and operate on the EPFO Unified Employer Portal." },
      { q: "Why register a DSC on the EPFO portal?", a: "Registering the authorised signatory's DSC enables digital approval of KYC, transfer claims and returns, replacing manual attestation." },
      { q: "Who should the EPFO DSC belong to?", a: "It should be the Class 3 DSC of the employer's authorised signatory (e.g. director, partner or proprietor) as declared to EPFO." },
      { q: "How quickly can I get an EPFO DSC?", a: "A Class 3 DSC is issued in as little as 30 minutes via Aadhaar eKYC. We then help you register it on the EPFO portal." },
    ],
    recommended: { label: "Class 3 Organization DSC", href: "/products/class-3-organization-dsc", price: 1099, note: "EPFO uses the authorised signatory's Organization DSC." },
  },

  "dsc-for-icegate": {
    slug: "dsc-for-icegate",
    shortName: "ICEGATE",
    title: "DSC for ICEGATE",
    portal: "ICEGATE — Indian Customs (icegate.gov.in)",
    heroTagline:
      "File customs documents and register on ICEGATE with a Class 3 Digital Signature Certificate for importers, exporters and brokers.",
    seoTitle:
      "DSC for ICEGATE Customs Portal | Class 3 Digital Signature | SignSecure",
    seoDescription:
      "Buy a Class 3 DSC for ICEGATE (icegate.gov.in) — file Bill of Entry, Shipping Bill, e-Sanchit uploads and customs filings. For importers, exporters & customs brokers. Issued in 30 minutes.",
    keywords:
      "dsc for icegate, icegate dsc, digital signature for customs, dsc for bill of entry, dsc for shipping bill, class 3 dsc icegate, customs broker dsc",
    intro: [
      "ICEGATE, the national portal of Indian Customs, requires a Class 3 Digital Signature Certificate for importers, exporters and customs brokers to file declarations electronically. Every Bill of Entry, Shipping Bill and supporting document must be digitally signed.",
      "A Class 3 Organization DSC lets you register on ICEGATE, upload documents through e-Sanchit, and clear customs filings securely. SignSecure issues ICEGATE-ready certificates and helps with portal registration.",
    ],
    whoNeedsIt: [
      { title: "Importers & Exporters", desc: "Required to file Bills of Entry, Shipping Bills and other customs declarations." },
      { title: "Customs Brokers (CHAs)", desc: "Brokers filing on behalf of clients need a Class 3 DSC registered on ICEGATE." },
      { title: "Shipping & Logistics Firms", desc: "Carriers and logistics operators filing manifests and customs documents." },
    ],
    uses: [
      "Filing Bill of Entry (imports)",
      "Filing Shipping Bill (exports)",
      "IGM / EGM manifest filing",
      "e-Sanchit document upload",
      "ICEGATE registration & login",
      "Customs duty payment authorisation",
      "Refund & drawback claims",
      "AD code & bank account registration",
    ],
    faqs: [
      { q: "Which DSC is required for ICEGATE?", a: "A Class 3 Organization DSC is used to register and file on the ICEGATE customs portal. It authenticates Bills of Entry, Shipping Bills and document uploads." },
      { q: "Is a DSC mandatory for ICEGATE registration?", a: "Yes. ICEGATE registration and electronic customs filing require a valid Class 3 DSC for the importer, exporter or customs broker." },
      { q: "Can a customs broker use one DSC for many clients?", a: "Yes. A registered customs broker uses their own Class 3 DSC to file declarations on behalf of multiple importers/exporters." },
      { q: "How fast can I get an ICEGATE DSC?", a: "Class 3 DSCs are issued in as little as 30 minutes via Aadhaar eKYC. We assist with ICEGATE portal registration afterwards." },
    ],
    recommended: { label: "Class 3 Organization DSC", href: "/products/class-3-organization-dsc", price: 1099, note: "ICEGATE filings use an Organization Class 3 DSC." },
  },

  "dsc-for-dgft": {
    slug: "dsc-for-dgft",
    shortName: "DGFT",
    title: "DSC for DGFT",
    portal: "DGFT Portal (dgft.gov.in)",
    heroTagline:
      "Manage your IEC and file foreign-trade applications on the DGFT portal with a DGFT-specific Class 3 Digital Signature Certificate.",
    seoTitle:
      "DSC for DGFT | IEC & Foreign Trade Digital Signature | SignSecure",
    seoDescription:
      "Buy a DGFT DSC for the DGFT portal (dgft.gov.in) — IEC registration & modification, EPCG, Advance Authorisation, RoDTEP scrips and AD code. Organization-level Class 3. Issued fast with free online support.",
    keywords:
      "dsc for dgft, dgft dsc, digital signature for dgft, dsc for iec, iec dsc, class 3 dgft dsc, dgft import export dsc",
    intro: [
      "Import-export businesses need a DGFT-specific Digital Signature Certificate to manage their Importer-Exporter Code (IEC) and file applications on the DGFT portal. This is an organization-level Class 3 certificate configured for the DGFT system.",
      "From IEC registration and modification to licence applications and scrip claims, all DGFT filings must be digitally signed. SignSecure issues DGFT-ready certificates and supports EXIM businesses end-to-end.",
    ],
    whoNeedsIt: [
      { title: "IEC Holders", desc: "Every business with an Importer-Exporter Code needs a DGFT DSC to manage it online." },
      { title: "EXIM Businesses", desc: "Exporters and importers filing licence and scrip applications on DGFT." },
      { title: "Customs & EXIM Consultants", desc: "Consultants filing foreign-trade applications on behalf of clients." },
    ],
    uses: [
      "IEC registration & modification",
      "Advance Authorisation & EPCG licences",
      "RoDTEP / RoSCTL scrip claims",
      "AD code registration",
      "Certificate of Origin (e-CoO)",
      "Export Obligation Discharge (EODC)",
      "Branch addition & profile updates",
      "Status holder & MEIS/SEIS legacy claims",
    ],
    faqs: [
      { q: "Which DSC is required for DGFT?", a: "A DGFT-specific organization-level Class 3 DSC is required. It is configured for the DGFT portal and used to digitally sign all import-export filings." },
      { q: "How is a DGFT DSC different from a normal DSC?", a: "A DGFT DSC carries the organization's details in the format the DGFT system expects and is mapped to your IEC, whereas a standard DSC is used for general portals like GST and MCA." },
      { q: "Do I need a DSC for IEC registration?", a: "Yes. Registering or modifying your IEC and filing any application on the DGFT portal requires a valid DGFT DSC." },
      { q: "Can SignSecure help with EXIM filings?", a: "Yes. Beyond issuing the DGFT DSC, our team provides free online support and guidance for DGFT portal registration and filings." },
    ],
    recommended: { label: "DGFT DSC", href: "/products/dgft-dsc", price: 2199, note: "DGFT requires a dedicated organization DGFT DSC." },
  },

  "dsc-for-trademark": {
    slug: "dsc-for-trademark",
    shortName: "Trademark",
    title: "DSC for Trademark",
    portal: "IP India — Trademark e-Filing (ipindia.gov.in)",
    heroTagline:
      "File and prosecute trademark applications on the IP India portal with a Class 3 Digital Signature Certificate.",
    seoTitle:
      "DSC for Trademark e-Filing | Class 3 Digital Signature for IP India | SignSecure",
    seoDescription:
      "Buy a Class 3 DSC for trademark e-filing on the IP India portal (ipindia.gov.in) — TM-A applications, replies, oppositions & renewals. For agents, attorneys & businesses. Issued in 30 minutes.",
    keywords:
      "dsc for trademark, trademark dsc, digital signature for trademark, dsc for ip india, class 3 dsc trademark, trademark agent dsc, tm filing dsc",
    intro: [
      "Trademark applications and related filings on the IP India e-filing portal must be digitally signed with a Class 3 Digital Signature Certificate. Trademark agents, attorneys and businesses use a DSC to file the TM-A application, respond to examination reports, and manage their portfolio online.",
      "e-Filing with a DSC also unlocks the lower official fee available for online submissions. SignSecure issues IP-India-ready Class 3 certificates through paperless Aadhaar eKYC.",
    ],
    whoNeedsIt: [
      { title: "Trademark Agents & Attorneys", desc: "Professionals filing and prosecuting trademarks for clients on IP India." },
      { title: "Businesses & Startups", desc: "Companies protecting their brand by filing trademarks in their own name." },
      { title: "Individuals & Proprietors", desc: "Anyone registering a trademark or design directly on the IP India portal." },
    ],
    uses: [
      "TM-A trademark application filing",
      "Replying to examination reports",
      "Filing & defending oppositions",
      "Trademark renewal (TM-R)",
      "Assignment & change of ownership",
      "Patent & design e-filing",
      "Hearing & affidavit submissions",
      "Portfolio management on IP India",
    ],
    faqs: [
      { q: "Which DSC is required for trademark filing?", a: "A Class 3 Digital Signature Certificate (Individual for agents/applicants) is used to digitally sign trademark applications and filings on the IP India portal." },
      { q: "Does the agent or the applicant's DSC sign the application?", a: "When a registered trademark agent files, their own Class 3 DSC is used. Applicants filing directly use their personal DSC." },
      { q: "Is e-filing with a DSC cheaper?", a: "Yes. The IP India portal charges a lower official fee for online (e-filed) trademark applications compared to physical filing." },
      { q: "How quickly can I get a trademark DSC?", a: "A Class 3 DSC is issued in as little as 30 minutes via Aadhaar eKYC, with free online setup support." },
    ],
    recommended: { label: "Class 3 Individual DSC", href: "/products/class-3-individual-dsc", price: 899, note: "Agents & applicants use an Individual Class 3 DSC." },
  },

  "dsc-for-gem-registration": {
    slug: "dsc-for-gem-registration",
    shortName: "GeM",
    title: "DSC for GeM Registration",
    portal: "Government e-Marketplace (gem.gov.in)",
    heroTagline:
      "Register as a seller and e-sign contracts on the Government e-Marketplace (GeM) with a Class 3 Digital Signature Certificate.",
    seoTitle:
      "DSC for GeM Registration | Class 3 Digital Signature for Sellers | SignSecure",
    seoDescription:
      "Buy a Class 3 DSC for GeM (gem.gov.in) seller registration, e-signing contracts, bids and reverse auctions. For sellers, OEMs & service providers. Issued in 30 minutes with free online support.",
    keywords:
      "dsc for gem, gem dsc, digital signature for gem registration, gem seller dsc, class 3 dsc gem, gem.gov.in dsc, dsc for government e-marketplace",
    intro: [
      "Sellers and service providers on the Government e-Marketplace (GeM) use a Class 3 Digital Signature Certificate to complete vendor registration, e-sign contracts, and participate in bids and reverse auctions with full legal validity.",
      "A DSC strengthens the authenticity of your GeM profile and is required to digitally execute purchase orders and agreements. SignSecure issues GeM-ready Class 3 certificates via paperless Aadhaar eKYC.",
    ],
    whoNeedsIt: [
      { title: "Sellers & Service Providers", desc: "Vendors listing products or services for government buyers on GeM." },
      { title: "OEMs & Resellers", desc: "Manufacturers and authorised resellers managing catalogues and OEM panels." },
      { title: "Bidding Vendors", desc: "Sellers participating in GeM bids, reverse auctions and contract signing." },
    ],
    uses: [
      "GeM seller / vendor registration",
      "e-Signing contracts & purchase orders",
      "Participating in bids & reverse auctions",
      "Catalogue & offer authentication",
      "Vendor assessment & OEM panel",
      "Invoice & delivery authorisation",
      "Profile & KYC updates",
      "Digitally signed agreements",
    ],
    faqs: [
      { q: "Is a DSC mandatory for GeM registration?", a: "A Class 3 DSC is strongly recommended and is required for e-signing contracts, bids and high-value transactions on the Government e-Marketplace." },
      { q: "Which DSC is used for GeM?", a: "A Class 3 DSC (Individual or Organization depending on how you sell) is used for GeM seller registration and e-signing." },
      { q: "Can I e-sign GeM contracts with this DSC?", a: "Yes. The Class 3 DSC lets you digitally execute contracts, purchase orders and bid documents on GeM with legal validity." },
      { q: "How quickly can I get a GeM DSC?", a: "A Class 3 DSC is issued in as little as 30 minutes via Aadhaar eKYC, with free online registration support." },
    ],
    recommended: { label: "Class 3 Individual DSC", href: "/products/class-3-individual-dsc", price: 899, note: "Companies should choose Class 3 Organization DSC for GeM." },
  },

  "dsc-for-irctc": {
    slug: "dsc-for-irctc",
    shortName: "IRCTC",
    title: "DSC for IRCTC",
    portal: "IRCTC Agent Portal",
    heroTagline:
      "Register and operate as an authorised IRCTC travel agent with a Class 3 Digital Signature Certificate.",
    seoTitle:
      "DSC for IRCTC Agent | Class 3 Digital Signature for Travel Agents | SignSecure",
    seoDescription:
      "Buy a Class 3 DSC for IRCTC agent registration and e-ticketing. Required for principal & sub-agents to onboard and sign agreements. Issued in 30 minutes with free online support.",
    keywords:
      "dsc for irctc, irctc dsc, digital signature for irctc agent, irctc agent dsc, class 3 dsc irctc, irctc principal agent dsc, travel agent dsc",
    intro: [
      "Authorised IRCTC travel agents need a Class 3 Digital Signature Certificate to register on the IRCTC agent portal, sign the agent agreement, and operate e-ticketing services. The DSC authenticates the agent's identity for onboarding and compliance.",
      "Both principal agents (PSAs) and sub-agents use a Class 3 DSC during registration and agreement signing. SignSecure issues IRCTC-ready certificates through paperless Aadhaar eKYC.",
    ],
    whoNeedsIt: [
      { title: "Authorised Travel Agents", desc: "Individuals and agencies registering to book rail tickets through IRCTC." },
      { title: "Principal Service Agents (PSAs)", desc: "PSAs onboarding sub-agents and signing agreements digitally." },
      { title: "Travel Agencies", desc: "Agencies operating IRCTC e-ticketing for customers at scale." },
    ],
    uses: [
      "IRCTC agent registration",
      "e-Signing the agent agreement",
      "Principal–sub-agent onboarding",
      "Agent KYC authentication",
      "Bulk ticket booking authorisation",
      "Profile & renewal documentation",
      "Compliance & audit signing",
      "Digitally signed contracts",
    ],
    faqs: [
      { q: "Which DSC is required for an IRCTC agent?", a: "A Class 3 Digital Signature Certificate (Individual) is used for IRCTC agent registration and to sign the agent agreement." },
      { q: "Why does an IRCTC agent need a DSC?", a: "The DSC authenticates the agent's identity during onboarding and is used to digitally sign the agreement and compliance documents with legal validity." },
      { q: "Do both principal and sub-agents need a DSC?", a: "Yes. Principal agents and sub-agents both use a Class 3 DSC during registration and agreement execution." },
      { q: "How quickly can I get an IRCTC DSC?", a: "A Class 3 DSC is issued in as little as 30 minutes via Aadhaar eKYC, with free online support for registration." },
    ],
    recommended: { label: "Class 3 Individual DSC", href: "/products/class-3-individual-dsc", price: 899, note: "IRCTC agents use an Individual Class 3 DSC." },
  },
};

export const USE_CASE_SLUGS = Object.keys(USE_CASE_DSC);
