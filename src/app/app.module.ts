import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionHomeComponent } from './components/section-home/section-home.component';
import { SectionSkillsComponent } from './components/section-skills/section-skills.component';
import { SectionProjectsComponent } from './components/section-projects/section-projects.component';
import { SectionAboutComponent } from './components/section-about/section-about.component';
import { ProjectComponent } from './components/project/project.component';
import { FooterComponent } from './components/footer/footer.component';
import { LegalsComponent } from './components/legals/legals.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    HeaderComponent,
    SectionHomeComponent,
    SectionSkillsComponent,
    SectionProjectsComponent,
    SectionAboutComponent,
    ProjectComponent,
    FooterComponent,
    LegalsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
