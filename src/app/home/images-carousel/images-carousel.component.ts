import { Component, OnInit } from '@angular/core';
import {createLayout} from 'pro-gallery-layouter';

/*
//change to your own images here
const items = [
    {id: 'a466b258c6b5e2096fa546c86aae8fa2',url: 'https://static.wixstatic.com/media/8bb438_eeef61d83253480ab7bbdb07692b4c90.jpg',width: 5494,height: 3840},
    {id: 'a081f588eff30a9f8b6fcd0f4889eac3',url: 'https://static.wixstatic.com/media/8bb438_2ff4f1995c0e40d49158d5225eeb465e.jpg',width: 4200,height: 2800},
    {id: '0ee95e519c2e1274c30f56e3c098ec86',url: 'https://static.wixstatic.com/media/8bb438_a132b18dea524d48a68a37f0075fcc1e.jpg',width: 5600,height: 3727},
    {id: '262e38d72080e92600c9df018a4f4f1e',url: 'https://static.wixstatic.com/media/8bb438_4fa0352201a1431395c3c4d4b21e3481.jpg',width: 3727,height: 5600},
    {id: '3dff88af7694728e13d6ca4ff03fc6cf',url: 'https://static.wixstatic.com/media/8bb438_d6bfaf940d05421cb6bc7a8c867fb4b5.jpg',width: 5600,height: 3727},
    {id: '83d9e931839e66e00faf1df41cbc7349',url: 'https://static.wixstatic.com/media/8bb438_71edafe6d54d457484285e61a1f75d17.jpg',width: 5600,height: 3727},
    {id: '678c48f759062c8e8146a70043ad7823',url: 'https://static.wixstatic.com/media/8bb438_ced2a19af5cf448e91413099f4c422fa.jpg',width: 5600,height: 3728},
    {id: 'f6db1b532552aa00e9549b5c97e6770a',url: 'https://static.wixstatic.com/media/8bb438_cabd67053eae45e7ab273832504717ff.jpg',width: 5600,height: 3727},
    {id: '69102794801438efee46af8202c76b81',url: 'https://static.wixstatic.com/media/8bb438_66a1bb26f7f64497be343d886fe2197a.jpg',width: 3727,height: 5600},
    {id: '61d3f0c021fd47d92a4e7395ab107e48',url: 'https://static.wixstatic.com/media/8bb438_cdbf2bdff4864d2094370a3051812409.jpg',width: 5600,height: 3727},
    {id: '22883fe4ca22b25b5b19c8640d21d524',url: 'https://static.wixstatic.com/media/8bb438_2a22b3e85bb1434e81f6fbd4878fb4ae.jpg',width: 5600,height: 3728},
];

const styleParams = {
  sampleSize: 100,
  isVertical: false,
  gallerySize: 594,
  minItemSize: 243,
  groupSize: 3,
  chooseBestGroup: true,
  groupTypes: '1,2h,2v,3t,3b,3l,3r,3v,3h',
  rotatingGroupTypes: '',
  cubeImages: false,
  cubeType: 'fill',
  smartCrop: false,
  collageDensity: '0.8',
  imageMargin: 5,
  galleryMargin: 0,
  floatingImages: 0.05,
  cubeRatio: 1,
  fixedColumns: 3,
  groupsPerStrip: 3,
  oneRow: true,
  placeGroupsLtr: false,
  at: 1554045269347,
  bottomInfoHeight: 0};

const container = {
  width: window.innerWidth,
  height: window.innerHeight
};

const layoutParams = {
  items,
  styleParams,
  container
};

const layout = createLayout(layoutParams);


const parent = document.createElement('div');
parent.id = 'root';
document.body.prepend(parent);

for (let i = 0; i < layout.items.length; i++) {
  const item = layout.items[i];
  const iDom = document.createElement('div');
  iDom.innerHTML = i.toString();
  iDom.style.width = item.width + 'px';
  iDom.style.height = item.height + 'px';
  iDom.style.position = 'absolute';
  iDom.style.top = item.offset.top + 'px';
  iDom.style.left = item.offset.left + 'px';
  //iDom.style.backgroundColor = items[i].bgColor;
  parent.prepend(iDom);
}

*/

@Component({
  selector: 'images-carousel',
  templateUrl: './images-carousel.component.html',
  styleUrls: ['./images-carousel.component.scss']
})
export class ImagesCarouselComponent implements OnInit {
  
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
 
  constructor() {}
  ngOnInit(){}
  
}
