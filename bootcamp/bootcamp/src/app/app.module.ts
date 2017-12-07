import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routes';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ChatItemComponent } from './chat/chat-item/chat-item.component';
import {ChatService} from './chat/chat.service';
import { ChatHeaderComponent } from './chat/chat-header/chat-header.component';
import { SobreComponent } from './sobre/sobre.component';
import { ConnectService } from './sobre/connect.service';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatItemComponent,
    ChatHeaderComponent,
    SobreComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    ChatService,
    ConnectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
