import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendFileService {
  urlUploadFile = "https://khouloud-ingress.herokuapp.com/data/file-upload";
  urlJsonFile = "https://khouloud-ingress.herokuapp.com/data/push";

  constructor(private http: HttpClient) { }
  uploadFileHttpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*'
    })
  }
  jsonFileHttpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }
  
  sendUploadedFile(file: any): Observable<any>{
    var fd = new FormData();
    fd = file;
    return this.http.post(this.urlUploadFile, fd , this.uploadFileHttpHeader);
  }
  sendJsonFile(jsonFile: any):Observable<any>{
    
    return this.http.post(this.urlJsonFile, jsonFile , this.jsonFileHttpHeader);

  }
}
