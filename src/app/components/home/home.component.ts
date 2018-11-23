import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { MatDialog } from '@angular/material';
import { UserprofileComponent} from '../../modelPopups/userprofile/userprofile.component'
import { ChangepasswordComponent } from '../../modelPopups/changepassword/changepassword.component'
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  image = "../../assets/images/viewlogo.png"
  url_name: any;
  constructor(private router: Router,
    public dialog: MatDialog
  ) {

  }

  ngOnInit() {
    this.url_name = this.router.url
  }

  urlChange = (event) => {
    this.url_name = event.target.pathname

  }
  openUserProfileDialog() {
     this.dialog.open(UserprofileComponent,{
      height:'auto',
      width:'500px'
    });
  }

  openChangePasswordDialog(){
     this.dialog.open(ChangepasswordComponent,{
      height:'auto',
      width:'500px'
    });
  }

}
