import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ApiServiceService } from '../../api-service.service';
import { endPoints } from '../../globalConstant'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  image = "../../assets/images/viewlogo.png"
  registrationForm: FormGroup;
  submitted = false;
  registrationSuccess = false;
  userRegistrationFormObj = {};
  constructor(private fb: FormBuilder,
    private apiServiceService: ApiServiceService,
    private router: Router,
    public toastMessage:ToastrManager
  ) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      mobile_no: [null, Validators.required],
      password: [null, Validators.required],
      confirm_password: [null, Validators.required]
    })

  }

  register = () => {
    if (this.registrationForm.valid) {
      this.userRegistrationFormObj = {
        "name": this.registrationForm.value.name,
        "email": this.registrationForm.value.email,
        "password": this.registrationForm.value.password,
        "mobile_no": this.registrationForm.value.mobile_no,
        "role": "admin"
      }
      this.submitted = true;
      this.apiServiceService.callApi(
        endPoints.signUp,
        {
          method: 'POST',
          data: this.userRegistrationFormObj
        }).subscribe((response) => {
          if (response.status === 200) {
            this.toastMessage.successToastr("user registered successfully ")
             this.router.navigate(['login'])
          }
        })

    }
  }


} 
