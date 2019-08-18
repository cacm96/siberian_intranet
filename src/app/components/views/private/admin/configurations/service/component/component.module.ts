import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../../core/ui/material.module';
import { ComponentRoutingModule } from './component-routing.module';
import { ComponentComponent } from './component.component';
import { ComponentsComponent } from './components/components.component';
import { ComponentCreateComponent } from './component-create/component-create.component';
import { ComponentEditComponent } from './component-edit/component-edit.component';
import { ComponentShowComponent } from './component-show/component-show.component';
import { ComponentDeleteComponent } from './component-delete/component-delete.component';

@NgModule({
  declarations: [
	ComponentComponent,
	ComponentsComponent,
	ComponentCreateComponent,
	ComponentEditComponent,
	ComponentShowComponent,
	ComponentDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentRoutingModule
  ]
})
export class ComponentModule { }
