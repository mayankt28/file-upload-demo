import { DummyServiceService } from './../dummy-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy-comp',
  templateUrl: './dummy-comp.component.html',
  styleUrls: ['./dummy-comp.component.css']
})
export class DummyCompComponent implements OnInit {

  constructor(private serve: DummyServiceService) { }
  fileToUpload: File = null;

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    this.serve.postFile(this.fileToUpload);
  }

}
