import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { faUser, faCheck, faAt, faExclamationTriangle, faPhone, faClock, faMale, faFemale, faKey } from '@fortawesome/free-solid-svg-icons';

import Validation from '../../utils/validators'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  // Icons
  faUser = faUser;
  faCheck = faCheck;
  faAt = faAt;
  faExclamationTriangle = faExclamationTriangle;
  faPhone = faPhone;
  faClock = faClock;
  faMale = faMale;
  faFemale = faFemale;
  faKey = faKey;

  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    dob: new FormControl(''),
    email: new FormControl(''),
    countryCode: new FormControl(''),
    mobileNumber: new FormControl(''),
    courseName: new FormControl(''),
    timeSlot: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });

  submitted = false;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),
          ],
        ],
        dob: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        countryCode: ['', Validators.required],
        mobileNumber: ['', [Validators.required, Validators.pattern("[0-9]{10}$")]],
        courseName: ['', Validators.required],
        timeSlot: ['', Validators.required],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ],
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
      },
      {
        validators: [Validation.match('password', 'confirmPassword')],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value));
    console.log(JSON.stringify(this.form.value, null, 2));
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
