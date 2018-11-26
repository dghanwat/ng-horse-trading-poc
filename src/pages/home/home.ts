import { Component, OnInit, AfterContentInit } from '@angular/core';
import { NavController } from 'ionic-angular';
// import * as Parallax from 'parallax-js';
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';


// declare var Parallax: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit, AfterContentInit {

  private urls: string[] = [
    'assets/imgs/uploads/2018/04/h1-gallery-img-2.jpg',
    'assets/imgs/uploads/2018/04/h1-gallery-img-3.jpg',
    'assets/imgs/uploads/2018/04/h1-gallery-img-4.jpg',
    'assets/imgs/uploads/2018/04/h1-gallery-img-5.jpg',
    'assets/imgs/uploads/2018/04/h1-gallery-img-6.jpg',
    'assets/imgs/uploads/2018/04/h1-gallery-img-1.jpg',
  ];

  public get images(): IMasonryGalleryImage[] {
    return this.urls.map(m => <IMasonryGalleryImage>{
      imageUrl: m
    });
  }

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {

  }

  ngAfterContentInit() {
    // const scene = document.getElementById('scene');
    // const parallaxInstance = new Parallax(scene, {
    //   relativeInput: true,
    //   hoverOnly: true
    // });
  }

}
