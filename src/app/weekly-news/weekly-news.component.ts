import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly-news',
  templateUrl: './weekly-news.component.html',
  styleUrls: ['./weekly-news.component.css']
})
export class WeeklyNewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  weeklyItem = [
    {
      title : "Corporate",
      desc : "Welcome To The Best Model Winner Contest",
      pic : "assets/img/news/weekly2News1.jpg"
    },
    {
      title : "Event night",
      desc : "Welcome To The Best Model Winner Contest",
      pic : "assets/img/news/weekly2News2.jpg"
    },
    {
      title : "Corporate",
      desc : "Welcome To The Best Model Winner Contest",
      pic : "assets/img/news/weekly2News3.jpg"
    },
    {
      title : "Event time",
      desc : "Welcome To The Best Model Winner Contest",
      pic : "assets/img/news/weekly2News4.jpg"
    },
    {
      title : "Corporate",
      desc : "Welcome To The Best Model Winner Contest",
      pic : "assets/img/news/weekly2News4.jpg"
    }
  ]

}
