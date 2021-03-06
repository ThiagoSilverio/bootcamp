import { Component, OnInit } from '@angular/core';
import {ChatService} from '../chat.service';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.css']
})
export class ChatHeaderComponent implements OnInit {

  public usuario: string;
  public logTime: Date;

  constructor(private _chatService: ChatService) {
    this.usuario = _chatService.usuario;
    this.logTime = _chatService.logTime;
  }

  ngOnInit() {
  }

}
