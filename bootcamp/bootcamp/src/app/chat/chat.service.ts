import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {

  public usuario: string;
  public logTime: Date;
  private serverUrl = 'http://172.24.30.24:3000/';
  public server: any;


  constructor() {

    if (!localStorage.getItem('nome')) {
      this.usuario =  prompt('Qual é o seu nome?');
      this.logTime = new Date();
    }else {
      this.usuario = localStorage.getItem('nome');
      this.logTime = new Date();
    }
    localStorage.setItem('nome', this.usuario);
    this.server = io(this.serverUrl);
  }
}
