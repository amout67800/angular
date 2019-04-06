import { Injectable } from '@angular/core';
import { ARTICLES } from '../../core/mocks/mock-article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticles(): any[] {
    return ARTICLES;
  }
}
