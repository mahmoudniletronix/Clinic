import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClinicService {
  private baseUrl = 'https://queue.cleopatrahospitals.com';

  private readonly Q_UPDATE_ENDPOINT = `${this.baseUrl}/QBSLive.aspx/GetQUpdate`;
  private readonly SERVER_TIME_ENDPOINT = `${this.baseUrl}/QLive.aspx/GetServerTime`;

  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  });

  constructor(private http: HttpClient) {}

  getQueueUpdate(): Observable<any> {
    return this.http.post<any>(
      this.Q_UPDATE_ENDPOINT,
      {},
      { headers: this.headers }
    );
  }

  getServerTime(): Observable<any> {
    return this.http.post<any>(
      this.SERVER_TIME_ENDPOINT,
      {},
      { headers: this.headers }
    );
  }

  getClinicDataWithTime(): Observable<{ queueData: any; serverTime: any }> {
    return forkJoin({
      queueData: this.getQueueUpdate(),
      serverTime: this.getServerTime(),
    }).pipe(
      map(({ queueData, serverTime }) => ({
        queueData,
        serverTime,
      }))
    );
  } 
}
