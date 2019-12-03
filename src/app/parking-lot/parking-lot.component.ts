import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parking-lot',
  templateUrl: './parking-lot.component.html',
  styleUrls: ['./parking-lot.component.css']
})
export class ParkingLotComponent implements OnInit {

  newServerName = '';
  newServerContent = '';
  // tslint:disable-next-line: no-output-on-prefix
  @Output() addedServer = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() addedBlueprint = new EventEmitter<{serverName: string, serverContent: string}>();

  constructor() { }

  ngOnInit() {
  }

  onServerAdded() {
    this.addedServer.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onBlueprintAdded() {
    this.addedBlueprint.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }
}
