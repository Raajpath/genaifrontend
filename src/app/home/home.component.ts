import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Summarize(){
    this.router.navigate(['summarize']);
  }
  GoToImageProcessing(){
    this.router.navigate(['image']);
  }
  GoToTextProcessing(){
    this.router.navigate(['text']);
  }
  RegisterCompany(){
    this.router.navigate(['register']);
  }
  listAll(){
    this.router.navigate(['listall']);
  }

  findStockDetails(){
    this.router.navigate(['findstock']);
  }

  GoToPdfComponent(){
    this.router.navigate(['summarize']);
  }  

  GoToGetAllComponent(){
    this.router.navigate(['listall']);
  }

  GoToAddStock(){
    this.router.navigate(['addstock']);
  }



}
