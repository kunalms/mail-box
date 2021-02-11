import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmailComponent} from './email.component';
import {InboxComponent} from './inbox/inbox.component';
import {SentComponent} from './sent/sent.component';

const routes: Routes = [{
  path: '',
  component: EmailComponent,
  children: [
    {
      path: '',
      redirectTo: 'inbox',
      pathMatch: 'full'
    },
    {
      path: 'inbox',
      component: InboxComponent
    },
    {
      path: 'sent',
      component: SentComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRoutingModule {
}
