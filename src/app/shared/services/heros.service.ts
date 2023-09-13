import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Hero} from '../model/hero';
import {Uris} from '../Uris';

@Injectable({
  providedIn: 'root'
})
export class HerosService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Hero[]> {
    return this.http.get<Hero[]>(Uris.ALL);
  }

  getById(id: number): Observable<Hero> {
    return this.http.get<Hero>(Uris.ID.replace('{id}', String(id)));
  }
}
