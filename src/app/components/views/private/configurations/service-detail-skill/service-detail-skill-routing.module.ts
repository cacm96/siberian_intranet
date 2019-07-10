import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ServiceDetailSkillComponent } from './service-detail-skill.component';
import { ServiceDetailSkillsComponent } from './service-detail-skills/service-detail-skills.component';
import { ServiceDetailSkillCreateComponent } from './service-detail-skill-create/service-detail-skill-create.component';
import { ServiceDetailSkillEditComponent } from './service-detail-skill-edit/service-detail-skill-edit.component';
import { ServiceDetailSkillShowComponent } from './service-detail-skill-show/service-detail-skill-show.component';
import { ServiceDetailSkillDeleteComponent } from './service-detail-skill-delete/service-detail-skill-delete.component';

const routes: Routes = [

	{path: '', component: ServiceDetailSkillComponent, canActivate: [],
		children:
		[
			{path: '', component: ServiceDetailSkillsComponent},
			{path: 'create', component: ServiceDetailSkillCreateComponent},
			{path: 'edit/:id', component: ServiceDetailSkillEditComponent},
			{path: 'show/:id', component: ServiceDetailSkillShowComponent},
			{path: 'delete/:id', component: ServiceDetailSkillDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ServiceDetailSkillRoutingModule { }
