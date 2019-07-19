import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogService } from '../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../core/services/snack-bar.service';

export interface ClientData {
  id: string;
  firstName: string;
  lastName: string;
  dni: string;
  dateOfBirth: string;
  note: string;
  status: string;
  genderId: string;
  dniTypeId: string;
  userId: string;
}


@Component({
  selector: 'sib-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  public client:any[];
	displayedColumns: string[] = ['id', 'firstName', 'lastName', 'dni','dateOfBirth','note','status','genderId','dniTypeId','userId','edit','delete'];
	dataSource: MatTableDataSource<ClientData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(
    private dialogService: DialogService,
		private snackBar: SnackBarService
  ) 
  {
    this.client = [
      {id:"1" ,firstName:"Andreina",lastName:"López",dni:"21.225.225",dateOfBirth:"01/02/1992	",note:"Buen clinte",status:"A",genderId:"Femenino",dniTypeId:"Cédula de identidad",userId:"andre@gmail.com"},
      {id:"1" ,firstName:"José",lastName:"Parra",dni:"15.333.555",dateOfBirth:"25/12/1985",note:"Buen clinte",status:"A",genderId:"Masculino",dniTypeId:"Cédula de identidad",userId:"jos@gmail.com"},
      {id:"1" ,firstName:"Yasmin",lastName:"Nieto",dni:"18.333.880",dateOfBirth:"02/08/1988",note:"Buen clinte",status:"E",genderId:"Femenino",dniTypeId:"Cátalogo 1Cédula de identidad",userId:"yasm@gmail.com"},
    ];

  this.dataSource = new MatTableDataSource(this.client);
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
		this.dialogService.openConfirmDialog('¿Estás seguro de eliminar el Cliente '+id+' ?').afterClosed().subscribe(res=>{
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


