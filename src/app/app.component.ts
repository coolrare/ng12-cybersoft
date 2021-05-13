import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  keyword = 'ng12-cybersoft';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/api/articles.json').subscribe((data) => {
      console.log(data);
    })
  }

  doSearch(value: string) {
    this.keyword = value;
  }
}
