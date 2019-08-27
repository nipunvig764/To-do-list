import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Thursday } from 'src/app/shared/thursday.model';
import { ThursdayService } from 'src/app/shared/thursday.service';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';

const swal: SweetAlert = _swal as any;
@Component({
  selector: 'app-thursday-edit',
  templateUrl: './thursday-edit.component.html',
  styleUrls: ['./thursday-edit.component.css']
})
export class ThursdayEditComponent implements OnInit,OnDestroy {
  @ViewChild('f',{static:false}) slForm:NgForm;
  subscription:Subscription;   
  editMode=false;
  editedItemIndex:number;
  editedItem:Thursday;
  
  

  constructor(private thursdayService:ThursdayService) { }

  ngOnInit() {
    this.subscription=this.thursdayService.startedEditing
      .subscribe(
        (index:number) =>
        {
          this.editedItemIndex=index;
          this.editMode=true;
          console.log(this.editMode);
          this.editedItem=this.thursdayService.getMaterial(index);
          this.slForm.setValue({
            name:this.editedItem.name,
          })
        }
      );
  }

onSubmit(form:NgForm){
  const value=form.value;
  const newMaterial = new Thursday(value.name);
  if(this.editMode){
      this.thursdayService.upDateMaterial(this.editedItemIndex,newMaterial);
    

  } else{
      this.thursdayService.addMaterial(newMaterial);
  
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
      this.thursdayService.deleteMaterial(this.editedItemIndex);
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

