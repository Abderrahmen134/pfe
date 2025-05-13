import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://127.0.0.1:8000/api/admins';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(this.apiUrl);
  }

  create(admin: any) {
    return this.http.post(this.apiUrl, admin);
  }

  update(id: number, admin: any) {
    return this.http.put(`${this.apiUrl}/${id}`, admin);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
