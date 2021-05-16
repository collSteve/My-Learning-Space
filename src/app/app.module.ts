import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LearningMaterialMainComponent } from './learning-material-main';
import { ProjectsMainComponent } from './projects-main';
import { HomeComponent } from './home';

@NgModule({
  imports: [BrowserModule, FormsModule, appRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    LearningMaterialMainComponent,
    ProjectsMainComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
