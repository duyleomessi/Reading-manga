import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Manga } from '../interface/manga';

@Injectable()
export class CommentService {
    private _url = 'https://rails-manga-api.herokuapp.com';

    constructor(
        private _http: Http
    ) { }

    postComment(body: any) {
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('auth_token'))
        //console.log("Authorization: ", localStorage.getItem('auth_token'));
        let options = new RequestOptions({headers: headers});   
        //console.log('options', options);
        //console.log('headers', headers);
        let chapter_id = body.chapter_id; 
        return this._http.post(this._url + '/chapters/' + chapter_id + '/comments', body, options)
                .map(res => res.json())
    }

    getComment(chapter_id: String) {
        return this._http.get(this._url + '/chapters/' + chapter_id + '/comments')
            .map(res => res.json())
    }

}