import { Component, OnInit , ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogService } from '../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../core/services/snack-bar.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';

export interface BudgetData {
  id: string;
  client:string;
  equipinfras: string;
  location: string;
  date: string;
  lender: string;
  status: string;
  }
  
@Component({
  selector: 'sib-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

  public Budget:any[];
displayedColumns: string[] = ['id','client','equipinfras','location','date','lender','status'];
  dataSource: MatTableDataSource<BudgetData>;
  
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
  
  
  
  constructor(
    private dialogService: DialogService,
    private snackBar: SnackBarService,
    private _route: ActivatedRoute,
		private _router: Router,
		private _location: Location
    ) 
    {

      this.Budget= [
        {id:"1" ,client:"Anderson diaz",equipinfras:"Lavadora",location:"Calle San Rafael",date:"10-11-2019",lender:"Maria Moreno",status:"diagnosticated",},
	      {id:"2" ,client:"Anderson diaz",equipinfras:"Cocina",location:"Calle San Rafael",date:"11-11-2019",lender:"Maria Moreno",status:"finalized",},
        {id:"1" ,client:"Anderson Diaz",equipinfras:"Aire Acondicionado",location:"Calle San Rafael",date:"11-11-2019",lender:"Maria Moreno",status:"finalized",},
      ];
  
    this.dataSource = new MatTableDataSource(this.Budget);
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

	
  goBack()
	{ 
		this._location.back(); 
	}
}

