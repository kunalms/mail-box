import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AmplifyUIAngularModule} from '@aws-amplify/ui-angular';
import {LoaderComponent} from './loader/loader.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule,
    AmplifyUIAngularModule,
    MatProgressBarModule
  ],
  exports: [
    AmplifyUIAngularModule,
    MatProgressBarModule,
    LoaderComponent
  ]
})
export class CoreModule { }
