import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { RouterLinkActive, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  idV: {id: number};

  constructor(private serversService: ServersService,private routerApp: ActivatedRoute) {

   }

  ngOnInit() {
    this.server = this.serversService.getServer(+this.routerApp.snapshot.params['id']);

  }

}
