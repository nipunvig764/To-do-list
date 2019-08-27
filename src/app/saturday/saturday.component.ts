import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { Saturday } from '../shared/saturday.model';
import { SaturdayService } from '../shared/saturday.service';
import { DataStorageService } from '../shared/datastorage.service';
import {Response} from '@angular/http';
@Component({
  selector: 'app-saturday',
  templateUrl: './saturday.component.html',
  styleUrls: ['./saturday.component.css']
})
export class SaturdayComponent implements OnInit {
  saturday:Saturday[]
  private subscription:Subscription;
  constructor(private slService:SaturdayService,private dataStorageService:DataStorageService) { }

  onSave(){
    this.dataStorageService.storeSaturday()
      .subscribe(
        (response:Response) => {
          console.log(response);
        }
      );
  }

  onGet(){
    this.dataStorageService.getSaturday();
  }

  ngOnInit() {
    this.saturday=this.slService.getMaterials();
    this.subscription=this.slService.materialsChanged
    
      .subscribe(
        (saturday:Saturday[])=>{
          this.saturday=saturday;
        }
      );
  }

  onEditItem(index:number){
    console.log(index);
    this.slService.startedEditing.next(index);
  }


}
