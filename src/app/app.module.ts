import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/Principal/nav/nav.component';
import { HomeComponent } from './Components/Principal/home/home.component';
import { FooterComponent } from './Components/Principal/footer/footer.component';
import { HobbiesComponent } from './Components/Paginas/hobbies/hobbies.component';
import { SobreComponent } from './Components/Paginas/sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    HobbiesComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
