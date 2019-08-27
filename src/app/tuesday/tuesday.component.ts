import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { Tuesday } from '../shared/tuesday.model';
import { TuesdayService } from '../shared/tuesday.service';
import { DataStorageService } from '../shared/datastorage.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-tuesday',
  templateUrl: './tuesday.component.html',
  styleUrls: ['./tuesday.component.css']
})
export class TuesdayComponent implements OnInit {
  tuesday:Tuesday[]
  private subscription:Subscription;
  constructor(private slService:TuesdayService,private dataStorageService:DataStorageService) { }

  onSave(){
    this.dataStorageService.storeTuesday()
      .subscribe(
        (response:Response) => {
          console.log(response);
        }
      
      );
  }

  onGet(){
    this.dataStorageService.getTuesday();
  }

  ngOnInit() {
    this.tuesday=this.slService.getMaterials();
    this.subscription=this.slService.materialsChanged
    
      .subscribe(
        (tuesday:Tuesday[])=>{
          this.tuesday=tuesday;
        }
      );
  }

  onEditItem(index:number){
    console.log(index);
    this.slService.startedEditing.next(index);
  }
}
