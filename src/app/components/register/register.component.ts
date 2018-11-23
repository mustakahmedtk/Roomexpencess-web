import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  image="../../assets/images/viewlogo.png"
  registrationForm:FormGroup;
  submitted=false;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
          user_name:[null,Validators.required],
          email:[null,Validators.required],
          mobile_no:[null,Validators.required],
          password:[null,Validators.required],
          confirm_password:[null,Validators.required]
     })

  }

 register=()=>{
   this.submitted=true;
     
  }

}
