import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Manga } from '../../interface/manga';

@Component({
    selector: 'pagination',
    templateUrl: 'app/common/pagination/pagination.template.html'
})

export class PaginationComponent implements OnInit, OnChanges {
    @Input() mangas: Manga[];
    @Input() mangaPerPage: number;
    @Output() choosePageEvent: EventEmitter<number> = new EventEmitter();

    pages: number[];
    totalPages: number;
    selectedPage: number;
    constructor() { }

    ngOnInit() { }

    goToPage(page: number) {
        this.selectedPage = page;
        this.choosePageEvent.emit(page);
    }

    previous() {
        if (this.selectedPage > 1) {
            this.choosePageEvent.emit(--this.selectedPage);
        }
    }

    next() {
        if (this.selectedPage < this.totalPages) {
            this.choosePageEvent.emit(++this.selectedPage);
        }
    }

    ngOnChanges() {
        this.selectedPage = 1;

        if (this.mangas) {
            this.totalPages = Math.ceil(this.mangas.length / this.mangaPerPage);
            this.pages = [];
            for (let i = 0; i < this.totalPages; i++) {
                this.pages.push(i + 1);
            }
        }
    }
}
