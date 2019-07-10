import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';
import { ServiceDetailSkillRoutingModule } from './service-detail-skill-routing.module';
import { ServiceDetailSkillComponent } from './service-detail-skill.component';
import { ServiceDetailSkillsComponent } from './service-detail-skills/service-detail-skills.component';
import { ServiceDetailSkillCreateComponent } from './service-detail-skill-create/service-detail-skill-create.component';
import { ServiceDetailSkillEditComponent } from './service-detail-skill-edit/service-detail-skill-edit.component';
import { ServiceDetailSkillShowComponent } from './service-detail-skill-show/service-detail-skill-show.component';
import { ServiceDetailSkillDeleteComponent } from './service-detail-skill-delete/service-detail-skill-delete.component';

@NgModule({
  declarations: [
	ServiceDetailSkillComponent,
	ServiceDetailSkillsComponent,
	ServiceDetailSkillCreateComponent,
	ServiceDetailSkillEditComponent,
	ServiceDetailSkillShowComponent,
	ServiceDetailSkillDeleteComponent
  ],
  imports: [
    MaterialModule,
    ServiceDetailSkillRoutingModule
  ]
})
export class ServiceDetailSkillModule { }
