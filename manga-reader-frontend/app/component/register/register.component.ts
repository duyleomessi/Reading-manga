import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { EmailValidation } from '../../validation/email.validation';
import { PasswordValidation } from '../../validation/password.validation';
import { FormValidation } from '../../validation/form.validation';

import { AuthService } from '../../service/auth.service';
import { User } from '../../interface/user';

@Component({
    selector: 'register',
    templateUrl: 'app/component/register/register.component.html',
    styleUrls:  ['app/component/register/register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    constructor(private _fb: FormBuilder,
                private _authService: AuthService,
                private _router :Router 
    ) { }

    ngOnInit() {
        this.registerForm = this._fb.group({
            email: ['', Validators.compose([
                Validators.required,
                EmailValidation.emailFormat
            ])],
            password: ['', Validators.compose([
                Validators.required,
                PasswordValidation.notContainLowerLetter,
                PasswordValidation.notContainUpperLetter,
                PasswordValidation.notContainNumber
            ])],
            confirmPassword: ['', Validators.compose([
                Validators.required
            ])]
        }, { validator: FormValidation.notMatchPassword });
    }

    register() {
       this._authService.register({email: this.registerForm.controls.email.value, password: this.registerForm.controls.password.value})
                        .subscribe(data => {
                            console.log("data", data);
                            this._router.navigate(['/']);
                        })
    
       
    }
}