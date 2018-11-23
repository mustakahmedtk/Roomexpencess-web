import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import * as moment from 'moment'

@Component({
  selector: 'app-update-expence',
  templateUrl: './update-expence.component.html',
  styleUrls: ['./update-expence.component.css']
})
export class UpdateExpenceComponent implements OnInit {
  expenceEditForm: FormGroup
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder

  ) { }

  ngOnInit() {
    this.expenceEditForm = this.fb.group({
      user_name: [null],
      item: [null],
      price: [null],
      date: [moment().format('YYYY-MM-DD')]
    })

    if (this.data !== null) {
      this.expenceEditForm.setValue({
        user_name: this.data.user_name,
        item: this.data.item,
        price: this.data.price,
        date: moment(this.data.date).format('YYYY-MM-DD')
      })
    }

  }




}
