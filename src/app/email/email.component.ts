import {Component, OnInit} from '@angular/core';
import {CreateEmailDialogService} from '../core/services/create-email-dialog.service';
import {LoaderService} from '../core/services/loader.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  categories = [
    {
      label: 'Work',
      class: 'work-dot',
      badgeCount: 10
    },
    {
      label: 'Document',
      class: 'document-dot',
      badgeCount: 10
    },
    {
      label: 'Social',
      class: 'social-dot'
    },
    {
      label: 'Advertising',
      class: 'advertising-dot'
    },
    {
      label: 'Clients',
      class: 'clients-dot'
    }
  ];

  labels = ['Family',
    'Work', 'Home', 'Children', 'Holiday',
    'Music', 'Photography', 'Film'
  ];

  constructor(private createEmailDialog: CreateEmailDialogService) {
  }

  ngOnInit(): void {
    // this.emailService.getInboxEmails('to2@gmail.com').then((data) => {
    //   console.log(data);
    // }, (err) => {
    //   console.log(err);
    // });
  }


  composeEmail(): void {
    this.createEmailDialog.showCreateEmailDialog();
  }

}
