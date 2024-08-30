import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.css']
})
export class LeadershipComponent implements OnInit {
  rows: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadLeadershipData();
  }

  loadLeadershipData(): void {
    this.rows = [
      {
        style: {
          left:'-700px',
        },
        name: 'Krishna Sudheendra',
        title: 'Founder & CEO',
        image1: 'assets/images/image92.png',
        image2: 'assets/images/image93.png'
      },

      {
        style: {
          left:'-400px',
        },
        name: 'Krishna Sudheendra',
        title: 'Founder & CEO',
        image1: 'assets/images/image92.png',
        image2: 'assets/images/image93.png'
      },
     
      {
        style: {
          left:'-100px',
        },
        name: 'Krishna Sudheendra',
        title: 'Founder & CEO',
        image1: 'assets/images/image92.png',
        image2: 'assets/images/image93.png'
      },
      {
        style: {
          left:'200px',
        },
        name: 'Krishna Sudheendra',
        title: 'Founder & CEO',
        image1: 'assets/images/image92.png',
        image2: 'assets/images/image93.png'
      },
      {
        style: {
          left:'-700px',
          top:'1050px'
        },
        name: 'Krishna Sudheendra',
        title: 'Founder & CEO',
        image1: 'assets/images/image92.png',
        image2: 'assets/images/image93.png'
      },

      {
        style: {
          left:'-400px',
          top:'1050px'
        },
        name: 'Krishna Sudheendra',
        title: 'Founder & CEO',
        image1: 'assets/images/image92.png',
        image2: 'assets/images/image93.png'
      },
     
      {
        style: {
          left:'-100px',
          top:'1050px'
        },
        name: 'Krishna Sudheendra',
        title: 'Founder & CEO',
        image1: 'assets/images/image92.png',
        image2: 'assets/images/image93.png'
      },
      {
        style: {
          left:'200px',
          top:'1050px'
        },
        name: 'Krishna Sudheendra',
        title: 'Founder & CEO',
        image1: 'assets/images/image92.png',
        image2: 'assets/images/image93.png'
      },
    ];
  }
}
