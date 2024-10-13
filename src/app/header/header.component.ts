import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Summarize(){
    this.router.navigate(['summarize']);
  }

  ImageProcess(){
    this.router.navigate(['image']);
  }

  TextProcessing(){
    this.router.navigate(['text']);
  }
  GoToHome(){
    this.router.navigate(['home']);
  }

}
