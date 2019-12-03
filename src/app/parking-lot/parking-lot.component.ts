import { ServersComponent } from './../servers/servers.component';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-parking-lot',
  templateUrl: './parking-lot.component.html',
  styleUrls: ['./parking-lot.component.css']
})
export class ParkingLotComponent implements OnInit {

  newServerName = '';
  newServerContent = '';
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onBlueprintAdded = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() addedBlueprint = new EventEmitter<{servername: string, serverContent: string}>();

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.onAddBlueprint.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {

  }
}
