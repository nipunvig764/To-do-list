import { Subject } from 'rxjs';
import { Monday } from './monday.model';



export class MondayService{
    materialsChanged= new Subject<Monday[]>();
    startedEditing=new Subject<number>();
    private mondays:Monday[]=
      [
        
      ];
  

    getMondays(){
        return this.mondays.slice();
    }

    setMonday(mondays:Monday[]){
      this.mondays=mondays;
      this.materialsChanged.next(this.mondays.slice())
    }

    getMaterial(index:number){
      console.log(index);
      return this.mondays[index];
    }

    addMaterial(monday:Monday){
        this.mondays.push(monday);
        this.materialsChanged.next(this.mondays.slice());
    }

    upDateMaterial(index:number,newMaterial:Monday){
      this.mondays[index] = newMaterial;
      this.materialsChanged.next(this.mondays.slice());
    }

    deleteMaterial(index:number){
      this.mondays.splice(index,1);
      this.materialsChanged.next(this.mondays.slice());
    }

    addMaterials(mondays:Monday[]){
      this.mondays.push(...mondays);
      this.materialsChanged.next(this.mondays.slice())
    }

}