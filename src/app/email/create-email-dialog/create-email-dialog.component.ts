import {Component, OnInit} from '@angular/core';
import {Email} from '../models/email';
import {Auth} from 'aws-amplify';

@Component({
  selector: 'app-create-email-dialog',
  templateUrl: './create-email-dialog.component.html',
  styleUrls: ['./create-email-dialog.component.scss']
})
export class CreateEmailDialogComponent implements OnInit {
  email: Email = {
    subject: '',
    toAddress: '',
    fromAddress: '',
    body: '',
    cc: ''
  };

  constructor() {
    Auth.currentUserInfo().then((userData) => {
      this.email.fromAddress = userData.attributes.email;
    });
  }

  ngOnInit(): void {

  }

}
