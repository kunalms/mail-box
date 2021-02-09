import {Component} from '@angular/core';
import {FormFieldTypes} from '@aws-amplify/ui-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mail-box';
  signUpFormFields: FormFieldTypes;

  constructor() {

    this.signUpFormFields = [
      {
        type: 'email',
        label: 'Email',
        placeholder: 'Enter your email address',
        required: true,
      },
      {
        type: 'password',
        label: 'Password',
        placeholder: 'Enter your password ',
        required: true,
      }
    ];
  }

}
