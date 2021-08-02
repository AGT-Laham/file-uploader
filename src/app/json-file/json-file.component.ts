import { Component, OnInit } from '@angular/core';
import { SendFileService } from '../service/send-file.service';

@Component({
  selector: 'app-json-file',
  templateUrl: './json-file.component.html',
  styleUrls: ['./json-file.component.scss']
})
export class JsonFileComponent implements OnInit {
  jsonText = "";
  validJSON = false;

  constructor(private sendFileService: SendFileService) { }

  ngOnInit(): void {
  }

  onJsonChange(){
    try {
      JSON.parse(this.jsonText);
    } catch (error) {
      this.validJSON = false;
    }
    this.validJSON = true;
  }
  sendJsonFile(){
    console.log(this.jsonText);
    this.sendFileService.sendUploadedFile(JSON.parse(this.jsonText))
    .subscribe(
      res => console.log("file uploaded" + res)
    )
  }

}
