import { FormControl } from '@angular/forms';

export class PasswordValidation {
    static notContainLowerLetter(control: FormControl) {
        if (control.value) {
            let format = /.*[a-z].*/;
            let valid = format.test(control.value);
            return valid ? null : { notContainLowerLetter: true };
        }
    }

    static notContainUpperLetter(control: FormControl) {
        if (control.value) {
            let format = /.*[A-Z].*/;
            let valid = format.test(control.value);
            return valid ? null : { notContainUpperLetter: true };
        }
    }

    static notContainNumber(control: FormControl) {
        if (control.value) {
            let format = /.*[0-9].*/;
            let valid = format.test(control.value);
            return valid ? null : { notContainNumber: true };
        }
    }
}