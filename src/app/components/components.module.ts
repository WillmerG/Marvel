import { CharactersDetailsComponent } from './character/list-character/characters-details/characters-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { ErrorInterceptor } from '../error/error.interceptor';
import { DescripPipe } from '../pipes/descrip.pipe';
import { ListComicsComponent } from './comics/list-comics/list-comics.component';
import { CreatorPipe } from '../pipes/creator.pipe';
import { ListSeriesComponent } from './shared/list-series/list-series.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { CharacterComponent } from './character/character.component';
import { NavBarCharacterComponent } from './character/nav-bar-character/nav-bar-character.component';
import { HeaderComponent } from './header/header.component';
import { ComicsComponent } from './comics/comics.component';
import { ListCharacterComponent } from './character/list-character/list-character.component';
import { ImgSuperPipe } from '../pipes/img-super.pipe';
import { NavBarComicsComponent } from './comics/nav-bar-comics/nav-bar-comics.component';



@NgModule({
  declarations: [
    ImgSuperPipe,
    DescripPipe,
    CreatorPipe,
    CharacterComponent,
    CharactersDetailsComponent,
    NavBarCharacterComponent,
    ListCharacterComponent,
    ListComicsComponent,
    ListSeriesComponent,
    SpinnerComponent,
    HeaderComponent,
    ComicsComponent,
    NavBarComicsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
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
