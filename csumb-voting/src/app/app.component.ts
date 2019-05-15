import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import { AddIssueDialogComponent } from './add-issue-dialog/add-issue-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = "meme";
  arrinfo: string [];

  constructor(readonly dialog: MatDialog, readonly snackbar: MatSnackBar, private httpService: HttpClient) {
    // Read in object here using service. 
  }

  
  ngOnInit() {
    // Initialize object here if needed.

    this.httpService.get('../assets/json/service.json').subscribe(
      data => {
        this.arrinfo = data as string [];
        console.log(this.arrinfo);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

  addIssue() {
    const dialogRef = this.dialog.open(AddIssueDialogComponent, {
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(ni => {
      console.log('I did it');
    });
  }
  upVote(idx){
    this.arrinfo[idx].upvotes++;
    this.arrinfo[idx].upvotes.push(this.arrinfo[idx].upvotes);
  }
  downVote(idx){
    this.arrinfo[idx].upvotes--;
  }
}


