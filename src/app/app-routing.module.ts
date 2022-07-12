import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersDetailsComponent } from './components/character/card-character/characters-details/characters-details.component';
import { CharacterComponent } from './components/character/character.component';

const routes: Routes = [
  { path: '', component: CharacterComponent },
  { path: 'Character/:id', component: CharactersDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
