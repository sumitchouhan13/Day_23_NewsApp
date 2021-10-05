import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { HeaderComponent } from './header/header.component';
import { SectionAreaComponent } from './section-area/section-area.component';
import { WeeklyAreaComponent } from './weekly-area/weekly-area.component';
import { WhatsNewComponent } from './whats-new/whats-new.component';
import { WeeklyNewsComponent } from './weekly-news/weekly-news.component';
import { YoutubeAreaComponent } from './youtube-area/youtube-area.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriComponent } from './categori/categori.component';
import { CommonComponent } from './common/common.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    HeaderComponent,
    SectionAreaComponent,
    WeeklyAreaComponent,
    WhatsNewComponent,
    WeeklyNewsComponent,
    YoutubeAreaComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
    CategoriComponent,
    CommonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
