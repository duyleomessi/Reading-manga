import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Manga } from '../interface/manga';

@Injectable()
export class FavoriteService {
    private _url = 'https://rails-manga-api.herokuapp.com';

    constructor(
        private _http: Http
    ) { }

    addFavorite(manga_id: String): Observable<Manga> {
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('auth_token'))
        let options = new RequestOptions({headers: headers});   
        return this._http.post(this._url + '/favorites', {manga_id: manga_id}, options)
            .map(res => res.json());
    }

    getFavorite() {
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('auth_token'));
        let options = new RequestOptions({headers: headers});   
        return this._http.get(this._url + '/favorites', options)
            .map(res => res.json());
    }
}