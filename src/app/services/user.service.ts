import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://127.0.0.1:8000/api/clients'; // à adapter selon ton back

  constructor(private http: HttpClient) {}

  inscrireUtilisateur(data: any) {
    return this.http.post(this.apiUrl, data);
  }
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
