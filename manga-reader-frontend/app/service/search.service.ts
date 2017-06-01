import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Manga } from '../interface/manga';

@Injectable()
export class SearchService {
    private _url = 'https://rails-manga-api.herokuapp.com';

    constructor(
        private _http: Http
    ) { }

    searchManga(searchKey: String): Observable<Manga> {
        return this._http.get(this._url + '/search/manga?searchKey=' + searchKey)
            .map(res => res.json());
    }
}