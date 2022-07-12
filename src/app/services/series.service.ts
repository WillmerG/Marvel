import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ISeries, ISeriesResult } from '../interfaces/series.interface';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private loading = false;
  private page = 0;

  constructor(
    private http: HttpClient
  ) { }

  getSeries(idCharacter: number): Observable<ISeriesResult[]>{
    if (this.loading) {
      return of([]);
    }

    const URLCharacter = `series?characters=${idCharacter}&limit=20&offset=${this.page}&${environment.key}`;
    this.loading = true;

    return this.http.get<ISeries>(environment.URLMarvel + URLCharacter).pipe(
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
