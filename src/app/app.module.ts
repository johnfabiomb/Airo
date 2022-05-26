import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AiroAppComponent } from './template/airo-app/airo-app.component';
import { ContainerComponent } from './template/container/container.component';
import { TemplateModule } from './template/template.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule
  ],
  providers: [],
  bootstrap: [AiroAppComponent]
})
export class AppModule { }
