import { Component, Input, OnInit } from '@angular/core';
import { ISeriesResult } from './../../interfaces/series.interface';
import { SeriesService } from '../../services/series.service';


@Component({
  selector: 'app-list-series',
  templateUrl: './list-series.component.html',
  styleUrls: ['./list-series.component.scss']
})
export class ListSeriesComponent implements OnInit {

  seriesResult: ISeriesResult[] = [];

  @Input() idCharacter = 0

  constructor(
    private seriesService: SeriesService
  ) { }

  ngOnInit(): void {
    this.seriesService.setClearLoading();
    this.seriesService.getSeries(this.idCharacter).subscribe(data => {
      this.seriesResult.push(... data);
    });
  }

}
