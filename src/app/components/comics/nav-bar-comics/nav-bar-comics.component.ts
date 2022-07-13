import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CFilterComics } from './../../../class/FilterComics';

@Component({
  selector: 'app-nav-bar-comics',
  templateUrl: './nav-bar-comics.component.html',
  styleUrls: ['./nav-bar-comics.component.scss']
})
export class NavBarComicsComponent implements OnInit {

  filterComics = new CFilterComics();

  @Output() SearchComics = new EventEmitter<CFilterComics>();

  constructor(
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  onOrderTitle(): void {
    this.filterComics.orderTitle = !this.filterComics.orderTitle;
    this.onSearch();
  }

  onSearch(): void {
    this.filterComics.idCharacter = +this.activeRoute.snapshot.params['idCharacter'] || 0;
    this.SearchComics.emit(this.filterComics);
  }
}
