import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../core/services/snack-bar.service';

export interface ServiceDetailSkillData {
  id: string;
  skill_id: string;
  service_detail_id: string;
}
@Component({
  selector: 'sib-service-detail-skills',
  templateUrl: './service-detail-skills.component.html',
  styleUrls: ['./service-detail-skills.component.scss']
})
export class ServiceDetailSkillsComponent implements OnInit {
  public serviceDetailSkill:any[];
  displayedColumns: string[] = [ 
    'id',
    'skill_id',
    'service_detail_id',
    'edit',
    'delete'];
  dataSource: MatTableDataSource<ServiceDetailSkillData>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialogService: DialogService,
		private snackBar: SnackBarService
  ) { 
    this.serviceDetailSkill = [
      {id:"1",skill_id:"Manejo de Tubería de Cobre",service_detail_id:"Reparación de Cocina"},
      {id:"2",skill_id:"Manejo de Herramientas",service_detail_id:"Reparación de Nevera"},
    ];

  this.dataSource = new MatTableDataSource(this.serviceDetailSkill);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
		  this.dataSource.paginator.firstPage();
		}
	}

	onDelete(id){
		this.dialogService.openConfirmDialog('¿Estas seguro de eliminar el Detalle de Servicio Habilidad '+id+' ?').afterClosed().subscribe(res=>{
			if (res==true) {
				console.log(id);
				this.snackBar.openSnackBar('Eliminado Correctamente','¿Deshacer?').onAction().subscribe(() => {
				  console.log('Recuperado');
				});
			}else{
				console.log(res);
			}
		});
	}

}
