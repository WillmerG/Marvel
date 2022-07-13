import { CFilterComics } from './../../../../class/FilterComics';
import { IComicResult } from './../../../../interfaces/comics.interface';
import { ComicsService } from './../../../../services/comics.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICharacterResult } from '../../../../interfaces/characters.interface';
import { CharactersService } from './../../../../services/characters.service';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.scss']
})
export class CharactersDetailsComponent implements OnInit {

  characterResult: ICharacterResult[] = [];
  comicResult: IComicResult[] = [];
  filterComics = new CFilterComics();

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private charactersService: CharactersService,
    private comicsService: ComicsService
  ) { }

  ngOnInit(): void {
    const id = +this.activeRoute.snapshot.params['id'];
    this.filterComics.idCharacter = id;
    this.filterComics.title = '';
    this.filterComics.limit = 4;

    this.charactersService.getCharacters('', id).subscribe(data => {
      this.characterResult.push(... data);
    });

    this.comicsService.setClearLoading();
    this.comicsService.getComics(this.filterComics).subscribe(data => {
      console.log(data);

      this.comicResult.push(... data);
    });
  }

  onHome(): void {
    this.router.navigate(['/Character']);
  }
}
