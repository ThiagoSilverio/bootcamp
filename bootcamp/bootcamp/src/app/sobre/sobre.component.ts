import { Component, OnInit } from '@angular/core';
import { ConnectService } from './connect.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {
public users;
  constructor(private _connectService: ConnectService) { }

  ngOnInit() {
    this._connectService.getUsers().subscribe(
      resp => this.users = resp,
      err => console.log(err)
    );
  }

}
