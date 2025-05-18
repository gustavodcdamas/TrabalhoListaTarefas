import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import SwiperModule from 'swiper';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
