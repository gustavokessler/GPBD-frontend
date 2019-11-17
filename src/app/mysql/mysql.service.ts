import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export const urlmysql = 'https://t1pgbd4.localtunnel.me/mysql/';

@Injectable({
  providedIn: 'root'
})
export class MysqlService {

  constructor(
    private http: HttpClient
  ) { }

  getArtistsPerCountry(): Observable<any> {
    return this.http.get<any>(urlmysql + 'artistspercountry', {});
  }

  getSongsPerCountry(): Observable<any> {
    return this.http.get<any>(urlmysql + 'songspercountry', {});
  }

  getSongsPerYear(): Observable<any> {
    return this.http.get<any>(urlmysql + 'tracksperyear', {});
  }
  getCountriesPerYear(): Observable<any> {
    return this.http.get<any>('https://t1pgbd4.localtunnel.me/mysql/countriesperyear', {});
  }

  getTop50(): Observable<any> {
    return this.http.get<any>(urlmysql + 'top50artists', {});
  }


}

