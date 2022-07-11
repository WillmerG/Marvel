import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { CardCharacterComponent } from './card-character/card-character.component';
import { HomeComponent } from './home/home.component';
import { ErrorInterceptor } from '../error/error.interceptor';
import { ImgSuperPipe } from '../pipes/img-super.pipe';
import { HeaderComponent } from './header/header.component';
import { CharactersDetailsComponent } from './characters-details/characters-details.component';
import { DescripPipe } from '../pipes/descrip.pipe';



@NgModule({
  declarations: [
    CardCharacterComponent,
    HomeComponent,
    ImgSuperPipe,
    HeaderComponent,
    CharactersDetailsComponent,
    DescripPipe
  ],
  exports: [
    CardCharacterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ]
})
export class ComponentsModule { }
