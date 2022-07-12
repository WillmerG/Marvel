import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CFilterComics } from './../../class/FilterComics';
import { ComicsService } from './../../services/comics.service';
import { IComicResult } from './../../interfaces/comics.interface';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {


  comicResult: IComicResult[] = [];
  auxFilter = new CFilterComics();
  titleComic = '';

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if ((pos > max) && (!this.comicsService.getLoading())) {
      this.onRefresh(this.auxFilter);
    }
  }

  constructor(
    private activeRoute: ActivatedRoute,
    private comicsService: ComicsService
  ) { }

  ngOnInit(): void {
    this.auxFilter.idCharacter = +this.activeRoute.snapshot.params['idCharacter'] || 0;

    this.comicsService.setClearLoading();
    this.onRefresh(this.auxFilter);
  }

  onRefresh(filter: CFilterComics): void {
    if (this.auxFilter.title !== filter.title) {
      this.comicResult = [];
      this.comicsService.setClearLoading();
      this.auxFilter = filter;
    }

    this.comicsService.getComics(this.auxFilter.idCharacter, this.auxFilter.title).subscribe(data => {
      this.comicResult.push(... data);
    });
  }
}
