import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DummyServiceService {

  constructor(private httpClient: HttpClient) { }
  
  postFile(fileToUpload: File) {
    const endpoint = 'http://localhost:8080/profile';
    const formData: FormData = new FormData();
    formData.append('Pic', fileToUpload, fileToUpload.name);
    this.httpClient.post(endpoint, formData).subscribe(res => console.log(res));
}
}
