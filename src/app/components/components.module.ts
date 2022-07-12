import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { CardCharacterComponent } from './character/card-character/card-character.component';
import { ErrorInterceptor } from '../error/error.interceptor';
import { ImgSuperPipe } from '../pipes/img-super.pipe';
import { CharactersDetailsComponent } from './character/card-character/characters-details/characters-details.component';
import { DescripPipe } from '../pipes/descrip.pipe';
import { ListComicsComponent } from './list-comics/list-comics.component';
import { CreatorPipe } from '../pipes/creator.pipe';
import { ListSeriesComponent } from './list-series/list-series.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CharacterComponent } from './character/character.component';
import { NavBarCharacterComponent } from './character/nav-bar-character/nav-bar-character.component';



@NgModule({
  declarations: [
    CardCharacterComponent,
    CharacterComponent,
    ImgSuperPipe,
    NavBarCharacterComponent,
    CharactersDetailsComponent,
    DescripPipe,
    ListComicsComponent,
    CreatorPipe,
    ListSeriesComponent,
    SpinnerComponent
  ],
  exports: [
    CharacterComponent
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
