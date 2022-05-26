import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { RouterModule } from '@angular/router';
import { AiroAppComponent } from './airo-app/airo-app.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AiroAppComponent, ContainerComponent, NavbarComponent],
  exports: [AiroAppComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class TemplateModule { }
