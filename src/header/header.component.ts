import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../css/main.css']
})
export class HeaderComponent implements OnInit {
  phoneNumber: String = '+91 8766792884';
  email: String = 'ittb50jobs@ITTB-50.com';

  constructor() { }

  ngOnInit() {
  }

}