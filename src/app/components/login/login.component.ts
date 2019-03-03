import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { ApiServiceService } from '../../api-service.service';
import { apiConstant, endPoints } from '../../globalConstant'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  image = "../../assets/images/viewlogo.png"
  loginForm: FormGroup
  submitted: boolean;
  loginErrorMessage: String
  constructor(
    private fb: FormBuilder,
    private http: Http,
    private router: Router,
    private apiServiceService: ApiServiceService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  login = () => {
    console.log(this.loginForm.value)
    if (this.loginForm.valid) {
      this.submitted = true
      this.http.post(
        `${apiConstant.apiCommonUrl + endPoints.getToken}`,
        this.loginForm.value
      ).subscribe((res) => {
        this.apiServiceService.storeDataToLocal("token", res.json().token)
        this.http.get(`${apiConstant.apiCommonUrl + endPoints.getMe}`,
          this.apiServiceService.getHeaders(null)
        ).subscribe((user) => {
          this.apiServiceService.storeDataToLocal("user", user.json())
          this.router.navigateByUrl("home")
        })
      }, (err) => {
        if (err.status === 401) {
          this.loginErrorMessage = "Invalid Credientials"
        }
      })
    }
  }

}
