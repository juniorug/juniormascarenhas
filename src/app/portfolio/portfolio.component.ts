import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  myGalleryOptions: NgxGalleryOptions[];
  myGalleryImages: NgxGalleryImage[];
  
  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/websites/thumbnails/00_tn.jpg',
        medium: 'assets/images/websites/00.png',
        big: 'assets/images/websites/00.png'
      },
      {
        small: 'assets/images/websites/thumbnails/01_tn.jpg',
        medium: 'assets/images/websites/01.png',
        big: 'assets/images/websites/01.png'
      },
      {
        small: 'assets/images/websites/thumbnails/02_tn.jpg',
        medium: 'assets/images/websites/02.png',
        big: 'assets/images/websites/02.png'
      },
      {
        small: 'assets/images/websites/thumbnails/03_tn.jpg',
        medium: 'assets/images/websites/03.png',
        big: 'assets/images/websites/03.png'
      },
      {
        small: 'assets/images/websites/thumbnails/04_tn.jpg',
        medium: 'assets/images/websites/04.png',
        big: 'assets/images/websites/04.png'
      },
      {
        small: 'assets/images/websites/thumbnails/05_tn.jpg',
        medium: 'assets/images/websites/05.png',
        big: 'assets/images/websites/05.png'
      },
      {
        small: 'assets/images/websites/thumbnails/06_tn.jpg',
        medium: 'assets/images/websites/06.jpg',
        big: 'assets/images/websites/06.jpg'
      }
    ];


    this.myGalleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.myGalleryImages = [
      {
        small: 'assets/images/websites_mine/thumbnails/00_tn.jpg',
        medium: 'assets/images/websites_mine/00.png',
        big: 'assets/images/websites_mine/00.png'
      },
      {
        small: 'assets/images/websites_mine/thumbnails/01_tn.jpg',
        medium: 'assets/images/websites_mine/01.png',
        big: 'assets/images/websites_mine/01.png'
      },
      {
        small: 'assets/images/websites_mine/thumbnails/02_tn.jpg',
        medium: 'assets/images/websites_mine/02.png',
        big: 'assets/images/websites_mine/02.png'
      },
      {
        small: 'assets/images/websites_mine/thumbnails/03_tn.jpg',
        medium: 'assets/images/websites_mine/03.png',
        big: 'assets/images/websites_mine/03.png'
      },
      {
        small: 'assets/images/websites_mine/thumbnails/04_tn.jpg',
        medium: 'assets/images/websites_mine/04.png',
        big: 'assets/images/websites_mine/04.png'
      },
      {
        small: 'assets/images/websites_mine/thumbnails/05_tn.jpg',
        medium: 'assets/images/websites_mine/05.png',
        big: 'assets/images/websites_mine/05.png'
      },
      {
        small: 'assets/images/websites_mine/thumbnails/06_tn.jpg',
        medium: 'assets/images/websites_mine/06.png',
        big: 'assets/images/websites_mine/06.png'
      },
      {
        small: 'assets/images/websites_mine/thumbnails/07_tn.jpg',
        medium: 'assets/images/websites_mine/07.png',
        big: 'assets/images/websites_mine/07.png'
      },
      {
        small: 'assets/images/websites_mine/thumbnails/08_tn.jpg',
        medium: 'assets/images/websites_mine/08.png',
        big: 'assets/images/websites_mine/08.png'
      },
      {
        small: 'assets/images/websites_mine/thumbnails/09_tn.jpg',
        medium: 'assets/images/websites_mine/09.png',
        big: 'assets/images/websites_mine/09.png'
      }
    ];
  }

}
