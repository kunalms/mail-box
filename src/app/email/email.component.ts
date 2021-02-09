import {Component, OnInit} from '@angular/core';
import {EmailService} from './services/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    this.emailService.getInboxEmails('to2@gmail.com').then((data) => {
      console.log(data);
    }, (err) => {
      console.log(err);
    });
  }

}
