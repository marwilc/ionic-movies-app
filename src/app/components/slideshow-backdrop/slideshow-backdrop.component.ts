import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from 'src/app/interfaces/interfaces';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {
  @Input() movies: Movie[] = [];

  slideOpts = {
    freeMode: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.3,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2.3,
        spaceBetween: 10,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2.3,
        spaceBetween: 10,
      },
      1400: {
        slidesPerView: 3.3,
        spaceBetween: 10,
      },
      2000: {
        slidesPerView: 5.3,
        spaceBetween: 10,
      },
    },
  };
  constructor(private _modal: ModalController) {}

  ngOnInit() {}

  async showDetail(id: number) {
    const movieDetailModal = await this._modal.create({
      component: DetailComponent,
      componentProps: {
        id,
      },
    });

    await movieDetailModal.present();
  }
}
