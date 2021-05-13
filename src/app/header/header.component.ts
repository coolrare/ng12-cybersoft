import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename = 'Hello World';
  subtitle = '記載著 <mark>Will</mark> 在網路世界的學習心得與技術分享';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.sitename = 'The Will Will Web';
    }, 3000);
  }

  changeTitle(evt: MouseEvent) {
    console.log(evt);
    if (evt.ctrlKey) {
      this.sitename = 'The Will Will Web 2';
    }
  }

}
