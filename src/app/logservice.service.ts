import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogserviceService {

  constructor() { }

  logThis(msg:string)
  {
    console.log(" * " + msg);
  }
}
