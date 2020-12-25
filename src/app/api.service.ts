import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = 'key7jIbxK4zBiOYDr';
  AIRTABLE_BASE = 'https://api.airtable.com/v0';
  
  M3 = ''

  constructor(private http: HttpClient) { }

  airtableToMapping() {
    return map((response: any) => {
      const ret = {};
      response.records.forEach((i) => {
        ret[i.id] = i.fields;
      });
      return ret;
    });
  }

  airtableFetch(base, table, view, record?) {
    const headers = {
      Authorization: `Bearer ${this.API_KEY}`
    };
    let url = `${this.AIRTABLE_BASE}/${base}/${table}`;
    let params = {};
    if (record) {
      url += `/${record}`;
    } else {
      params = {
        maxRecords: 1000,
        view: view
      };
    }
    return this.http.get(
      url, {headers, params}
    );
  }
}