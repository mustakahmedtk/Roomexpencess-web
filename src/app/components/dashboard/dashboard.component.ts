import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrManager } from 'ng6-toastr-notifications';
import { UpdateExpenceComponent } from '../../modelPopups/update-expence/update-expence.component'
import { allExpencess } from './data'
import { ApiServiceService } from '../../api-service.service';
import { endPoints } from '../../globalConstant'
import { Endpoint } from 'aws-sdk/global';


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
  constructor(public dialog: MatDialog,
    private apiService: ApiServiceService,
    private toastMessage: ToastrManager

  ) { }

  ngOnInit() {
    this.getAllExpencess()
    this.getIndividualExpencess()
  }
  openDialog(item) {
    const dialogRef = this.dialog.open(UpdateExpenceComponent, {
      data: item,
      height: 'auto',
      width: '500px'

    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllExpencess()
      this.getIndividualExpencess()
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

  getAllExpencess = () => {
    this.apiService.callApi(endPoints.getAllExpencess, {
      method: "GET"
    }).subscribe(res => {
      this.data = res.json().allExpencess
      this.total = this.totalAllExpencess(this.data)
    }, err => {
      console.log(err)
    })
  }

  getIndividualExpencess = () => {
    this.apiService.callApi(endPoints.getindividualExpences, {
      method: "GET",
      params: {
        user_id: this.apiService.getDataFromLocal('user')._id
      }
    }).subscribe(res => {
      this.indData = res.json().expencess
      this.indTotal = this.individualExpencess(this.indData) 
    }, err => {
      console.log(err)
    })
  }

  deleteExpence = (expence) => {
    this.apiService.callApi(endPoints.deleteExpences, {
      method: "POST",
      data: { id: expence._id }
    }).subscribe(res => {
      if (res.status === 200) {
        this.toastMessage.successToastr("expencess deleted successfully")
        this.getAllExpencess()
        this.getIndividualExpencess()
      }
    }, err => {
      this.toastMessage.errorToastr(`${err}`)
    })

  }


}
