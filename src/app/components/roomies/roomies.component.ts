import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddroomieComponent } from '../../modelPopups/addroomie/addroomie.component'
import { allRoomies }  from './roomiesData'

@Component({
  selector: 'app-roomies',
  templateUrl: './roomies.component.html',
  styleUrls: ['./roomies.component.css']
})
export class RoomiesComponent implements OnInit {
  roomies:any=[]
  constructor( public dialog: MatDialog) { }

  ngOnInit() {
    this.roomies=allRoomies
  }

  openAddRoomieDialog=()=>{
    this.dialog.open(AddroomieComponent,{
      height:'auto',
      width:'500px'
    })
  }

}
