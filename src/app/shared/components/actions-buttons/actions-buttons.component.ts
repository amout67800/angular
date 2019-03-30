import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-actions-buttons',
  templateUrl: './actions-buttons.component.html',
  styleUrls: ['./actions-buttons.component.css']
})
export class ActionsButtonsComponent implements OnInit {

  @Input() id: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ActionsButtonsDialog, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe();
  }
}

@Component({
  selector: 'actions-buttons-dialog',
  templateUrl: 'actions-buttons-dialog.html',
  styleUrls: ['./actions-buttons.component.css']
})
export class ActionsButtonsDialog {

  constructor(
    public dialogRef: MatDialogRef<ActionsButtonsDialog>) {}

  onNoClick(): void {
    console.log('Operation aborded');
    this.dialogRef.close();
  }

  onYesClick(): void {
    console.log('Element deleted');
    this.dialogRef.close();
  }
}
