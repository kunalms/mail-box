import {Injectable} from '@angular/core';
import {EmailService} from '../../email/services/email.service';
import {MatDialog} from '@angular/material/dialog';
import {CreateEmailDialogComponent} from '../../email/create-email-dialog/create-email-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {LoaderService} from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class CreateEmailDialogService {
  readonly SUCCESS_MESSAGE = 'Email Sent Successfully!';
  readonly FAILURE_MESSAGE = 'An error occurred while sending the Email!';

  constructor(private emailService: EmailService,
              private dialog: MatDialog,
              private matSnackBar: MatSnackBar,
              private loaderService: LoaderService) {
  }

  showCreateEmailDialog(): void {
    const dialogRef = this.dialog.open(CreateEmailDialogComponent, {
      disableClose: true,
      width: '600px'
    });

    dialogRef.beforeClosed().subscribe(email => {
      if (email) {
        this.loaderService.show();
        this.emailService.createEmail(email).then(() => {
          this.matSnackBar.open(this.SUCCESS_MESSAGE, 'dismiss', {duration: 4000});
        }, () => {
          this.matSnackBar.open(this.FAILURE_MESSAGE, 'dismiss', {duration: 4000});
        }).finally(() => {
          this.loaderService.hide();
        });
      }
    });
  }
}
