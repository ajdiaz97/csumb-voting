import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';

import { AddIssueDialogComponent } from './add-issue-dialog/add-issue-dialog.component';
import JSON from '../assets/json/service.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(readonly dialog: MatDialog, readonly snackbar: MatSnackBar) {
    // Read in object here using service.
    console.log(JSON);
  }

  ngOnInit() {
    // Initialize object here if needed.
  }

  addIssue() {
    const dialogRef = this.dialog.open(AddIssueDialogComponent, {
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(ni => {
      console.log('I did it');
    });
  }
}


