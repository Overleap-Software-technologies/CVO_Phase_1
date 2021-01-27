import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogMorenamesComponent } from './dialog-morenames/dialog-morenames.component';

@Component({
  selector: 'app-managecredentials',
  templateUrl: './managecredentials.component.html',
  styleUrls: ['./managecredentials.component.css']
})
export class ManagecredentialsComponent {
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  hide = true;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  constructor(public dialog: MatDialog) {}

  openDialog(){
    this.dialog.open(DialogMorenamesComponent);
  }
}