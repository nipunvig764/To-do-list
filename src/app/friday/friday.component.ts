
import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { Friday } from '../shared/friday.model';
import { FridayService } from '../shared/friday.service';
import { DataStorageService } from '../shared/datastorage.service';
import {Response} from '@angular/http';
@Component({
  selector: 'app-friday',
  templateUrl: './friday.component.html',
  styleUrls: ['./friday.component.css']
})
export class FridayComponent implements OnInit {
  friday:Friday[]
  private subscription:Subscription;
  constructor(private slService:FridayService,private dataStorageService:DataStorageService) { }

  onSave(){
    this.dataStorageService.storeFriday()
      .subscribe(
        (response:Response) => {
          console.log(response);
        }
      );
  }

  onGet(){
    this.dataStorageService.getFriday();
  }
  ngOnInit() {
    this.friday=this.slService.getMaterials();
    this.subscription=this.slService.materialsChanged
    
      .subscribe(
        (friday:Friday[])=>{
          this.friday=friday;
        }
      );
  }

  onEditItem(index:number){
    console.log(index);
    this.slService.startedEditing.next(index);
  }
}


