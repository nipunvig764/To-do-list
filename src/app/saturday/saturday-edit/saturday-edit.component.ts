import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Saturday } from 'src/app/shared/saturday.model';
import { SaturdayService } from 'src/app/shared/saturday.service';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';

const swal: SweetAlert = _swal as any;

@Component({
  selector: 'app-saturday-edit',
  templateUrl: './saturday-edit.component.html',
  styleUrls: ['./saturday-edit.component.css']
})
export class SaturdayEditComponent implements OnInit,OnDestroy {

  @ViewChild('f',{static:false}) slForm:NgForm;
  subscription:Subscription;   
  editMode=false;
  editedItemIndex:number;
  editedItem:Saturday;
  
  constructor(private saturdayService:SaturdayService) { }

  ngOnInit() {
    this.subscription=this.saturdayService.startedEditing
      .subscribe(
        (index:number) =>
        {
          this.editedItemIndex=index;
          this.editMode=true;
          console.log(this.editMode);
          this.editedItem=this.saturdayService.getMaterial(index);
          this.slForm.setValue({
            name:this.editedItem.name,
          })
        }
      );
  }

onSubmit(form:NgForm){
  const value=form.value;
  const newMaterial = new Saturday(value.name);
  if(this.editMode){
      this.saturdayService.upDateMaterial(this.editedItemIndex,newMaterial);
    

  } else{
      this.saturdayService.addMaterial(newMaterial);
  
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
      this.saturdayService.deleteMaterial(this.editedItemIndex);
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
