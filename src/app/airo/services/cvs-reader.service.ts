import { Injectable } from '@angular/core';
import { NgxCsvParser } from 'ngx-csv-parser';

@Injectable({
  providedIn: 'root',
})
export class CvsReaderService {
  csvRecords: any;

  header: boolean = false;

  constructor(private ngxCsvParser: NgxCsvParser) {}

  fileChangeListener($event: any): void {
    const files = $event.srcElement.files;
    this.ngxCsvParser
      .parse(files[0], { header: this.header, delimiter: ',' })
      .subscribe({
        next: (result): void => {
          console.log('Result', result);
          this.csvRecords = result;
        },
        error: (error: any): void => {
          console.log('Error', error);
        },
      });
  }
}
