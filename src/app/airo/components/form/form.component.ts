import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../../interfaces/User';
import { CvsReaderService } from '../../services/cvs-reader.service';
import { BaseComponent } from '../../shared/base.component';
import { requiredFileType } from '../../utils/file-validator';
import { regex } from '../../utils/regex.const';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent extends BaseComponent implements OnInit {
  airoSubscriptions: string[] = ['Basic', 'Advanced', 'Pro'];

  constructor(
    private fb: FormBuilder,
    public cvsReader: CvsReaderService,
    public router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.form = this.getForm();
  }

  getForm(): FormGroup {
    return this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      subscription: ['Advanced', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(regex.password),
        ],
      ],
      file: [null, [Validators.required, requiredFileType('csv')]],
    });
  }

  submit() {
    this.generateErrorMessages(this.form);
    if (this.form.valid) {
      const formValues = this.form.value;
      const user = {
        firstName: formValues.first_name,
        lastName: formValues.last_name,
        email: formValues.email,
        password: formValues.password,
        subscription: formValues.subscription,
        data: this.cvsReader.csvRecords,
      } as User;
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['reading']);
    }
  }

  clear(form: FormGroupDirective) {
    Swal.fire({
      title: 'Are you sure to discard the changes?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        form.resetForm();
        this.form = this.getForm();
        this.errors = [];
      }
    });
  }
}
