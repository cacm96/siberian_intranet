import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../core/services/snack-bar.service';

export interface ServiceDetailData {
  request: string;
  revision: string;
  orderService: string;
  Presupuesto: string;
  orderServiceWaranty: string;
  Reclamo: string;
  revisionWaranty : string;
}

@Component({
  selector: 'sib-bitacora-types',
  templateUrl: './bitacora-types.component.html',
  styleUrls: ['./bitacora-types.component.scss']
})

export class BitacoraTypesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
