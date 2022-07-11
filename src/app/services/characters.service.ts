import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { ICharacter, ICharacterResult } from '../interfaces/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private loading = false;
  private page = 0;

  constructor(
    private http: HttpClient
  ) { }

  getCharacters(nameSuperHero: string = '', id: number = 0): Observable<ICharacterResult[]>{
    if (this.loading) {
      return of([]);
    }

    this.loading = true;
    let URLCharacter = `characters?limit=20&orderBy=name&offset=${this.page}&${environment.key}` +
      `${nameSuperHero.trim() !== '' ? '&nameStartsWith=' + nameSuperHero : ''}`;

    if (id > 0) {
      URLCharacter = `characters/${id}?${environment.key}`;
    }

    return this.http.get<ICharacter>(environment.URLMarvel + URLCharacter).pipe(
      map(result => result.data.results),
      tap(() => {
        this.page += 20;
        this.loading = false;
      }),
      catchError(() => of([]))
    )
  }

  setClearLoading() : void {
    this.page = 0;
    this.loading = false;
  }

  getLoading(): boolean {
    return this.loading;
  }
}
