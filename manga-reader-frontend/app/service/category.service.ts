import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Category } from '../interface/category';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {
    private _url = 'https://rails-manga-api.herokuapp.com';

    constructor(
        private _http: Http
    ) { }

    getCategories(): Observable<Category> {
        return this._http.get(this._url + '/genres/list')
            .map(res => res.json());
    }
}