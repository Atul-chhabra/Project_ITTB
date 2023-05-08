import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  fullName: string = '';
  email: string = '';
  phone: string = '';
  course: string = '';
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onSubmit() {
    const obj = {
      Name: this.fullName,
      Email: this.email,
      Phone: this.phone,
      Course: this.course,
    };
    console.log(obj);
    this.http
      .post(
        'https://iitbapim.azure-api.net/manual/paths/invoke',
        JSON.stringify(obj),
        {
          headers: {
            'Ocp-Apim-Subscription-Key': '',
          },
        }
      )
      .subscribe((response) => {
        console.log(response);
        alert('Registration Successful');
      });
  }
}
