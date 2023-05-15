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
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
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
          'https://iitbapim.azure-api.net/manual/paths/invoke',
          JSON.stringify(this.form.value, null, 2),
          {
            headers: {
              'Ocp-Apim-Subscription-Key': 'ff5cb4f77263439ca10b06d564852164',
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
