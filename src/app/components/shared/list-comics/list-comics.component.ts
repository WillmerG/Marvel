import { Component, Input, OnInit } from '@angular/core';
import { IComicResult } from './../../../interfaces/comics.interface';
import { ComicsService } from './../../../services/comics.service';

@Component({
  selector: 'app-list-comics',
  templateUrl: './list-comics.component.html',
  styleUrls: ['./list-comics.component.scss']
})
export class ListComicsComponent implements OnInit {

  comicResult: IComicResult[] = [];

  @Input() idCharacter = 0;

  constructor(
    private comicsService: ComicsService
  ) { }

  ngOnInit(): void {
    this.comicsService.setClearLoading();
    this.comicsService.getComics(this.idCharacter).subscribe(data => {
      this.comicResult.push(... data);
    });
  }
}
