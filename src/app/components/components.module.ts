import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { CardCharacterComponent } from './card-character/card-character.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    CardCharacterComponent,
    HomeComponent
  ],
  exports: [
    CardCharacterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ComponentsModule { }
