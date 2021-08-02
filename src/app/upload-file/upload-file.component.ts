import { Component, OnInit } from '@angular/core';
import { SendFileService } from '../service/send-file.service';

declare const $: any;

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  file: any;
  fileName = "No file chosen"
  constructor(private sendFileServidce: SendFileService) { }

  ngOnInit(): void {
  }
  fileUpload(){
    $('#file').trigger('click');
  }
  onFileChange(event: any){
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      this.file = event.target.files[0];
      this.fileName = this.file.name;
    }
    $('#btnSend').css('display', 'block');

  }
  sendFile(){
    this.sendFileServidce.sendUploadedFile(this.file)
    .subscribe(
      res => console.log("file uploaded" + res)
    )
  }

}
