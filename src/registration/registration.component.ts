import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  form: FormGroup | undefined;
  submitted = false;

  ngOnInit(): void {
    this.form = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      course: ['', [Validators.required]],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  
  onSubmit() {
    this.submitted = true;

    if (this.form.valid) {
      // handle form submission
      this.http
        .post(
          'https://ittb50.azure-api.net/manual/paths/invoke',
          JSON.stringify(this.form.value),
          {
            headers: {
              'Ocp-Apim-Subscription-Key': '0827d894355640daac4fa40d2ea1cedd',
            },
          }
        )
        .subscribe((response) => {
          console.log(response);
          alert('Registration Successful');
        });
    }
  }
}
