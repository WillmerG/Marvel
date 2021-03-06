import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CFilterComics } from '../class/FilterComics';
import { IComic, IComicResult } from '../interfaces/comics.interface';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  private loading = false;
  private page = 0;

  constructor(
    private http: HttpClient
  ) { }

  getComics(filterComics: CFilterComics): Observable<IComicResult[]>{
    if (this.loading) {
      return of([]);
    }

    const URLCharacter = `comics?${filterComics.idCharacter > 0 ? 'characters='+filterComics.idCharacter+'&' : ''}`+
      `${filterComics.title.length > 0 ? 'titleStartsWith='+filterComics.title+'&' : ''}` +
      `orderBy=${filterComics.orderTitle ? '-' : '' }title&` +
      `limit=${filterComics.limit}&offset=${this.page}&${environment.key}`;

    this.loading = true;

    return this.http.get<IComic>(environment.URLMarvel + URLCharacter).pipe(
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
