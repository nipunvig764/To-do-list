import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Material } from 'src/app/shared/todo.model';
import { orderListService } from 'src/app/shared/todo.service';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';

const swal: SweetAlert = _swal as any;
@Component({
  selector: 'app-sunday-edit',
  templateUrl: './sunday-edit.component.html',
  styleUrls: ['./sunday-edit.component.css']
})
export class SundayEditComponent implements OnInit,OnDestroy {
  @ViewChild('f',{static:false}) slForm:NgForm;
  subscription:Subscription;   
  editMode=false;
  editedItemIndex:number;
  editedItem:Material;
  
  

  constructor(private slService:orderListService) { }

  ngOnInit() {
    this.subscription=this.slService.startedEditing
      .subscribe(
        (index:number) =>
        {
          this.editedItemIndex=index;
          this.editMode=true;
          console.log(this.editMode);
          this.editedItem=this.slService.getMaterial(index);
          this.slForm.setValue({
            name:this.editedItem.name,
          })
        }
      );
  }

onSubmit(form:NgForm){
  const value=form.value;
  const newMaterial = new Material(value.name);
  if(this.editMode){
      this.slService.upDateMaterial(this.editedItemIndex,newMaterial);
    

  } else{
      this.slService.addMaterial(newMaterial);
  
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
      this.slService.deleteMaterial(this.editedItemIndex);
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