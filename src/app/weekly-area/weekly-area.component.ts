import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly-area',
  templateUrl: './weekly-area.component.html',
  styleUrls: ['./weekly-area.component.css'],
})
export class WeeklyAreaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  weeklyItem = [
    {
      title: 'Strike',
      pic: 'assets/img/news/weeklyNews2.jpg',
      desc: 'Welcome To The Best Model Winner Contest',
    },
    {
      title: 'Strike',
      pic: 'assets/img/news/weeklyNews1.jpg',
      desc: 'Welcome To The Best Model Winner Contest',
    },
    {
      title: 'Strike',
      pic: 'assets/img/news/weeklyNews3.jpg',
      desc: 'Welcome To The Best Model Winner Contest',
    },
    {
      title: 'Strike',
      pic: 'assets/img/news/weeklyNews1.jpg',
      desc: 'Welcome To The Best Model Winner Contest',
    },
  ];
}
