import {Injectable} from '@angular/core';
import {API} from 'aws-amplify';
import {Email} from '../models/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiName = 'emailAPI';
  private path = '/emails';
  private inbox = '/inbox';


  constructor() {
  }

  getInboxEmails(emailAddress: string): Promise<Email> {
    return API.get(this.apiName, this.path + this.inbox, {
      queryStringParameters: {
        toAddress: emailAddress,
      }
    });
  }

  createEmail(email: Email): Promise<Email> {
    return API.post(this.apiName, this.path, {
      body: {
        subject: email.subject,
        body: email.body,
        cc: email.cc,
        toAddress: email.toAddress,
        fromAddress: email.fromAddress,
        read: false
      }
    });
  }

}
