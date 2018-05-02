import { Component, OnInit } from '@angular/core';
import { CatImage } from '../models/cat-image.model';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent implements OnInit {

  constructor() { }

  private image: CatImage = new CatImage(
    'Progressive Web Cat',
    'https://cataas.com/cat/says/',
    40);

  public src: string;

  ngOnInit() {
    this.generateSrc();
  }

  generateSrc(): void {
    this.src = this.image.api + this.image.message +
      '?size=' + this.image.fontsize  +
      '&ts=' + Date.now();
  }

}
