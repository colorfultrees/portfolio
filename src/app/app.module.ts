import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HeaderComponent } from './header/header.component';
import { SectionHomeComponent } from './section-home/section-home.component';
import { SectionSkillsComponent } from './section-skills/section-skills.component';
import { SectionProjectsComponent } from './section-projects/section-projects.component';
import { SectionAboutComponent } from './section-about/section-about.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    HeaderComponent,
    SectionHomeComponent,
    SectionSkillsComponent,
    SectionProjectsComponent,
    SectionAboutComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
