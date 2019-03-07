import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import * as moment from 'moment'
import { ToastrManager } from 'ng6-toastr-notifications';
import { ApiServiceService } from '../../api-service.service';
import { endPoints } from '../../globalConstant'

@Component({
  selector: 'app-update-expence',
  templateUrl: './update-expence.component.html',
  styleUrls: ['./update-expence.component.css']
})
export class UpdateExpenceComponent implements OnInit {
  expenceEditForm: FormGroup
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public toastMessage: ToastrManager,
    private apiService: ApiServiceService,
    public dialogRef: MatDialogRef<UpdateExpenceComponent>

  ) { }

  ngOnInit() {
    this.expenceEditForm = this.fb.group({
      name: [null],
      item: [null],
      price: [null],
      date: [moment().format('YYYY-MM-DD')]
    })

    if (this.data !== null) {
      this.expenceEditForm.setValue({
        name: this.data.name,
        item: this.data.item,
        price: this.data.price,
        date: moment(this.data.date).format('YYYY-MM-DD')
      })
    }

  }

  updateExpences = (data) => {
    this.apiService.callApi(`${endPoints.updateExpences + "?id=" + this.data._id}`, {
      method: "POST",
      data: this.expenceEditForm.value
    }).subscribe(res => {
      if (res.status === 200) {
        this.toastMessage.successToastr("expence updated successfully")
        this.dialogRef.close()
      }
    }, err => {
      this.toastMessage.errorToastr(`${err}`)
    })
  }




}
