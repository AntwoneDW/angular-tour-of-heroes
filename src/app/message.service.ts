import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  add(message: string)
  {
    console.log("adding message: ", message);
    this.messages.push(message);
  }

  clear()
  {
    console.log("clearing messages");
    this.messages = [];
  }

  constructor() { }
}
