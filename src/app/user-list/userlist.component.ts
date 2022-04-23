import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from './../_models/post';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProfileService } from './../_services/profile.service';
import { AuthenticationService } from '../_services';
import { User } from './../_models';
import {UtilityService} from './../_utility/utility.service'
import {DetailsUploadComponent} from './../list-upload'
import { HttpResponse, HttpEventType } from '@angular/common/http';
import {UploadFileService} from './../_services/upload-file.service'
import { isYieldExpression } from 'typescript';
@Component({
    selector: 'user-list',
    templateUrl: 'userlist.component.html',

})


export class UserListComponent implements OnInit {

    selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
    currentUser: User;

    @Output() outputToParent = new EventEmitter<any>();

    constructor(
        private router: Router,
        private profileService: ProfileService,
        private authenticationService: AuthenticationService, private http: HttpClient,
        private utilityService: UtilityService,
        private uploadService: UploadFileService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    ngOnInit(){
        // console.log(this.utilityService.getTimeDifference(new Date(new Date().getTime() - 12450909)));
    }
    // getData(ms){
    //     return this.utilityService.getTimeDifference(new Date(ms));
    // }
    // getConvert(data){
    //     return this.utilityService.toLowercase(data)
    // }
   
    getTime(data){
        return this.utilityService.dateConversion(data)
    }
    selectFile(event) {
        this.selectedFiles = event.target.files;
        this.outputToParent.emit(this.selectedFiles)
      }
      responseData:any;
    upload() {

      
      //alert("Reached Upload ...");
      console.log("upload :::: >>>>>>")

        this.progress.percentage = 0;
     
        this.currentFileUpload = this.selectedFiles.item(0);
       // alert(this.currentFileUpload)
        this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress.percentage = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            confirm("Your file is uploaded successfully"? "Upload Success":"Upload Failed");
            console.log('File is completely uploaded!');
           this.responseData= event;
           this.responseData  =event.body;
           sessionStorage.setItem('fileUploadRes',JSON.stringify(event.body));
           console.log((event.body))
          }
        });
     
        this.selectedFiles = undefined;
      }

}