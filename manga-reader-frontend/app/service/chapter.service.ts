import { Injectable } from '@angular/core';
import { Chapter } from '../interface/chapter';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ChapterService {
    private _url = 'https://rails-manga-api.herokuapp.com';
    constructor(private _http: Http) { }

    // get all chapter of manga that has id
    getAllChapter(idManga: String): Observable<Chapter> {
        return this._http.get(this._url + '/chapters/manga/' + idManga)
            .map(res => res.json());
    }

    getChapter(idManga: String, idChapter: String): Observable<Chapter> {
        return this._http.get(this._url + '/chapters/' + idChapter)
            .map(res => res.json());
    }
}