import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [ServiceComponent, ServicesComponent],
  imports: [
    CommonModule
  ]
})
export class ServiceModule { }
