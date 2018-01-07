import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { AuthenticationService } from '../../services/index';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;

  loginStream$: Subscription;

  constructor(
    private _router: Router,
    private _authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.checkLoginState();
    this.createFormControls();
    this.createForm();
  }

  ngOnDestroy() {
    if (this.loginStream$ && this.loginStream$.unsubscribe) {
      this.loginStream$.unsubscribe();
    }
  }

  checkLoginState() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser && currentUser.token) {
      this._router.navigate(['/']);
    }
  }

  createFormControls() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*')
    ]);

    this.password = new FormControl('');
  }

  createForm() {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  onLoginAction() {
    if (this.loginForm.valid) {
      this.loginStream$ = this._authService.login(this.loginForm.value)
        .subscribe(res => {
          this._router.navigate(['/messages']);
        }, err => this._router.navigate(['/login']));

      this.loginForm.reset();
    }
  }
}
