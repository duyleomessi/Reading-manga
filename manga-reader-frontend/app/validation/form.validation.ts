import { FormGroup } from '@angular/forms';

export class FormValidation {
    static notMatchPassword(group: FormGroup) {
        return (group.get('password').value === group.get('confirmPassword').value) ? null : { notMatchPassword: true };
    }
}