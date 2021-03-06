import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';
import { Movie } from 'src/app/interfaces/interfaces';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {
  @Input() movies: Movie[] = [];

  @ViewChild(IonSlides) slides: IonSlides;

  slideOpts = {
    freeMode: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 3.3,
      },
      // when window width is >= 480px
      425: {
        slidesPerView: 4.3,
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 7.3,
      },
      1024: {
        slidesPerView: 9.3,
      },
      1440: {
        slidesPerView: 14.3,
      },
      2560: {
        slidesPerView: 20.3,
      },
    },
  };

  constructor(private _modal: ModalController) {}

  ngOnInit() {
    let timer = setTimeout(async () => {
      await this.slides.update();
      clearTimeout(timer);
    }, 1);
  }

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
