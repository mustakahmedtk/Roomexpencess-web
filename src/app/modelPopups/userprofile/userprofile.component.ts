import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import * as moment from 'moment'
import { ToastrManager } from 'ng6-toastr-notifications';
import { ApiServiceService } from '../../api-service.service';
import { endPoints } from '../../globalConstant'

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  userProfileForm: FormGroup
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private toastMessage: ToastrManager,
    private apiService: ApiServiceService
  ) { }

  ngOnInit() {
    this.userProfileForm = this.fb.group({
      "name": [null],
      "email": [null],
      "mobile_no": [null],
      "role":new FormControl({value: '', disabled: true})
    })
    this.userProfileForm.setValue({
      name: this.data.name,
      email: this.data.email,
      mobile_no: this.data.mobile_no,
      role: this.data.role
    })
  }

}
