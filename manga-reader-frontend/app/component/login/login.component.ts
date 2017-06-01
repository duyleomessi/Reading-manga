import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { EmailValidation } from '../../validation/email.validation';
import { PasswordValidation } from '../../validation/password.validation';
import { FormValidation } from '../../validation/form.validation';

import { AuthService } from '../../service/auth.service';
import { User } from '../../interface/user';

@Component({
    selector: 'login',
    templateUrl: 'app/component/login/login.component.html',
    styleUrls:  ['app/component/login/login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loginFail = false;
    constructor(private _fb: FormBuilder,
                private _authService: AuthService,
                private _router :Router 
    ) { }

    ngOnInit() {
        this.loginForm = this._fb.group({
            email: ['', Validators.compose([
                Validators.required,
                EmailValidation.emailFormat
            ])],
            password: ['', Validators.compose([
                Validators.required,
                PasswordValidation.notContainLowerLetter,
                PasswordValidation.notContainUpperLetter,
                PasswordValidation.notContainNumber
            ])]
        });
    }

    login() {
       console.log('login');
       this._authService.login({email: this.loginForm.controls.email.value, password: this.loginForm.controls.password.value})
                        .subscribe(data => {
                            console.log("data", data);
                            localStorage.setItem('auth_token', data.auth_token)
                            this._router.navigate(['/']);
                        }, 
                        err => {
                            this.loginFail = true;
                            console.log('login fails');
                        })
       
    }
}