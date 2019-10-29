import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';
import { ServiceRoutingModule } from './service-routing.module';
import { ServiceComponent } from './service.component';
import { ServicesComponent } from './services/services.component';
import { AddResourceComponent } from './add-resource/add-resource.component';
import { AddPoliticComponent } from './add-politic/add-politic.component';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { AddSkillComponent } from './add-skill/add-skill.component';

@NgModule({
  declarations:
  [
  	ServiceComponent,
  	ServicesComponent,
  	AddResourceComponent,
  	AddPoliticComponent,
  	AddActivityComponent,
  	AddSkillComponent,
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    MaterialModule
  ]
})

export class ServiceModule { }
