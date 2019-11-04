import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LenderComponent } from './lender.component';
import { LendersComponent } from './lenders/lenders.component';
import { LenderCreateComponent } from './lender-create/lender-create.component';
import { LenderEditComponent } from './lender-edit/lender-edit.component';
import { LenderShowComponent } from './lender-show/lender-show.component';

@NgModule({
  declarations: [LenderComponent, LendersComponent, LenderCreateComponent, LenderEditComponent, LenderShowComponent],
  imports: [
    CommonModule
  ]
})
export class LenderModule { }
