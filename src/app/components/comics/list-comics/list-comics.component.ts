import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IComicResult } from '../../../interfaces/comics.interface';

@Component({
  selector: 'app-list-comics',
  templateUrl: './list-comics.component.html',
  styleUrls: ['./list-comics.component.scss']
})
export class ListComicsComponent implements OnInit {

  @Input() idCharacter = 0;
  @Input() comics : IComicResult[] = [];
  @Input() descripVisible = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void { }

  onAll(): void {
    this.router.navigate(['/Comics', this.idCharacter]);
  }
}
