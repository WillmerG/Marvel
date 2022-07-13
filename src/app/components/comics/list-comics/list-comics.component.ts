import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  onCharacter(): void {
    if ((this.idCharacter > 0) && (this.descripVisible)) {
      this.router.navigate(['/Character', this.idCharacter]);
    }
  }

  onAll(): void {
    this.router.navigate(['/Comics', this.idCharacter]);
  }
}
