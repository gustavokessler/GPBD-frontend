import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

export interface PerCountry {
  country: Array<string>;
  flag: Array<string>;
  count: Array<number>;
}

export interface Response<T> {
  data: T;
  time: string;
}

export const A = {
  data: {
    year: [1021, 2002, 2003, 2004, 1998, 1972, 2002, 2003, 2004, 1998, 1972],
    count: [0, 31254, 6546, 3154, 9878, 5248, 2002, 2003, 2004, 1998, 1972],
  },
  time: '152'
};



export const urlmongo = 'https://t1pgbd2.localtunnel.me/mongo/';

@Injectable({
  providedIn: 'root'
})
export class NosqlService {

  constructor(
    private http: HttpClient
  ) { }

  getArtistsPerCountry(): Observable<any> {
    return this.http.get<any>(urlmongo + 'artistspercountry', {});
  }

  getSongsPerCountry(): Observable<any> {
    return this.http.get<any>(urlmongo + 'songspercountry', {});
  }

  getSongsPerYear(): Observable<any> {
    return this.http.get<any>(urlmongo + 'tracksperyear', {});
  }


}

