import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'sib-report-statistical-filter-dialog',
  templateUrl: './report-statistical-filter-dialog.component.html',
  styleUrls: ['./report-statistical-filter-dialog.component.scss']
})
export class ReportStatisticalFilterDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ReportStatisticalFilterDialogComponent>
  ) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
