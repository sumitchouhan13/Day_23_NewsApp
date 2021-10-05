import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whats-new',
  templateUrl: './whats-new.component.html',
  styleUrls: ['./whats-new.component.css'],
})
export class WhatsNewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  newItem = [
    {
      title: 'Night party',
      pic: 'assets/img/news/whatNews1.jpg',
      desc: 'Welcome To The Best Model Winner Contest',
    },
    {
      title: 'Night party',
      pic: 'assets/img/news/whatNews2.jpg',
      desc: 'Welcome To The Best Model Winner Contest',
    },
    {
      title: 'Night party',
      pic: 'assets/img/news/whatNews3.jpg',
      desc: 'Welcome To The Best Model Winner Contest',
    },
    {
      title: 'Night party',
      pic: 'assets/img/news/whatNews4.jpg',
      desc: 'Welcome To The Best Model Winner Contest',
    },
  ];

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
