import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'email',
    loadChildren: () => import('./email/email.module').then(m => m.EmailModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'email'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
