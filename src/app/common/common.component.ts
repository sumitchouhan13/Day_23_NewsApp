import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css'],
})
export class CommonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  socialItem = [
    {
      pic: 'assets/img/news/icon-fb.png',
      count: '8,045',
    },
    {
      pic: 'assets/img/news/icon-tw.png',
      count: '8,045',
    },
    {
      pic: 'assets/img/news/icon-ins.png',
      count: '8,045',
    },
    {
      pic: 'assets/img/news/icon-yo.png',
      count: '8,045',
    },
  ];
}
