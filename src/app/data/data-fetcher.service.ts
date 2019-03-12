import { Injectable } from '@angular/core';
import { iJsonResponse } from '../common/interfaces/models/iResponse';

declare var require: any;
var data = require("./activity_feed.json");

@Injectable({
  providedIn: 'root'
})

export class DataFetcherService {

  constructor() { }

  async get(): Promise<iJsonResponse> {
    return <iJsonResponse>data;
  }
}
