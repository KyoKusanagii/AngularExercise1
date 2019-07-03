import {Component, OnInit, ViewChild} from '@angular/core';
import {Report001Service} from './report001.service';
import {formatDate} from "@angular/common";
import {FORMATE_DATE, LOCALE} from "../common/system-constant";

@Component({
  selector: 'app-report001',
  templateUrl: './report001.component.html',
  styleUrls: ['./report001.component.css']
})


export class Report001Component implements OnInit {

  qryObj = {pDcId: '', pOwnerId: '', pFactoryId: '', pDateFrom: '', pDateTo: '', pPurgrp: ''} as any;
  qryList: any []; //查詢結果集合
  showResult = false;

  constructor(private report001: Report001Service) {
  }

  ngOnInit() {

  }

  queryReport001() {
    this.qryObj.pDateFrom = formatDate(this.qryObj.pDateFrom, FORMATE_DATE, LOCALE);
    this.qryObj.pDateTo = formatDate(this.qryObj.pDateTo, FORMATE_DATE, LOCALE);
    this.report001.getReport001Data(this.qryObj.pDcId, this.qryObj.pFactoryId, this.qryObj.pOwnerId, this.qryObj.pDateFrom
      , this.qryObj.pDateTo, this.qryObj.pPurgrp).subscribe((result: any) => {
      this.qryList = result as Report001ResVO[];  //把撈出來的JsonArray當成是陣列

    });
  }

  isShowResult() {
    this.showResult = !this.showResult;
  }

  clear() {
    this.showResult = false;
    this.qryObj.pDcId = "";
    this.qryObj.pOwnerId = "";
    this.qryObj.pFactoryId = "";
    this.qryObj.pDateFrom = "";
    this.qryObj.pDateTo = "";
    this.qryObj.pPurgrp = "";
  }

}

//為了映射從後端拿出的資料對應的bean，Angular會用介面的方式定義
interface Report001ResVO {
  custNo: string;
  shpChannelId: string;
  custId: string;
  skuId: string;
  skuName: string;
  avaiableQty: number;
  qty: number;
  shipQtyshipQty: number;
  net: number;
  wmsInner: number;
  sapInner: number;
  closeDate: string;
  purgrp: string;
  reason: string;
}
