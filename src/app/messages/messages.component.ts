import {Component, Input, OnInit} from '@angular/core';
import {MessageService} from "../message.service";
import {LogserviceService} from "../logservice.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  theMessage: string;

  constructor(public messageService: MessageService,
              public logserviceService: LogserviceService) {
    console.log(messageService.messages.length + " length of messages");
    //this.theMessage = 'Hi';
  }

  ngOnInit(): void {
  }

}
