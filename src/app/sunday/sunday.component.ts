import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { Material } from '../shared/todo.model';
import { orderListService } from '../shared/todo.service';
import { DataStorageService } from '../shared/datastorage.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-sunday',
  templateUrl: './sunday.component.html',
  styleUrls: ['./sunday.component.css'],
})
export class SundayComponent implements OnInit {
  material:Material[]
  private subscription:Subscription;
  constructor(private slService:orderListService,private dataStorageService:DataStorageService) { }

  onSave(){
    this.dataStorageService.storeTask()
      .subscribe(
        (response:Response) => {
          console.log(response);
        }
      
      );
  }

  onGet(){
    this.dataStorageService.getMaterials();
  }
  
  ngOnInit() {
    this.material=this.slService.getMaterials();
    this.subscription=this.slService.materialsChanged
    
      .subscribe(
        (material:Material[])=>{
          this.material=material;
        }
      );
  }

  onEditItem(index:number){
    console.log(index);
    this.slService.startedEditing.next(index);
  }
}