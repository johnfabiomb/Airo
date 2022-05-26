import { FormControl } from '@angular/forms';

export function requiredFileType(type: string) {
  return function (control: FormControl) {
    const { value } = control;
    if (value) {
      const extension = value.split('.')[1].toLowerCase();
      if (type.toLowerCase() !== extension.toLowerCase()) {
        return {
          requiredFileType: true,
        };
      }
      return null;
    }
    return null;
  };
}
