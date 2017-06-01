import { Component, OnInit } from '@angular/core';
// import service
import { MangaService } from '../../service/manga.service';
import { CategoryService } from '../../service/category.service';
import { ActivatedRoute } from '@angular/router';
// import interface
import { Manga } from '../../interface/manga';
import { Category } from '../../interface/category';

@Component({
    selector: 'home',
    templateUrl: 'app/component/home/home.template.html'
})

export class HomeComponent implements OnInit {
    mangas: Manga[];
    categories: Category;
    selectedCategory: String;
    mangaInPage: Manga[];
    mangaPerPage = 20;
    author: string;

    constructor(
        private _mangaService: MangaService,
        private _categoryService: CategoryService,
        private _acRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this._acRoute.queryParams
            .subscribe(queryParams => {
                this.author = queryParams['author'];
                if (this.author) {
                    this._mangaService.getByAuthor(this.author)
                        .subscribe(data => {
                            this.mangas = data;
                            this.getMangaByPage(1);
                        })
                } else {
                    this._mangaService.getAllMangas()
                        .subscribe(data => {
                            this.mangas = data;
                            this.getMangaByPage(1);
                        })

                }
            })
        this.getAllCategories();
    }

    getMangaByPage(page: number) {
        this.mangaInPage = [];
        for (let i = 0; i < this.mangaPerPage; i++) {
            if (this.mangaPerPage * (page - 1) + i < this.mangas.length) {
                this.mangaInPage.push(this.mangas[this.mangaPerPage * (page - 1) + i]);
            }
        }
    }

    getAllMangas() {
        this._mangaService.getAllMangas()
            .subscribe(data => {
                this.mangas = data;
            })
    }

    getAllCategories() {
        this._categoryService.getCategories()
            .subscribe(data => {
                this.categories = data;
            })
    }

    getMangaByCategory(category: String) {
        this.selectedCategory = category;
        this._mangaService.getByCategory(category)
            .subscribe(data => {
                this.mangas = data;
                this.getMangaByPage(1);
            });
    }

    isSelected(category: String) {
        if (this.selectedCategory === category) {
            return true;
        }
        return false;
    }
}