import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CFilterComics } from './../../../class/FilterComics';

@Component({
  selector: 'app-nav-bar-comics',
  templateUrl: './nav-bar-comics.component.html',
  styleUrls: ['./nav-bar-comics.component.scss']
})
export class NavBarComicsComponent implements OnInit {

  filterComics = new CFilterComics();

  @Output() SearchComics = new EventEmitter<CFilterComics>();

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(): void {
    this.SearchComics.emit(this.filterComics);
  }
}
