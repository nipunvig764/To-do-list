import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { MondayService } from '../shared/monday.service';
import { Monday } from '../shared/monday.model';
import { DataStorageService } from '../shared/datastorage.service';
import { Response } from '@angular/http';
@Component({
  selector: 'app-monday',
  templateUrl: './monday.component.html',
  styleUrls: ['./monday.component.css']
})
export class MondayComponent implements OnInit {

  monday:Monday[]
  private subscription:Subscription;
  constructor(private slService:MondayService,private dataStorageService:DataStorageService) { }

  onSave(){
    this.dataStorageService.storeMonday()
      .subscribe(
        (response:Response) => {
          console.log(response);
        }
      
      );
  }

  onGet(){
    this.dataStorageService.getMonday();
  }

  ngOnInit() {
    this.monday=this.slService.getMondays();
    this.subscription=this.slService.materialsChanged
    
      .subscribe(
        (monday:Monday[])=>{
          this.monday=monday;
        }
      );
  }

  onEditItem(index:number){
    console.log(index);
    this.slService.startedEditing.next(index);
  }
}