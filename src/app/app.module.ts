import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { NgxGalleryModule } from 'ngx-gallery';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { SubscribeFormComponent } from './home/subscribe-form/subscribe-form.component';
import { BlogPreviewComponent } from './home/blog-preview/blog-preview.component';
import { GoogleMapComponent } from './home/google-map/google-map.component';
import { ContactFormComponent } from './home/contact-form/contact-form.component';
import { ImpactPhraseAreaComponent } from './home/impact-phrase-area/impact-phrase-area.component';
import { ImagesCarouselComponent } from './home/images-carousel/images-carousel.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LibsensorpyComponent } from './blog/libsensorpy/libsensorpy.component';
import { InspiracaoComponent } from './blog/inspiracao/inspiracao.component';
import { DoseComponent } from './blog/dose/dose.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    SubscribeFormComponent,
    BlogPreviewComponent,
    GoogleMapComponent,
    ContactFormComponent,
    ImpactPhraseAreaComponent,
    ImagesCarouselComponent,
    PortfolioComponent,
    LibsensorpyComponent,
    InspiracaoComponent,
    DoseComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB6FQyAqzMaF0i5WN9ToqFqP8_ZY-oYcos'
    }),
    AgmSnazzyInfoWindowModule,
    NgxGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent,
    HeaderComponent,
    FooterComponent]
})
export class AppModule { }
