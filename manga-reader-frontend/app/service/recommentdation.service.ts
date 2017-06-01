import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Manga } from '../interface/manga';

@Injectable()

export class RecommendationService {
    private _url = 'https://rails-manga-api.herokuapp.com';
    constructor(
        private _http: Http
    ) { }

    getRecommend(genres: String): Observable<Manga[]> {
        console.log("genres is ", genres);
        return this._http.get(this._url + '/recommend?genres=' + genres)
            .map(res => res.json())
    }
}