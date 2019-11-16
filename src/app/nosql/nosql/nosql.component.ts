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

  data = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [6, 55, 15, 65, 57, 35, 97], label: 'Series A' },
  ];
  Label = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  ArtistPerCountry$ = this.nosqlService.getArtistsPerCountry();
  songPerCountry$ = this.nosqlService.getSongsPerCountry();
  songPerYear$ = this.nosqlService.getSongsPerYear();
  countriesPerYear$ = this.nosqlService.getCountriesPerYear();
  top50$ = this.nosqlService.getTop50();

  constructor(private nosqlService: NosqlService) { }

  ngOnInit() {
  }

  name(data: any): Array<string> {
    let retorno = data.slice(1, 6);
    retorno = retorno.map((e) => e.info.name);
    retorno.push('Outros');
    return retorno;
  }

  percentArtists(data: any): Array<number> {
    const desconhecidas = data[0];
    const retorno = data.slice(1, 6).map((e) => +((e / (this.totalArtist - desconhecidas)) * 100).toFixed(2));
    retorno.push(+(100 - retorno.reduce((a, b) => a + b, 0)).toFixed(2));
    return retorno;
  }
  percentSongs(data: any): Array<number> {
    const desconhecidas = data[0];
    const retorno = data.slice(1, 6).map((e) => +((e / (this.TotalSongs - desconhecidas)) * 100).toFixed(2));
    retorno.push(+(100 - retorno.reduce((a, b) => a + b, 0)).toFixed(2));
    return retorno;
  }

  songsPerYear(data: any) {
    return [{
      data: data.slice(1, -1),
      label: 'Músicas'
    }];
  }


}
