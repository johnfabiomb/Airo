import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ReadingPageComponent } from './components/reading-page/reading-page.component';
import { UserDataGuard } from './guards/user-data.guard';

const routes: Routes = [
  {
    path: '',
    component: FormComponent
  },
  {
    path: 'reading',
    canActivate:[UserDataGuard],
    component: ReadingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AiroRoutingModule { }
