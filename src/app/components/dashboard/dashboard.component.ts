import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { UpdateExpenceComponent} from '../../modelPopups/update-expence/update-expence.component'
import { allExpencess } from './data'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any;
  indData: any;
  total: Number;
  indTotal: Number;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.data = allExpencess
    this.indData = allExpencess.filter((res) => res.user_name === 'mustak')
    this.total = this.totalAllExpencess(allExpencess)
    this.indTotal = this.individualExpencess(this.indData)

  }
  openDialog(item) {
    const dialogRef = this.dialog.open(UpdateExpenceComponent,{
      data:item,
      height:'auto',
      width:'500px'

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  totalAllExpencess = (data) => {
    let sum = 0;
    for (let i in data) {
      sum = sum + data[i].price
    }
    return sum
  }

  individualExpencess = (data) => {
    let sum = 0;
    for (let i in data) {
      sum = sum + data[i].price
    }
    return sum
  }

}
