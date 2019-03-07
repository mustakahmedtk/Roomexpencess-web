import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { MatDialog } from '@angular/material';
import { UserprofileComponent } from '../../modelPopups/userprofile/userprofile.component'
import { ChangepasswordComponent } from '../../modelPopups/changepassword/changepassword.component'
import { ApiServiceService } from '../../api-service.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  image = "../../assets/images/viewlogo.png"
  url_name: any;
  userName: String;
  isAdmin:boolean;
  userData:any
  constructor(private router: Router,
    public dialog: MatDialog,
    private apiService: ApiServiceService
  ) {

  }

  ngOnInit() {
    this.url_name = this.router.url
    this.userData=this.apiService.getDataFromLocal('user')
    this.userName = this.userData.name
    this.isAdmin=this.userData.role==="admin"?true:false
  }

  urlChange = (event) => {
    this.url_name = event.target.pathname
  }
  openUserProfileDialog() {
    this.dialog.open(UserprofileComponent, {
      height: 'auto',
      width: '500px',
      data:this.userData
    });
  }

  openChangePasswordDialog() {
    this.dialog.open(ChangepasswordComponent, {
      height: 'auto',
      width: '500px'
    });
  }

  logout() {
    localStorage.clear()
    this.router.navigateByUrl("login")
  }

}
