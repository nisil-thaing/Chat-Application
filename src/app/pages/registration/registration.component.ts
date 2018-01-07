import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy {
  registrationForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  // confirmPassword: FormControl;

  constructor(
    private _router: Router,
    private _userService: UserService
  ) {}

  ngOnInit() {
    this.checkLoginState();
    this.createFormControls();
    this.createForm();
  }

  ngOnDestroy() { }

  checkLoginState() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser && currentUser.token) {
      this._router.navigate(['/']);
    }
  }

  createFormControls() {
    this.firstName = new FormControl('', [
      Validators.required
    ]);
    this.lastName = new FormControl('');
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*')
    ]);
    this.password = new FormControl('', [
      Validators.required
    ]);
  }

  createForm() {
    this.registrationForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    });
  }

  onSaveUserAction() {
    if (this.registrationForm.valid) {
      const { email, password, firstName, lastName } = this.registrationForm.value;
      const reqParams = {
        email: email,
        password: password,
        name: `${ firstName } ${ lastName }`
      };

      this._userService.signup(reqParams)
      .subscribe(res => {
        this._router.navigate(['/login']);
      }, err => this._router.navigate(['/register']));

      this.registrationForm.reset();
    }
  }
}
