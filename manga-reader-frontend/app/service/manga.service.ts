import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Manga } from '../interface/manga';

@Injectable()

export class MangaService {
    private _url = 'https://rails-manga-api.herokuapp.com';
    constructor(
        private _http: Http
    ) { }
    getAllMangas(): Observable<Manga[]> {
        return this._http.get(this._url + '/mangas')
            .map(res => res.json());
    }

    getMangaById(id: String): Observable<Manga> {
        return this._http.get(this._url + '/mangas/' + id)
            .map(res => res.json());
    }

    getByCategory(category: String): Observable<Manga[]> {
        return this._http.get(this._url + '/manga/getByGenre?genre=' + category)
            .map(res => res.json());
    }

    getByAuthor(author: String): Observable<Manga[]> {
        return this._http.get(this._url + '/search/author?searchAuthor=' + author)
            .map(res => res.json());
    }

    getTopHot(): Observable<Manga[]> {
        return this._http.get(this._url + '/mangas/top')
            .map(res => res.json());
    }
}