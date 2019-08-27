import { Subject } from 'rxjs';
import { Wednesday } from './wednesday.model';



export class WednesdayService{
    materialsChanged= new Subject<Wednesday[]>();
    startedEditing=new Subject<number>();
    private wednesdays:Wednesday[]=
      [
        
      ];

    getMaterials(){
        return this.wednesdays.slice();
    }

    setMonday(wednesdays:Wednesday[]){
      this.wednesdays=wednesdays;
      this.materialsChanged.next(this.wednesdays.slice())
    }

    getMaterial(index:number){
      console.log(index);
      return this.wednesdays[index];
    }

    addMaterial(wednesday:Wednesday){
        this.wednesdays.push(wednesday);
        this.materialsChanged.next(this.wednesdays.slice());
    }

    upDateMaterial(index:number,newMaterial:Wednesday){
      this.wednesdays[index] = newMaterial;
      this.materialsChanged.next(this.wednesdays.slice());
    }

    deleteMaterial(index:number){
      this.wednesdays.splice(index,1);
      this.materialsChanged.next(this.wednesdays.slice());
    }

    addMaterials(wednesdays:Wednesday[]){
      this.wednesdays.push(...wednesdays);
      this.materialsChanged.next(this.wednesdays.slice())
    }
}