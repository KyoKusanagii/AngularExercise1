import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HTTP_OPTION, REST_SERVER_URL} from '../common/system-constant';

const api = REST_SERVER_URL + '/report001';

@Injectable({
  providedIn: 'root'
})
export class Report001Service {


  constructor(private http: HttpClient) {
  }

  getReport001Data(pDcId: string, pFactoryId: string, pOwnerId: string, pDateFrom: string, pDateTo: string, pPurgrp: string) {
    return this.http.post(api + "", {pDcId, pFactoryId, pOwnerId, pDateFrom, pDateTo, pPurgrp}, {headers:new HttpHeaders()
        .set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*')});
  }


}
