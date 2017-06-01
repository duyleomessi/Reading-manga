import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ChapterService } from '../../service/chapter.service';
import { CommentService } from '../../service/comment.service';
import { Chapter } from '../../interface/chapter';
import { Comment } from '../../interface/comment';

@Component({
    selector: 'readManga',
    templateUrl: 'app/component/readManga/readManga.template.html',
    styleUrls: [`app/component/readManga/readManga.component.css`]
})

export class ReadMangaComponent implements OnInit {
    idManga: string;
    idChapter: string;
    chapter: Chapter;
    comments: Comment[];
    loggedIn = true;

    commentForm: FormGroup;
    constructor(
        private _chapterService: ChapterService,
        private _acRoute: ActivatedRoute,
        private _fb: FormBuilder,
        private _http: Http,
        private _commentService: CommentService
    ) { }

    ngOnInit() {
        this._acRoute.params
            .subscribe((paramsIdArr: Object) => {
                this.idManga = paramsIdArr['idChapter'];
                this.idChapter = paramsIdArr['idChapter'];
                this.getChapter(this.idManga, this.idChapter);
            })

        this._commentService.getComment(this.idChapter)
            .subscribe(
                data => {
                    console.log("data", data);
                    this.comments = data;
                },
                err => {
                    console.log("error", err);
                }
            )

        this.commentForm = this._fb.group({
            content: ['']
        })
    }

    getChapter(idManga: String, idChapter: String) {
        this._chapterService.getChapter(idManga, idChapter)
            .subscribe(data => {
                this.chapter = data;
            })
    }

    postComment() {
        this._commentService.postComment({ content: this.commentForm.controls.content.value, chapter_id: this.idChapter, manga_id: this.idManga })
            .subscribe(
            data => {
                console.log("data", data);
                this.comments.unshift(data.comment);
                this.commentForm.controls.content.value = "";
            },
            err => {
                console.log("error: ", err);
                if (err.status == 401) {
                    this.loggedIn = false;
                }
            })
    }

}