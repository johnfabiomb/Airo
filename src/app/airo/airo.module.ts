import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AiroRoutingModule } from './airo-routing.module';
import { FormComponent } from './components/form/form.component';
import { ReadingPageComponent } from './components/reading-page/reading-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { UserDataGuard } from './guards/user-data.guard';

@NgModule({
  declarations: [FormComponent, ReadingPageComponent],
  imports: [
    CommonModule,
    AiroRoutingModule,
    ReactiveFormsModule,
    NgxCsvParserModule,
  ],
  providers: [UserDataGuard],
})
export class AiroModule {}
