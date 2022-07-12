import { Component, HostListener, OnInit } from '@angular/core';
import { ICharacterResult } from '../../interfaces/characters.interface';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  characterResult: ICharacterResult[] = [];
  nameHero = '';

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if ((pos > max) && (!this.charactersService.getLoading())) {
      this.onRefresh(this.nameHero);
    }
  }

  constructor(
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    this.charactersService.setClearLoading();
    this.onRefresh();
  }

  onRefresh(name: string = ''): void {
    if (this.nameHero !== name) {
      this.characterResult = [];
      this.charactersService.setClearLoading();
      this.nameHero = name;
    }

    this.charactersService.getCharacters(name).subscribe(data => {
      this.characterResult.push(... data);
    });
  }
}
