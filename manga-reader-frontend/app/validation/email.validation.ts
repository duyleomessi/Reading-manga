import { FormControl } from '@angular/forms';

export class EmailValidation {
    static emailFormat(control: FormControl) {
        if (control.value) {
            let emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let validEmailFormat = (emailFormat.test(control.value));
            return validEmailFormat ? null : { emailFormat: true };
        }
    }
}