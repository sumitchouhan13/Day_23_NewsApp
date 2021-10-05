import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-section-area',
  templateUrl: './section-area.component.html',
  styleUrls: ['./section-area.component.css'],
})
export class SectionAreaComponent implements OnInit {
  id: number = 0;
  constructor(private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((paramsData) => {
      this.id = paramsData.id;
    });
  }
  newsItem = [
    {
      title: 'CONCERT',
      pic: 'assets/img/trending/right1.jpg',
      desc: 'Welcome To The Best Model Winner Contest',
    },
    {
      title: 'SEA BEACH',
      pic: 'assets/img/trending/right2.jpg',
      desc: 'Welcome To The Best Model Winner Contest',
    },
    {
      title: 'BIKE SHOW',
      pic: 'assets/img/trending/right3.jpg',
      desc: 'Welcome To The Best Model Winner Contest',
    },
    {
      title: 'SEE BEACH',
      pic: 'assets/img/trending/right4.jpg',
      desc: 'Welcome To The Best Model Winner Contest',
    },
    {
      title: 'SKEPING',
      pic: 'assets/img/trending/right5.jpg',
      desc: 'Welcome To The Best Model Winner Contest',
    },
  ];

  bottomItem = [
    {
      title: 'LIFEFSTYLE',
      pic: 'assets/img/trending/trending_bottom1.jpg',
      desc: 'Get the Illusion of Fuller Lashes by “Mascng.”',
    },
    {
      title: 'sports',
      pic: 'assets/img/trending/trending_bottom2.jpg',
      desc: 'Get the Illusion of Fuller Lashes by “Mascng.”',
    },
    {
      title: 'travels',
      pic: 'assets/img/trending/trending_bottom3.jpg',
      desc: 'Welcome To The Best Model Winner Contest',
    },
  ];
}
