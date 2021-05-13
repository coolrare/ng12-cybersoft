import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  keyword = 'ng12-cybersoft';

  data: Article[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Article[]>('/api/articles.json').subscribe((data) => {
      // console.log(data);
      this.data = data;
    })
  }

  doSearch(value: string) {
    this.keyword = value;
  }
}

export interface Article {
  id:              number;
  href:            string;
  title:           string;
  date:            string;
  author:          string;
  category:        string;
  "category-link": string;
  summary:         string;
}
