import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CardServiceService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<any>(
      'https://hub.dummyapis.com/employee?noofRecords&#61;10&idStarts&#61;1001'
    );
  }
}
