import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../core/ui/material.module';
import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './transaction.component';

@NgModule({
  declarations: [
    TransactionComponent
  ],
  imports:[
    CommonModule,
  	MaterialModule,
  	TransactionRoutingModule
  ],
})
export class TransactionModule { }
