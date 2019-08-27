import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { Wednesday } from '../shared/wednesday.model';
import { WednesdayService } from '../shared/wednesday.service';
import { DataStorageService } from '../shared/datastorage.service';
import {Response} from '@angular/http';
@Component({
  selector: 'app-wednesday',
  templateUrl: './wednesday.component.html',
  styleUrls: ['./wednesday.component.css']
})
export class WednesdayComponent implements OnInit {
  wednesday:Wednesday[]
  private subscription:Subscription;
  constructor(private slService:WednesdayService,private dataStorageService:DataStorageService) { }

  onSave(){
    this.dataStorageService.storeWednesday()
      .subscribe(
        (response:Response) => {
          console.log(response);
        }
      
      );
  }

  onGet(){
    this.dataStorageService.getWednesday();
  }

  ngOnInit() {
    this.wednesday=this.slService.getMaterials();
    this.subscription=this.slService.materialsChanged
    
      .subscribe(
        (wednesday:Wednesday[])=>{
          this.wednesday=wednesday;
        }
      );
  }

  onEditItem(index:number){
    console.log(index);
    this.slService.startedEditing.next(index);
  }
}
