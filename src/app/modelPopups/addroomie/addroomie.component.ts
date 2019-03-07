import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatDialogRef }   from '@angular/material'
import { ToastrManager } from 'ng6-toastr-notifications';
import { ApiServiceService } from '../../api-service.service';
import { endPoints } from '../../globalConstant'

@Component({
  selector: 'app-addroomie',
  templateUrl: './addroomie.component.html',
  styleUrls: ['./addroomie.component.css']
})
export class AddroomieComponent implements OnInit {
  addRoomieForm:FormGroup;

  constructor(private fb:FormBuilder,
    public dialogRef: MatDialogRef<AddroomieComponent>,
    private apiService:ApiServiceService,
    public toastMessage:ToastrManager
  
  ) { }

  ngOnInit() {
    this.addRoomieForm=this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      mobile_no: [null, Validators.required],
      role:[null,Validators.required],
      password: [null, Validators.required],
      confirm_password: [null, Validators.required]
    })
  }

  addRoomie=(data)=>{
    if(this.addRoomieForm.valid){
      this.addRoomieForm.value.room_id=this.apiService.getDataFromLocal('user')._id
      this.apiService.callApi(
        endPoints.saveRoomies,
        {method:'POST',
        data:this.addRoomieForm.value
      }).subscribe(res=>{
        console.log(res.json())
        this.toastMessage.successToastr("new roomie created successfully")
        this.dialogRef.close();
      },err=>{
        this.toastMessage.errorToastr(`${err}`)
      })
    }
    console.log(data)
  //  
  }

}
