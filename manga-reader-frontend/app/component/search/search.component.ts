import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../service/search.service';
import { Manga } from '../../interface/manga';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'search',
    templateUrl: 'app/component/search/search.template.html'
})
export class SearchComponent implements OnInit {
    mangaSearch: Manga;
    searchKey: String;
    constructor(
        private _searchService: SearchService,
        private _acRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this._acRoute.params
            .subscribe(paramsManga => {
                this.searchKey = paramsManga['searchKey'];
                //console.log('paramsManga: ', paramsManga);
                //console.log('this.searchKey: ', this.searchKey);
                this.SearchManga(this.searchKey);
            })
    }

    SearchManga(searchMangaKey: String) {
        this._searchService.searchManga(searchMangaKey)
            .subscribe(data => {
                //console.log("data", data);
                this.mangaSearch = data;
            });
    }

}