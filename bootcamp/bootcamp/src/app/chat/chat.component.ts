import { AfterContentChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements AfterContentChecked, AfterViewInit {
  public mensagens: Object[] = [];
  public mensagemInserir: string;

  @ViewChild('chatItem') private scrollContainer: ElementRef;

  constructor(private _chatService: ChatService) {
    _chatService.server.on('messages', m => this.mensagens.push(m));
  }

  private scrollBottom(): void {
    this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
  }

  public enviaMensagem(): void {
    const obj = {
      message: this.mensagemInserir,
      author: this._chatService.usuario
    };
    this._chatService.server.emit('messages', obj);
    this.mensagemInserir = '';
  }

    public ngAfterContentChecked(): void {
        this.scrollBottom();
    }

    public ngAfterViewInit(): void {
        this.scrollBottom();
    }
}

