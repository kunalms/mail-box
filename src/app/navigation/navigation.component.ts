import {Component} from '@angular/core';
import {Auth} from 'aws-amplify';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  userData: any;

  constructor() {
    Auth.currentUserInfo().then((userData) => {
      this.userData = userData.attributes;
    });
  }

  logOut(): void {
    Auth.signOut();
  }


}
