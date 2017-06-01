import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from '../interface/user';

@Injectable()
export class AuthService {
    constructor(private _http: Http) { }
    private _url = 'https://rails-manga-api.herokuapp.com';

    // auth service for register by email
    register(user: User): Observable<User[]> {
        const header = new Headers({ 'content-type': 'application/json' });
        console.log('user', user);
        return this._http.post(this._url + '/users', {email: user.email, password: user.password})
            .map(res => res.json());
    }

    login(user: User) {
        return this._http.post(this._url + '/auth/login', {email: user.email, password: user.password})
            .map(res => res.json());
    }

    logout() {
        localStorage.removeItem('auth_token');
    }

    canActivate() {
        if (localStorage.getItem('auth_token')) {
            return true;
        }

        return false;
    }
}