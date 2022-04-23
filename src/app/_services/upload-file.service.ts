import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
 
  constructor(private http: HttpClient) { }
 responseData:any;
  pushFileToStorageWithData(formdata): Observable<HttpEvent<{}>> {
    console.log("Called pushFileToStorageWithData fun() >>>>>>.")
   
    
    // const config = new HttpHeaders().set('Content-Type', 'multipart/form-data; boundary=something')
    // .set('Accept', 'multipart/form-data; boundary=something')
 
    const req = new HttpRequest('POST', 'https://eden-dev.guseden.com:8092/content/add-content', formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    // const req = new HttpRequest('POST', 'https://eden-dev.guseden.com:8093/content/add', formdata, { headers: config });
    
 
    return this.http.request(req);
  }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {

    console.log("Called pushFileToStorage fun() >>>>>>.")
    console.log(file)
    const formdata: FormData = new FormData();
 
    console.log(sessionStorage.getItem('userId'))
    formdata.append('file', file);
    formdata.append('userId', sessionStorage.getItem('userId'))
    // formdata.append('heading', "Content Heading")
    // formdata.append('desc', "Content Description ....")
    // const config = new HttpHeaders().set('Content-Type', 'multipart/form-data; boundary=something')
    // .set('Accept', 'multipart/form-data; boundary=something')
 
    const req = new HttpRequest('POST', 'https://eden-dev.guseden.com:8092/content/add', formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    // const req = new HttpRequest('POST', 'https://eden-dev.guseden.com:8093/content/add', formdata, { headers: config });
    
 
    return this.http.request(req);
  }
 
  getFiles(): Observable<any> {
    return this.http.get('https://eden-dev.guseden.com:8092/api/file/all');
  }
}