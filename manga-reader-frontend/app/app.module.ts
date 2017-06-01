import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { MangaDetailComponent } from './component/mangaDetail/mangaDetail.component';
import { FooterComponent } from './common/footer/footer.component';
import { NotFoundComponent } from './component/notFound/notFound.component';
import { ReadMangaComponent } from './component/readManga/readManga.component';
import { SearchComponent } from './component/search/search.component';
import { PaginationComponent } from './common/pagination/pagination.component';
import { TopComponent } from './component/top/top.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';

import { HttpModule } from '@angular/http';

import { MangaService } from './service/manga.service';
import { CategoryService } from './service/category.service';
import { AuthService } from './service/auth.service';
import { ChapterService } from './service/chapter.service';
import { SearchService } from './service/search.service';
import { CommentService } from './service/comment.service';
import { FavoriteService } from './service/favorite.service';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { routing } from './route/app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, HttpModule, routing, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, HomeComponent, NavbarComponent, MangaDetailComponent,
    FooterComponent, NotFoundComponent, ReadMangaComponent, SearchComponent, PaginationComponent,
    TopComponent, RegisterComponent, LoginComponent
  ],
  providers: [MangaService, CategoryService, AuthService, ChapterService,
    SearchService, CommentService, FavoriteService, AUTH_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
