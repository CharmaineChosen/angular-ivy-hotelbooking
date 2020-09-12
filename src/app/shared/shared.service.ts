import { Injectable } from '@angular/core';
import { personal } from 'src/app/model/personal';

@Injectable()
export class SharedService {
  personaldata: personal;

  constructor() { }

  setData(data){
    this.personaldata = data;
  }

  getData(){
    return this.personaldata;
  }
}