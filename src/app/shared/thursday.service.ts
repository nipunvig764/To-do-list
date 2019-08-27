import { Subject } from 'rxjs';
import { Thursday } from './thursday.model';



export class ThursdayService{
    materialsChanged= new Subject<Thursday[]>();
    startedEditing=new Subject<number>();
    private thursdays:Thursday[]=
      [
        
      ];

    getMaterials(){
        return this.thursdays.slice();
    }

    setMonday(thursdays:Thursday[]){
      this.thursdays=thursdays;
      this.materialsChanged.next(this.thursdays.slice())
    }

    getMaterial(index:number){
      console.log(index);
      return this.thursdays[index];
    }

    addMaterial(thursday:Thursday){
        this.thursdays.push(thursday);
        this.materialsChanged.next(this.thursdays.slice());
    }

    upDateMaterial(index:number,newMaterial:Thursday){
      this.thursdays[index] = newMaterial;
      this.materialsChanged.next(this.thursdays.slice());
    }

    deleteMaterial(index:number){
      this.thursdays.splice(index,1);
      this.materialsChanged.next(this.thursdays.slice());
    }

    addMaterials(wednesdays:Thursday[]){
      this.thursdays.push(...wednesdays);
      this.materialsChanged.next(this.thursdays.slice())
    }
}