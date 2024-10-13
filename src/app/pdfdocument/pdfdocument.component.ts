import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pdfdocument',
  templateUrl: './pdfdocument.component.html',
  styleUrl: './pdfdocument.component.css'
})
export class PdfdocumentComponent {
  
  selectedFile: File | null = null;
  summary :string = '';
  respons: string[] = [] ;
  errorMessage : string| null = null;
  isLoading:boolean=false;
  fileGiven:boolean=false;
  

  constructor(private fileUploadService:FileUploadService,private router:Router){}
  

  

  onFileSelected(event:any):void{
    const file: File = event.target.files[0];
    if(file){
      this.selectedFile=file;
      this.fileGiven=true;
      this.summary='';
      this.errorMessage='';
      this.respons=[];
    }
  }

  onUpload():void{
    this.isLoading=true;
    if(this.selectedFile){
      this.fileUploadService.uploadPdfFile(this.selectedFile).subscribe(
        (response:any)=>{
          if(response){
            this.isLoading=false;
          }
          this.summary=response;
          this.errorMessage=null;
          this.selectedFile=null;
          this.respons= this.summary.split("|",10);
          console.log(this.respons);
        },
        (error)=>{
          this.isLoading=false;
          this.errorMessage=error;
          this.summary='';
        }
      );
    }
    else{
      this.errorMessage='Please select a file before uploading'
    }
  }


}


