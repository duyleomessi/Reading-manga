import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { SearchService } from '../../service/search.service';
import { Manga } from '../../interface/manga';

@Component({
    selector: 'navbar',
    templateUrl: 'app/common/navbar/navbar.template.html'
})

export class NavbarComponent implements OnInit {
    mangas: Manga;
    constructor(private _authService: AuthService,
        private _router: Router,
        private _searchService: SearchService) { }

    ngOnInit() {
    }

    searchManga(searchKey: String) {
        this._router.navigate(['/search', searchKey]);
    }

    logout() {
        this._authService.logout();
    }
}