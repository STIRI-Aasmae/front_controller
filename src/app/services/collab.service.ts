import { Injectable } from '@angular/core';
import { Collab} from '../models/collab.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:5000/collab'
@Injectable({
  providedIn: 'root'
})
export class CollabService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Collab[]> {
    return this.http.get<Collab[]>(baseUrl);
  }

  get(id: any): Observable<Collab> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
}
