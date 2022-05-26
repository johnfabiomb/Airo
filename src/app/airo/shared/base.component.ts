import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({ template: '' })
export abstract class BaseComponent implements OnDestroy {
  public form!: FormGroup;

  private subscriptions: Subscription = new Subscription();

  errors: string[] = [];

  constructor() {
    // override ngOnDestroy in order to perform unsubscription of the passed subscriptions
    const f = this.ngOnDestroy.bind(this);
    this.ngOnDestroy = () => {
      f();
      this.subscriptions.unsubscribe();
    };
  }

  customValidator() {
    if (this.form) this.generateErrorMessages(this.form);
    return null;
  }

  generateErrorMessages(formGroup: FormGroup) {
    this.errors.length = 0;
    Object.keys(formGroup.controls).forEach((controlName) => {
      const control = formGroup.controls[controlName];
      const { errors }: any = control;

      if (errors === null || errors.count === 0) {
        return;
      }
      if (errors.required) {
        this.errors.push(`${controlName.split('_').join(' ')} is required`);
      }
      if (errors.minlength) {
        this.errors.push(
          `${controlName} minimum length is ${errors.minlength.requiredLength}.`
        );
      }
      if (errors.email) {
        this.errors.push(`${controlName.split('_').join(' ')} is invalid`);
      }
      if (errors.requiredFileType) {
        this.errors.push(
          `${controlName.split('_').join(' ')} has unsupported file type`
        );
      }
      if (controlName == 'password' && errors.pattern) {
        this.errors.push(
          `${controlName.split('_').join(' ')} must have minimum eight characters, at least one letter, one number and one special character`
        );
      }
      if (errors.message) {
        this.errors.push(
          `${controlName.split('_').join(' ')} ${errors.message}`
        );
      }
    });
  }

  /**
   * The subscription passed will be unsubscribed on the ngOnDestroy method.
   * If the subscription is already added nothing happens.
   * @param sub - the subscription to unsubscribe
   */
  protected addSafeSubscription(...sub: Subscription[]): void {
    if (!sub) {
      return;
    }
    sub.forEach((subscription) => this.subscriptions.add(subscription));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
