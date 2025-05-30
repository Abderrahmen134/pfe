import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

   private apiUrl = 'http://127.0.0.1:8000/api/types';
  constructor(private http: HttpClient) { }
    getTypes(): Observable<any> {
      return this.http.get<any>(this.apiUrl);
    }
}
