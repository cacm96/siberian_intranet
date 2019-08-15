import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';
import { SkillRoutingModule } from './skill-routing.module';
import { SkillComponent } from './skill.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillCreateComponent } from './skill-create/skill-create.component';
import { SkillEditComponent } from './skill-edit/skill-edit.component';
import { SkillShowComponent } from './skill-show/skill-show.component';
import { SkillDeleteComponent } from './skill-delete/skill-delete.component';

@NgModule({
  declarations: [
	SkillComponent,
	SkillsComponent,
	SkillCreateComponent,
	SkillEditComponent,
	SkillShowComponent,
	SkillDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SkillRoutingModule
  ]
})
export class SkillModule { }
