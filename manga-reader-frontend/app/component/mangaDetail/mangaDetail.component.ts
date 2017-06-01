import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MangaService } from '../../service/manga.service';
import { ChapterService } from '../../service/chapter.service';
import { FavoriteService } from '../../service/favorite.service';
import { RecommendationService } from '../../service/recommentdation.service';
import { Manga } from '../../interface/manga';
import { Chapter } from '../../interface/chapter';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap.js';

@Component({
    selector: 'mangaDetail',
    templateUrl: 'app/component/mangaDetail/mangaDetail.template.html'
})
export class MangaDetailComponent implements OnInit, OnDestroy {
    mangaDetail: Manga;
    mangas: Manga;
    chapters: Chapter;
    id: String;
    subscription: Subscription;
    loggedIn = true;
    isFavorite = false;
    favorites: any;
    genres: String;
    recommendManga: Manga[];
    constructor(
        private _mangaService: MangaService,
        private _chapterService: ChapterService,
        private _favoriteService: FavoriteService,
        private _acRoute: ActivatedRoute,
        private _router: Router,
        private _recommendationService: RecommendationService
    ) { }

    ngOnInit() {
        this.subscription = this._acRoute.params
            .subscribe(paramsId => {
                this.id = paramsId['id'];
                console.log("id", this.id);
                this.getMangaById(this.id);
                this.getAllChapter(this.id);
                this.getFavorite();
                
            })

        
    }
    getRecommend(genres: String) {
        this._recommendationService.getRecommend(this.genres) 
            .subscribe(data => {
                console.log("recommend data", data);
                this.recommendManga = data;
            })
    }

    getFavorite() {
        this._favoriteService.getFavorite()
            .subscribe(data => {
                this.favorites = data;
                console.log("data", data);

                if (this.favorites.length > 0 && this.favorites.indexOf(this.id) >= 0) {
                    this.isFavorite = true;
                } 
            })
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }


    getMangaById(id: String) {
        this._mangaService.getMangaById(id)
            .subscribe(data => {
                this.mangaDetail = data;
                console.log('genres', data.genres);
                this.genres = this.mangaDetail.genres[0];
                console.log("this.genres", this.genres);
                this.getRecommend(this.genres);
            })
    }

    getAllChapter(id: String) {
        this._chapterService.getAllChapter(id)
            .subscribe(data => {
                //console.log("data: ", data);
                this.chapters = data;
            })
    }

    searchAuthor(author: string) {
        this._router.navigate(['/'], { queryParams: { author: author } });
    }

    addFavorite() {
        this._favoriteService.addFavorite(this.id)
            .subscribe(data => {
                console.log("data: ", data);
                this.isFavorite = true;
            },
            err => {
                console.log('err: ', err);
                if (err.status == 401) {
                    this.loggedIn = false;
                }
            });
    }

}