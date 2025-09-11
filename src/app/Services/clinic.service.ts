import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClinicService {
  private updateUrl = '';

  constructor(private http: HttpClient) {}

  getClinics() {
    return this.http.post<any>(this.updateUrl, {});
  }
}
