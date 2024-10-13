import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfdocumentComponent } from './pdfdocument/pdfdocument.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ImageprocessingComponent } from './imageprocessing/imageprocessing.component';
import { TextprocessingComponent } from './textprocessing/textprocessing.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path:'summarize', component : PdfdocumentComponent},
  {path:'home' , component : HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'image',component:ImageprocessingComponent},
  {path:'text',component:TextprocessingComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
