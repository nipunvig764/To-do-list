import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { Thursday } from '../shared/thursday.model';
import { ThursdayService } from '../shared/thursday.service';
import { DataStorageService } from '../shared/datastorage.service';
import {Response} from '@angular/http';
@Component({
  selector: 'app-thursday',
  templateUrl: './thursday.component.html',
  styleUrls: ['./thursday.component.css']
})
export class ThursdayComponent implements OnInit {
  thursday:Thursday[]
  private subscription:Subscription;
  constructor(private slService:ThursdayService,private dataStorageService:DataStorageService) { }

  onSave(){
    this.dataStorageService.storeThursday()
      .subscribe(
        (response:Response) => {
          console.log(response);
        }
      );
  }

  onGet(){
    this.dataStorageService.getThursday();
  }

  ngOnInit() {
    this.thursday=this.slService.getMaterials();
    this.subscription=this.slService.materialsChanged
    
      .subscribe(
        (thursday:Thursday[])=>{
          this.thursday=thursday;
        }
      );
  }

  onEditItem(index:number){
    console.log(index);
    this.slService.startedEditing.next(index);
  }


}
