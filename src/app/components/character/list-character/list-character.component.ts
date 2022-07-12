import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICharacterResult } from '../../../interfaces/characters.interface';

@Component({
  selector: 'app-list-character',
  templateUrl: './list-character.component.html',
  styleUrls: ['./list-character.component.scss']
})
export class ListCharacterComponent implements OnInit {

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
