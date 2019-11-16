import { Component, OnInit } from '@angular/core';
import { NosqlService } from '../nosql.service';

@Component({
  selector: 'app-nosql',
  templateUrl: './nosql.component.html',
  styleUrls: ['./nosql.component.css']
})
export class NosqlComponent implements OnInit {

  totalArtist = 44746;
  TotalSongs = 1000000;

  ArtistPerCountry$ = this.nosqlService.getArtistsPerCountry();
  songPerCountry$ = this.nosqlService.getSongsPerCountry();
  songPerYear$ = this.nosqlService.getSongsPerYear();

  constructor(private nosqlService: NosqlService) { }

  ngOnInit() {
  }

  name(data: any): Array<string> {
    return data.map((e) => e.info.name);
  }

  percentArtists(data: any): Array<number> {
    return data.map((e) => ((e / 44746) * 100).toFixed(2));
  }
  percentSongs(data: any): Array<number> {
    return data.map((e) => ((e / 1000000) * 100).toFixed(2));
  }

}
