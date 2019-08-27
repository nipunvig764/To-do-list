import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();;
  newServerName='';
  newServerContent='';

  constructor() { }

  ngOnInit() {
  }

  onUpdateServerName(event:Event){
    this.newServerName = (<HTMLInputElement>event.target).value;
  }
  onUpdateServerContent(event:Event){
    this.newServerContent = (<HTMLInputElement>event.target).value;
  }

  onAddServer(){
    this.serverCreated.emit({
      serverName:this.newServerName,
      serverContent:this.newServerContent
    });
  }
  onAddBlueprint(){
    this.blueprintCreated.emit({
      serverName:this.newServerName,
      serverContent:this.newServerContent
    });
  }
}
