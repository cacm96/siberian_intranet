import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';

import { SkillRoutingModule } from './skill-routing.module';
import { SkillComponent } from './skill.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations:
  [
  	SkillComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SkillRoutingModule
  ]
})
export class SkillModule { }
