import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogService } from '../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../core/services/snack-bar.service';

export interface ClaimData {
  id: string;
  equipinfra: string;
  address: string;
  date_end: string;
  lender: string;
  status: string;
}

@Component({
  selector: 'sib-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.scss']
})
export class ClaimComponent implements OnInit {

  public claim: any [];
  displayedColumns: string[] = ['id', 'equipinfra', 'address', 'date_end', 'lender', 'status', 'claim'];
  dataSource: MatTableDataSource<ClaimData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor
  (
    private dialogService: DialogService,
    private snackBar: SnackBarService
  ) 
  { 
    this.claim = [
      {id: '1' , equipinfra: 'Lavadora', address: 'Av. Rotaria', lender: 'Maria Moreno', date_end: '31-08-2019', status: 'warranty',},
      {id: '1' , equipinfra: 'Aire Acondicionado', address: 'Urb. Los Libertadores', lender: 'Maria Moreno', date_end: '30-09-2019', status: 'warranty',},
      {id: '1' , equipinfra: 'Lavadora', address: 'Av. Rotaria', lender: 'Maria Moreno', date_end: '31-05-2020', status: 'warranty',},
    ];

    this.dataSource = new MatTableDataSource(this.claim);
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
