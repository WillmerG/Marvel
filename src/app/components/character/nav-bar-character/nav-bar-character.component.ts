import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar-character',
  templateUrl: './nav-bar-character.component.html',
  styleUrls: ['./nav-bar-character.component.scss']
})
export class NavBarCharacterComponent implements OnInit {

  letters: string[] = [];
  nameHero = '';

  @Output() SearchLetter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i <= 25; i++) {
      this.letters.push(String.fromCharCode(65 + i));
    }
  }

  onSearch(letter: string): void {
    document.querySelectorAll('app-nav-bar-character > nav > ul > li > a').forEach(val => {
      if ('id_letter_'+letter === val.id) {
        if (val.classList.toString().indexOf('bg-gray-600') === -1) {
          val.classList.add('bg-gray-600');
        }
      } else {
        val.classList.remove('bg-gray-600');
      }
    });

    this.SearchLetter.emit(letter);
  }
}
