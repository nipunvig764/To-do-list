import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Monday } from 'src/app/shared/monday.model';
import { MondayService } from 'src/app/shared/monday.service';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';

const swal: SweetAlert = _swal as any;


@Component({
  selector: 'app-monday-edit',
  templateUrl: './monday-edit.component.html',
  styleUrls: ['./monday-edit.component.css']
})
export class MondayEditComponent implements OnInit,OnDestroy {
  @ViewChild('f',{static:false}) slForm:NgForm;
  subscription:Subscription;   
  editMode=false;
  editedItemIndex:number;
  editedItem:Monday;
  
  

  constructor(private mondayService:MondayService) { }

  ngOnInit() {
    this.subscription=this.mondayService.startedEditing
      .subscribe(
        (index:number) =>
        {
          this.editedItemIndex=index;
          this.editMode=true;
          console.log(this.editMode);
          this.editedItem=this.mondayService.getMaterial(index);
          this.slForm.setValue({
            name:this.editedItem.name,
          })
        }
      );
  }

onSubmit(form:NgForm){
  const value=form.value;
  const newMaterial = new Monday(value.name);
  if(this.editMode){
      this.mondayService.upDateMaterial(this.editedItemIndex,newMaterial);
    

  } else{
      this.mondayService.addMaterial(newMaterial);
  
  this.editMode=false;
  form.reset();
}
}

onClear(){
  this.slForm.reset();
  this.editMode=false;
}

onDelete(){
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this task!",
    icon: "warning",
  })
  .then((willDelete) => {
    if (willDelete) {
      this.mondayService.deleteMaterial(this.editedItemIndex);
      this.onClear();
      swal("Poof! Your task has been deleted!", {
        icon: "success",
      });
    } else {
      swal("Your task is safe!");
    }
  });
  
}

ngOnDestroy(){
  this.subscription.unsubscribe();
}

}

