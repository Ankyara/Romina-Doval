import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { RedesNavComponent } from './components/redes-nav/redes-nav.component';
import { DividerComponent } from './components/divider/divider.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterNavComponent } from './components/footer-nav/footer-nav.component';
import { LogoCodoComponent } from './components/logo-codo/logo-codo.component';
import { Education2Component } from './components/education2/education2.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    RedesNavComponent,
    DividerComponent,
    BannerComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    ProyectosComponent,
    FooterComponent,
    FooterNavComponent,
    LogoCodoComponent,
    Education2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
