import { Component, OnInit, Input } from '@angular/core';
 
@Component({
//   selector: 'details-upload',
  templateUrl: './list-upload.component.html',
//   styleUrls: ['./details-upload.component.css']
})
export class DetailsUploadComponent implements OnInit {
 
  @Input() fileUpload: string;
  showFile;
  constructor() { }
 
  ngOnInit() {
  }
 
}