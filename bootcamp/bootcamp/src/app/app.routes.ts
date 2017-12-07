import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { SobreComponent } from './sobre/sobre.component';

const appRoutes: Routes = [
  { path: '', component: ChatComponent},
  { path: 'chat', component: ChatComponent},
  { path: 'sobre', component: SobreComponent},
  { path: '**', component: ChatComponent}
// tslint:disable-next-line:semicolon
]

export const routing = RouterModule.forRoot(appRoutes);
