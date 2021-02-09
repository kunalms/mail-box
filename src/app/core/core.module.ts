import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AmplifyUIAngularModule} from '@aws-amplify/ui-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AmplifyUIAngularModule
  ],
  exports: [
    AmplifyUIAngularModule
  ]
})
export class CoreModule { }
