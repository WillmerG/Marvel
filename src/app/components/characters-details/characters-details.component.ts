import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacterResult } from './../../interfaces/characters.interface';
import { CharactersService } from './../../services/characters.service';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.scss']
})
export class CharactersDetailsComponent implements OnInit {

  characterResult: ICharacterResult[] = [];

  constructor(
    private charactersService: CharactersService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.activeRoute.snapshot.params['id'];

    this.charactersService.getCharacters('', id).subscribe(data => {
      this.characterResult.push(... data);
      console.log(this.characterResult);
    });
  }

}
