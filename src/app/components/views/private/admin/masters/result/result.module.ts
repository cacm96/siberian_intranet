import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';
import { ResultRoutingModule } from './result-routing.module';
import { ResultComponent } from './result.component';
import { ResultsComponent } from './results/results.component';
import { ResultCreateComponent } from './result-create/result-create.component';
import { ResultEditComponent } from './result-edit/result-edit.component';
import { ResultShowComponent } from './result-show/result-show.component';
import { ResultDeleteComponent } from './result-delete/result-delete.component';

@NgModule({
  declarations: [
	ResultComponent,
	ResultsComponent,
	ResultCreateComponent,
	ResultEditComponent,
	ResultShowComponent,
	ResultDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ResultRoutingModule
  ]
})
export class ResultModule { }
