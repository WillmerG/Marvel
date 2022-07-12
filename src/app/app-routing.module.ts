import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './components/character/character.component';
import { CharactersDetailsComponent } from './components/character/list-character/characters-details/characters-details.component';
import { ComicsComponent } from './components/comics/comics.component';

const routes: Routes = [
  { path: 'Character', component: CharacterComponent },
  { path: 'Character/:id', component: CharactersDetailsComponent },
  { path: 'Comics', component: ComicsComponent },
  { path: '**', redirectTo: '/Character' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
