import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICharacterResult } from '../../../interfaces/characters.interface';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss']
})
export class CardCharacterComponent implements OnInit {

  @Input() character: ICharacterResult[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onClickDetails(id: number): void {
    this.router.navigate(['/Character', id]);
  }
}
