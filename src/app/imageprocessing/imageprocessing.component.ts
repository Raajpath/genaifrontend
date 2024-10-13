import { Component } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imageprocessing',
  templateUrl: './imageprocessing.component.html',
  styleUrl: './imageprocessing.component.css'
})
export class ImageprocessingComponent {
  
  selectedFile: File | null = null;
  summary :string = '';
  errorMessage : string| null = null;
  question:string='';
  imagePreview: string |undefined;
  isLoading:boolean=false;
  imageGiven:boolean=false;
  
  constructor(private fileUploadService:FileUploadService,private router:Router){}
  

  

  onFileSelected(event:any):void{
    this.selectedFile= event.target.files[0];
    if(this.selectedFile){
      const reader = new FileReader();
      reader.onload=() =>{
        this.imagePreview=reader.result as string;
      }
      reader.readAsDataURL(this.selectedFile);
      this.imageGiven=true;
      this.summary='';
      this.errorMessage='';

    }
  }

  onUpload():void{
    if(this.selectedFile && this.question){
      this.isLoading=true;
      this.fileUploadService.uploadImageFile(this.selectedFile,this.question).subscribe(
        (response:any)=>{
          this.summary=response;
          this.errorMessage=null;
          if(this.summary){
            this.isLoading=false;
          }
          console.log(this.summary);
          this.selectedFile=null;
          this.question='';
          //this.selectedFile=null;
        },
        (error)=>{
          this.isLoading=false;
          this.errorMessage=error;
          this.summary='';
          this.selectedFile=null;
        }
      );
    }
    else{
      this.errorMessage='Please select a file and enter quetion before sending'
    }
  }



}
