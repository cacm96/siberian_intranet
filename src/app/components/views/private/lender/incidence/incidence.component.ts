import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogService } from '../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../core/services/snack-bar.service';

export interface IncidenceData {
  id: string;
  equipinfra: string;
  address: string;
  client: string;
  type: string;
  status: string;
}

@Component({
  selector: 'sib-incidence',
  templateUrl: './incidence.component.html',
  styleUrls: ['./incidence.component.scss']
})
export class IncidenceComponent implements OnInit {

  public incidence: any[];
  displayedColumns: string[] = ['id', 'equipinfra', 'address', 'client', 'type', 'status', 'incident'];
  dataSource: MatTableDataSource<IncidenceData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor
  (
    private dialogService: DialogService,
    private snackBar: SnackBarService
  ) 
  { 
    this.incidence = [
      {id: '1', equipinfra: 'Pared', address: 'Santa Elena', client: 'Gilberto Pérez', type: 'revision', status: 'requested',},
      {id: '1', equipinfra: 'Pared', address: 'Santa Elena', client: 'Dayana Suárez', type: 'servicio', status: 'approved',}
    ];

    this.dataSource = new MatTableDataSource(this.incidence);
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

}
