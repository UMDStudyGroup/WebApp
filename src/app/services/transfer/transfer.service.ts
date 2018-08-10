import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor() { }

  private data: string;

  setData(data) {
    this.data = data;
  }

  getData() {
    const temp = this.data;
    this.clearData();
    console.log(temp);
    return temp;
  }

  clearData() {
    this.data = undefined;
  }

}
