import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { TuesdayService } from 'src/app/shared/tuesday.service';
import { Tuesday } from 'src/app/shared/tuesday.model';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';

const swal: SweetAlert = _swal as any;

@Component({
  selector: 'app-tuesday-edit',
  templateUrl: './tuesday-edit.component.html',
  styleUrls: ['./tuesday-edit.component.css']
})
export class TuesdayEditComponent implements OnInit,OnDestroy {
  @ViewChild('f',{static:false}) slForm:NgForm;
  subscription:Subscription;   
  editMode=false;
  editedItemIndex:number;
  editedItem:Tuesday;
  
  

  constructor(private tuesdayService:TuesdayService) { }

  ngOnInit() {
    this.subscription=this.tuesdayService.startedEditing
      .subscribe(
        (index:number) =>
        {
          this.editedItemIndex=index;
          this.editMode=true;
          console.log(this.editMode);
          this.editedItem=this.tuesdayService.getMaterial(index);
          this.slForm.setValue({
            name:this.editedItem.name,
          })
        }
      );
  }

onSubmit(form:NgForm){
  const value=form.value;
  const newMaterial = new Tuesday(value.name);
  if(this.editMode){
      this.tuesdayService.upDateMaterial(this.editedItemIndex,newMaterial);
    

  } else{
      this.tuesdayService.addMaterial(newMaterial);
  
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
      this.tuesdayService.deleteMaterial(this.editedItemIndex);
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
  
