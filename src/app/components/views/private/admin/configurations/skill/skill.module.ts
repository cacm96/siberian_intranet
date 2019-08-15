import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillComponent } from './skill.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [SkillComponent, SkillsComponent],
  imports: [
    CommonModule
  ]
})
export class SkillModule { }
