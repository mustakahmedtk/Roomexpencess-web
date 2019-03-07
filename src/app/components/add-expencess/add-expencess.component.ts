import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import * as moment from 'moment';
import { ApiServiceService } from '../../api-service.service';
import { endPoints } from '../../globalConstant'
import { DISABLED } from '@angular/forms/src/model';


@Component({
  selector: 'app-add-expencess',
  templateUrl: './add-expencess.component.html',
  styleUrls: ['./add-expencess.component.css']
})
export class AddExpencessComponent implements OnInit {
  addExpencessForm: FormGroup;
  user_name: any;
  constructor(private fb: FormBuilder,
    private apiService: ApiServiceService,
    private router: Router,
    public toastr: ToastrManager
  ) { }

  ngOnInit() {
    this.user_name = this.apiService.getDataFromLocal('user').name
    this.addExpencessForm = this.fb.group({
      "item": [null, Validators.required],
      "name": new FormControl({ value: this.user_name, disabled: true }),
      "price": [null, Validators.required],
      "date": [null, Validators.required]
    })
  }

  addExpencess = () => {
    if (this.addExpencessForm.valid) {
      let expences = {
        "item": this.addExpencessForm.value.item,
        "name":this.user_name,
        "price": this.addExpencessForm.value.price,
        "date": moment(this.addExpencessForm.value.date).format("DD/MM/YYYY"),
        "user_id": this.apiService.getDataFromLocal('user')._id
      }
      this.apiService.callApi(endPoints.addExpencess, {
        method: 'POST',
        data: expences
      }).subscribe(res => {
        if (res.status === 200) {
          this.toastr.successToastr("expencess saved successfully")
          this.router.navigate(["/home/dashboard"])

        }
        this.addExpencessForm.reset()
      }, err => {
        console.log(err)
      })

    }
  }


}
