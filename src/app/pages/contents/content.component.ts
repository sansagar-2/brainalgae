import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../../_services';
import { UploadFileService } from './../../_services/upload-file.service'
import { User } from '../../_models';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LikeService } from '../../_services/like.service'
import { CommentService } from '../../_services/comment.service'

@Component({
    templateUrl: 'content.component.html',
})
export class ContentComponent implements OnInit {

    currentUser: User;
    childcurrentVal: any;
    selectedFiles: FileList;
    currentFileUpload: File;
    file: any;
    progress: { percentage: number } = { percentage: 0 };
    guest: boolean;
    isGuest:string= sessionStorage.getItem("guest");

    constructor(

        private authenticationService: AuthenticationService,
        private uploadService: UploadFileService,
        private http: HttpClient,
        private likeService: LikeService,
         private commentService: CommentService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    contents: any;

    contenturl: string = "https://eden-dev.guseden.com:8092/content/download-content/"

    ngOnInit() {

        let userId = sessionStorage.getItem('userId')

        this.http.get<any[]>(`https://eden-dev.guseden.com:8092/content/fetchAll/` + userId).subscribe(data => {
            this.contents = data
            console.log(this.contents)
        })


    }

    heading: string;
    desc: string;
    selectedVal: string;
    selectedVal2:string;
    upload() {
        console.log("upload :::: >>>>>>")

        this.progress.percentage = 0;

        this.currentFileUpload = this.file[0];
        const formdata: FormData = new FormData();

        console.log(sessionStorage.getItem('userId'))
        formdata.append('file', this.currentFileUpload);
        formdata.append('userId', sessionStorage.getItem('userId'))
        formdata.append('heading', this.heading)
        formdata.append('desc', this.desc)
        formdata.append('contenttype', this.selectedVal)
        formdata.append('visibility', this.selectedVal2)

        console.log(">>>>>>>> File to be uploaded >>>>>>>>>.")

        this.uploadService.pushFileToStorageWithData(formdata).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                this.progress.percentage = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
                console.log('File is completely uploaded!');
            }
        });

        this.selectedFiles = undefined;
    }
    deleteContents(rowId) {
        var txt;
        var r = confirm("Are you sure, you want to delete content ?");
        if (r == true) {
            txt = "You pressed OK!";
            this.http.delete<any[]>(`https://eden-dev.guseden.com:8092/content/delete/` + rowId).subscribe(data => {
                this.contents = data
                console.log(this.contents)
            })
        } else {
            txt = "You pressed Cancel!";
        }
        console.log(txt);
    }
    likeContent(post) {
        console.log(post)
        console.log(post)

        let input = {
            componentid: post.rowid,
            userid: sessionStorage.getItem('userId')
        }
        this.likeService.likeComponent(input).subscribe(data => {
            console.log(data)
        })
    }
    comment;
    commentContent(post) {
        console.log(post)
        console.log(this.comment)

        let input = {
            componentid: post.rowid,
            userid: sessionStorage.getItem('userId'),
            message: this.comment
        }
        this.commentService.commentComponent(input).subscribe(data => {
            console.log(data)
        })
    }
    checkPublic(d:string):boolean{
        if(d!=null)
        if( d.toUpperCase()=='PUBLIC')
        return true;
        else return false;
    }
    getOutputVal(data) {
        console.log("::::::::::: File  :::::::::::::::::::::::")
        console.log(data)
        this.file = data
    }
}