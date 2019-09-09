import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../../core/ui/material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'src/app/core/services/token-interceptor.service';

import { EquipinfrasService } from 'src/app/core/services/admin/equipinfras.service';
import { SubcategoryService } from 'src/app/core/services/admin/subcategory.service';
import { VarietyService } from 'src/app/core/services/admin/variety.service';

import { EquipInfrasRoutingModule } from './equip-infras-routing.module';
import { EquipInfrasComponent } from './equip-infras.component';
import { EquipInfrassComponent } from './equip-infrass/equip-infrass.component';
import { EquipInfrasCreateComponent } from './equip-infras-create/equip-infras-create.component';
import { EquipInfrasEditComponent } from './equip-infras-edit/equip-infras-edit.component';
import { EquipInfrasShowComponent } from './equip-infras-show/equip-infras-show.component';
import { EquipInfrasDeleteComponent } from './equip-infras-delete/equip-infras-delete.component';
import { AddVarietyComponent } from './add-variety/add-variety.component';

@NgModule({
  declarations: [
	EquipInfrasComponent,
	EquipInfrassComponent,
	EquipInfrasCreateComponent,
	EquipInfrasEditComponent,
	EquipInfrasShowComponent,
	EquipInfrasDeleteComponent,
	AddVarietyComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    EquipInfrasRoutingModule
  ],
  providers:
  [
    EquipinfrasService,
    SubcategoryService,
    VarietyService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi: true
    },
  ],
})
export class EquipInfrasModule { }
