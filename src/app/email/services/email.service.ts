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

  getInboxEmails(email: string): Promise<Email> {
    return API.get(this.apiName, this.path + this.inbox, {
      queryStringParameters: {
        toAddress: email,
      }
    });
  }

}
