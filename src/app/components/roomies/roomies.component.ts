import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AddroomieComponent } from '../../modelPopups/addroomie/addroomie.component'
import { allRoomies } from './roomiesData'
import { ApiServiceService } from '../../api-service.service';
import { endPoints } from '../../globalConstant'

@Component({
  selector: 'app-roomies',
  templateUrl: './roomies.component.html',
  styleUrls: ['./roomies.component.css']
})
export class RoomiesComponent implements OnInit {
  roomies: any = []
  constructor(public dialog: MatDialog,
    public apiService: ApiServiceService,
    public toastMessage: ToastrManager
  ) { }

  ngOnInit() {
    this.getAllRoomies()
  }

  openAddRoomieDialog = () => {
    const dialogueRef = this.dialog.open(AddroomieComponent, {
      height: 'auto',
      width: '500px'
    })
    dialogueRef.afterClosed().subscribe((res) => {
      this.getAllRoomies()
    })
  }

  getAllRoomies = () => {
    this.apiService.callApi(
      endPoints.getRoomies,
      { params: { user_id: this.apiService.getDataFromLocal('user')._id }, method: "GET" }).subscribe((res) => {
        this.roomies = res.json()
        console.log(res.json());
      })
  }

  removeRoomie = (data) => {
    this.apiService.callApi(endPoints.removeRoomie, {
      method: "POST",
      data: { id: data._id }
    }).subscribe(res => {
      if (res.status === 200) {
        this.apiService.callApi(endPoints.removeUser, {
          method: "POST",
          data: { id: data._id }
        }).subscribe(res => {
          if (res.status === 200) {
            this.toastMessage.successToastr("roomie removed successfully")
            this.getAllRoomies()
          }
        }, err => {
          console.log(err)
        })
      }
    }, err => {
      console.log(err)
    })
  }

}
