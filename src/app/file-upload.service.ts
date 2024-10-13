import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  
 

  private apiUrl = ' https://genai-app-534738955739.us-central1.run.app';

  constructor(private http:HttpClient) { }

  uploadPdfFile(file:File): Observable<String>{
    const formData = new FormData();
    formData.append('file',file);
    return this.http.post(this.apiUrl+`/api/documents/summarize`,formData,{
      responseType:'text'
    }).pipe(
      catchError(this.handleError)
    );
  }
  uploadImageFile(selectedFile: File,question:string):Observable<String> {
    const formData = new FormData();
    formData.append('file',selectedFile);
    formData.append('question',question);
    return this.http.post(this.apiUrl+`/api/documents/image`,formData,{
      responseType:'text'
    }).pipe(
      catchError(this.handleError)
    );
  }



  private handleError(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('Client Side error: ',error.error.message);
    }
    else{
      console.error(`Backend error: ${error.status},`+`Message: ${error.error}`);
    }
    return throwError('An error occured while uploading file. Please try again');
  }

}
