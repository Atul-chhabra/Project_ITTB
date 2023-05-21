import { Component, OnInit } from '@angular/core';
import { RegistrationModalComponent } from '../registration-modal/registration-modal.component';
@Component({
  selector: 'app-page-banner',
  templateUrl: './page-banner.component.html',
  styleUrls: ['./page-banner.component.css', '../css/main.css'],
})
export class PageBannerComponent implements OnInit {


  // openModal() {
  //   this.modalService.open(RegistrationModalComponent);
  // }
  showForm=false;
  courses: any = [
    {
      title: 'SAP SD',
      desc: 'SAP SD is a module of the SAP ERP system that manages sales and distribution processes. A typical course covers sales order processing,delivery processing billing and payment processes, and integration with other modules.',
    },
    {
      title: 'SAP MM',
      desc: 'SAP MM (Materials Management) is a module of the SAP ERP system that manages materials procurement, inventory management, and invoice verification. A typical course covers purchasing, inventory management, material valuation and account determination, and integration with other SAP modules.',
    },
    {
      title: 'SAP HANA',
      desc: 'SAP HANA is an in-memory, column-oriented, relational database management system that is designed to handle both transactional and analytical processing. It enables real-time data processing, advanced analytics, and applications on a single platform.',
    },
    {
      title: 'SAP ABAP',
      desc: 'SAP ABAP (Advanced Business Application Programming) is a programming language used for developing applications and customizing SAP software. It is used to create and modify SAP modules, reports, forms, and workflows. ABAP supports object-oriented programming and integrates with other technologies such as SQL, HTML, and XML.',
    },
    {
      title: 'SAP FI',
      desc: 'SAP FI (Financial Accounting) is a module within SAP ERP that manages financial transactions, including general ledger accounting, accounts payable, accounts receivable, and asset accounting. It provides real-time financial data to support financial reporting, decision-making, and auditing.',
    },
  ];

  achievements = [
    {
      imgUrl: '/assets/image/experts.png',
      alt: 'user',
      title: 'Trainer Profiles',
      desc: 'Industry Experts',
    },
    {
      imgUrl: '/assets/image/trained.png',
      alt: 'trainer',
      title: 'Trained Students',
      desc: '1000+',
    },
    {
      imgUrl: '/assets/image/success.png',
      alt: 'industry',
      title: 'Success Ratio',
      desc: '100%',
    },
    {
      imgUrl: '/assets/image/corporate.png',
      alt: 'Corporate Training',
      title: 'Corporate Training',
      desc: 'For India & Abroad',
    },
    {
      imgUrl: '/assets/image/job.png',
      alt: 'abroad',
      title: 'Job Assistance',
      desc: '100%',
    },
  ];

  curriculum = [
    {
      imgUrl: '/assets/image/experts.png',
      alt: 'Placement',
      title: 'Placement Trainings',
    },
    {
      imgUrl: '/assets/image/trained.png',
      alt: 'Interview',
      title: 'Interview Q & A',
    },
    {
      imgUrl: '/assets/image/success.png',
      alt: 'Resume',
      title: 'Resume Preparation',
    },
    {
      imgUrl: '/assets/image/corporate.png',
      alt: 'Mock Interviews',
      title: 'Mock Interviews',
    },
    {
      imgUrl: '/assets/image/job.png',
      alt: 'abroad',
      title: 'Job Assistance',
      desc: '100%',
    },
  ];

  onEnroll() {
    console.log('Clicked');
  }

  showRegistration() {
    console.log("clicked");
    
    this.showForm=true;

  }

  ngOnInit() {}
}
