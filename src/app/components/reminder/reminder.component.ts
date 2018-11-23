import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../upload.service'

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {
  file: any;
  constructor(private uploadService: UploadService) { }

  ngOnInit() {
  }

  selectFile = (e) => {
    this.file = e.target.files[0]
  }

  uploadFile = () => {
    this.uploadService.uploadfile(this.file)
  }


}
