import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EmailRoutingModule} from './email-routing.module';
import {EmailComponent} from './email.component';
import {SharedModule} from '../shared/shared.module';
import {InboxComponent} from './inbox/inbox.component';
import {SentComponent} from './sent/sent.component';
import {CreateEmailDialogComponent} from './create-email-dialog/create-email-dialog.component';


@NgModule({
  declarations: [EmailComponent, InboxComponent, SentComponent, CreateEmailDialogComponent],
  imports: [
    CommonModule,
    EmailRoutingModule,
    SharedModule
  ]
})
export class EmailModule {
}
